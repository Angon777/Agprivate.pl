# J.S. Bach, Preludium C-dur BWV 846 (domena publiczna), zagrane z nut syntezatorem fortepianu.
# Użycie: python3 klasyka.py <sekundy> [bpm]
import numpy as np, wave, sys
SR=44100; dur=float(sys.argv[1]) if len(sys.argv)>1 else 30; bpm=float(sys.argv[2]) if len(sys.argv)>2 else 84
bars=[[60,64,67,72,76],[60,62,69,74,77],[59,62,67,74,77],[60,64,67,72,76],[60,64,69,76,81],[60,62,66,69,74],
[59,62,67,74,79],[59,60,64,67,72],[57,60,64,67,72],[50,57,62,66,72],[55,59,62,67,71],[55,58,64,67,73],
[53,57,62,69,74],[53,56,62,65,71],[52,55,60,67,72],[52,53,57,60,65],[50,53,57,60,65],[43,50,55,59,65],[48,52,55,60,64]]
N=int(SR*dur); L=np.zeros(N+SR*10); R=np.zeros(N+SR*10)
def f(n): return 440*2**((n-69)/12)
def piano(n,sec,vel):
    fr=f(n); t=np.arange(int(SR*sec))/SR
    B=0.0002*(1+(n-48)/24)  # lekka nieharmoniczność strun
    s=np.zeros_like(t)
    for h in range(1,9):
        fh=fr*h*np.sqrt(1+B*h*h)
        if fh>SR/2.2: break
        s+=(1/h**1.3)*np.exp(-t*(1.2+0.35*h)*(1+(n-60)/48))*np.sin(2*np.pi*fh*t+0.3*h)
    att=1-np.exp(-t*250)
    hammer=np.exp(-t*60)*0.15*np.sin(2*np.pi*fr*6.3*t)
    return vel*(s*att+hammer)
s16=60/bpm/4; t=0.15; bi=0
while t<dur-0.5 and bi<len(bars):
    c=bars[bi]; pat=[0,1,2,3,4,2,3,4]*2
    for e,ix in enumerate(pat):
        n=c[ix]; st=t+e*s16
        sec=(16-e)*s16+1.2 if ix in (0,1) and e in (0,1,8,9) else 1.6
        if ix in (0,1) and e>=8: continue
        sig=piano(n,sec,0.30 if ix>1 else 0.38)
        i=int(st*SR); pan=(n-62)/40
        L[i:i+len(sig)]+=sig*(1-pan); R[i:i+len(sig)]+=sig*(1+pan)
    t+=16*s16; bi+=1
# zakończenie akordem C-dur
for n in (48,60,64,67,72):
    sig=piano(n,3.5,0.3); i=int(t*SR); L[i:i+len(sig)]+=sig; R[i:i+len(sig)]+=sig
end=min(len(L),int((t+3.0)*SR)); L=L[:end]; R=R[:end]
rng=np.random.default_rng(3); ir=rng.standard_normal(int(SR*1.8))*np.exp(-np.linspace(0,6,int(SR*1.8)))*0.02
L=L+np.convolve(L,ir)[:len(L)]; R=R+np.convolve(R,ir)[:len(R)]
st=np.stack([L,R],1); fo=int(SR*1.5); st[-fo:]*=np.linspace(1,0,fo)[:,None]
st=st/np.max(np.abs(st))*0.8
w=wave.open('bach.wav','wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((st*32767).astype(np.int16).tobytes()); w.close(); print(round(len(L)/SR,1),'s, taktów:',bi)
