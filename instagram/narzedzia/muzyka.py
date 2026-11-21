# Generator podkładu do rolek (muzyka tworzona od zera, bez praw autorskich).
# Użycie: python3 muzyka.py <sekundy> [pozytywna|spokojna]
import numpy as np, wave, sys
SR=44100
dur=float(sys.argv[1]) if len(sys.argv)>1 else 30.0
styl=sys.argv[2] if len(sys.argv)>2 else "pozytywna"
N=int(SR*dur); L=np.zeros(N); R=np.zeros(N)
rng=np.random.default_rng(7)
def f(n): return 440*2**((n-69)/12)
def add(sig,start,pan=0.0):
    i=int(start*SR)
    if i>=N: return
    j=min(N,i+len(sig)); s=sig[:j-i]
    L[i:j]+=s*(1-pan)/2*2**0.5; R[i:j]+=s*(1+pan)/2*2**0.5
def tt(sec): return np.arange(int(SR*sec))/SR
def pluck(fr,sec,vel):
    t=tt(sec); s=sum((0.6**h)*np.sin(2*np.pi*fr*(h+1)*t) for h in range(5))
    return vel*s*np.exp(-t*7)*(1-np.exp(-t*400))
def keys(fr,sec,vel):
    t=tt(sec); s=sum((1/(h**1.5))*np.sin(2*np.pi*fr*h*t) for h in range(1,6))
    return vel*s*np.exp(-t*2.2)*(1-np.exp(-t*300))
def pad(frs,sec,vel):
    t=tt(sec); s=sum(np.sin(2*np.pi*x*t)+0.4*np.sin(2*np.pi*x*1.004*t) for x in frs)
    return vel*s*np.minimum(1,t/0.6)*np.minimum(1,(sec-t)/0.6)
def bass(fr,sec,vel):
    t=tt(sec); return vel*(np.sin(2*np.pi*fr*t)+0.3*np.sin(4*np.pi*fr*t))*np.exp(-t*3)*(1-np.exp(-t*200))
def kick(vel=0.9):
    t=tt(0.35); fr=110*np.exp(-t*18)+45; return vel*np.sin(2*np.pi*np.cumsum(fr)/SR)*np.exp(-t*9)
def clap(vel=0.35):
    t=tt(0.25); return vel*rng.standard_normal(len(t))*np.exp(-t*22)
def hat(vel=0.12):
    t=tt(0.06); n=rng.standard_normal(len(t)); n=np.diff(n,prepend=0); return vel*n*np.exp(-t*70)
if styl=="spokojna":
    bpm=72; prog=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]; drums=False
else:
    bpm=112; prog=[[62,66,69],[57,61,64],[59,62,66],[55,59,62]]  # D A Bm G (I-V-vi-IV)
    drums=True
beat=60/bpm; bar=4*beat; t=0; k=0
while t<dur:
    ch=prog[k%4]; intro=k<1
    add(pad([f(n) for n in ch],bar+0.3,0.035),t)
    for b in range(4):
        add(bass(f(ch[0]-24),beat*0.9,0.45 if not intro else 0.25),t+b*beat)
    patt=[0,1,2,1,0,2,1,2]
    for e in range(8):
        n=ch[patt[e]]+12+(12 if e in (3,7) else 0)
        add(pluck(f(n),0.5,0.18 if e%2 else 0.24),t+e*beat/2,pan=0.35 if e%2 else -0.35)
    add(keys(f(ch[2]+12),bar,0.10),t,pan=0.2)
    if drums and not intro:
        for b in range(4):
            add(kick(),t+b*beat)
            if b in (1,3): add(clap(),t+b*beat,pan=0.1)
        for e in range(8): add(hat(0.10 if e%2 else 0.06),t+e*beat/2+ (0.0),pan=0.5)
    t+=bar; k+=1
# lekki pogłos
ir=rng.standard_normal(int(SR*1.0))*np.exp(-np.linspace(0,7,int(SR*1.0)))*0.015
L=L+np.convolve(L,ir)[:N]; R=R+np.convolve(R,ir)[:N]
st=np.stack([L,R],1)
fi=int(SR*0.2); fo=int(SR*2.0)
st[:fi]*=np.linspace(0,1,fi)[:,None]; st[-fo:]*=np.linspace(1,0,fo)[:,None]
st=st/np.max(np.abs(st))*0.8
w=wave.open('muzyka.wav','wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((st*32767).astype(np.int16).tobytes()); w.close()
