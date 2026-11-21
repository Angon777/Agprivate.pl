# Spokojny, refleksyjny podkład "pianino + pad" generowany od zera (bez praw autorskich).
import numpy as np, wave, sys
SR=44100; dur=float(sys.argv[1]) if len(sys.argv)>1 else 25.0
t_all=np.zeros(int(SR*dur)); 
def f(n): return 440*2**((n-69)/12)
def piano(freq,length,vel=0.5):
    t=np.arange(int(SR*length))/SR
    s=sum((1/(h**1.6))*np.sin(2*np.pi*freq*h*t) for h in range(1,7))
    env=np.exp(-t*2.8)*(1-np.exp(-t*300))
    return vel*s*env
def pad(freqs,length):
    t=np.arange(int(SR*length))/SR
    s=sum(np.sin(2*np.pi*fr*t)+0.3*np.sin(2*np.pi*fr*2.003*t) for fr in freqs)
    env=np.minimum(1,t/1.2)*np.minimum(1,(length-t)/1.2)
    return 0.05*s*env
def add(buf,sig,start):
    i=int(start*SR); j=min(len(buf),i+len(sig)); buf[i:j]+=sig[:j-i]
prog=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]  # Am F C G
bar=3.0; beat=bar/4
t=0;k=0
while t<dur-0.5:
    ch=prog[k%4]
    add(t_all,pad([f(n) for n in ch],bar+0.8),t)
    add(t_all,piano(f(ch[0]-12),bar,0.35),t)
    arp=[ch[0]+12,ch[1]+12,ch[2]+12,ch[1]+12]
    for b in range(4):
        add(t_all,piano(f(arp[b]),2.0,0.22 if b else 0.3),t+b*beat)
    t+=bar;k+=1
# prosty pogłos
ir=np.random.randn(int(SR*1.6))*np.exp(-np.linspace(0,6,int(SR*1.6)))*0.02
wet=np.convolve(t_all,ir)[:len(t_all)]
out=t_all+wet
fade=int(SR*2); out[-fade:]*=np.linspace(1,0,fade); out[:int(SR*0.3)]*=np.linspace(0,1,int(SR*0.3))
out=out/np.max(np.abs(out))*0.7
w=wave.open('muzyka.wav','wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((out*32767).astype(np.int16).tobytes()); w.close()
