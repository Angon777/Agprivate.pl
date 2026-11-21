# Narzędzia do rolek

- `klasyka.py` – Bach, Preludium C-dur BWV 846 (domena publiczna) zagrane z nut syntezatorem fortepianu. `python3 klasyka.py <sekundy> [bpm]` → bach.wav
- `muzyka.py` – podkład generowany od zera: `python3 muzyka.py <sekundy> pozytywna|spokojna` → muzyka.wav
- `szablon-rolki.html`, `szablon-rolki-tabela.html` – szablony plansz 1080x1920 (kolory i fonty marki)

Montaż: plansze PNG → ffmpeg (zoompan 3-4%, przejścia xfade 0,4 s, 30 fps, H.264, AAC), 25-30 s.
Muzyka do tematu: historie/rodzina → Bach; porady/listy → Mozart „Marsz turecki”; pozytywne → Joplin „The Entertainer” (te dwa dodać po akceptacji Andrzeja, do tego czasu Bach).
