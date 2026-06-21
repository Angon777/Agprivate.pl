export default function OldMoneyInsuranceLanding() {
return (
  <div className="min-h-screen bg-[#f5f1e8] text-[#1f2937] font-serif">


  {/* HERO */}

   <section className="relative overflow-hidden border-b border-[#d4c5a2] bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#111827] text-white">

    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />

    <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">

      <div>

        <div className="inline-flex items-center gap-2 border border-[#d4c5a2]/50 bg-white/5 backdrop-blur px-4 py-2 rounded-full text-sm tracking-wide text-[#e7d7b5] mb-6">
          AG Private Advisory
        </div>

        <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight">
          Bezpieczeństwo finansowe
          <span className="block text-[#d4b77c] italic mt-2">
            na pokolenia
          </span>
        </h1>

        <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-xl">
          Prywatne doradztwo finansowe, ubezpieczenia na życie,
          prywatne emerytury, polisy dla dzieci i pakiety medyczne.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="https://wa.me/48508235474"
            target="_blank"
            className="px-8 py-4 rounded-2xl bg-[#d4b77c] text-[#111827] text-lg shadow-2xl"
          >
            Umów konsultację
          </a>

          <a
            href="#oferta"
            className="px-8 py-4 rounded-2xl border border-white/30 bg-white/5 backdrop-blur text-lg"
          >
            Zobacz ofertę
          </a>

        </div>

      </div>

      <div className="relative">

        <div className="rounded-[36px] overflow-hidden shadow-2xl border border-[#d4b77c]/30 bg-white/10 backdrop-blur">

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
            alt="AG Private Advisory"
            className="w-full h-[650px] object-cover"
          />

        </div>

      </div>

    </div>

  </section>

  {/* OFERTA */}

  <section
    id="oferta"
    className="max-w-7xl mx-auto px-6 py-24"
  >

    <div className="text-center mb-16">

      <h2 className="text-5xl font-light">
        Oferta
      </h2>

      <p className="mt-6 text-xl text-gray-600">
        Rozwiązania finansowe dla rodzin i przedsiębiorców.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Prywatna Emerytura</h3>
        <p>
          Budowanie kapitału z wykorzystaniem procentu składanego.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Ubezpieczenie na Życie</h3>
        <p>
          Ochrona finansowa dla Ciebie i Twojej rodziny.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Polisa dla Dziecka</h3>
        <p>
          Zabezpieczenie przyszłości i edukacji dziecka.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Pakiety Medyczne</h3>
        <p>
          Prywatna opieka medyczna dla rodzin i firm.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Ochrona Firmy</h3>
        <p>
          Zabezpieczenie przedsiębiorców i wspólników.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Sukcesja Majątku</h3>
        <p>
          Bezpieczne przekazanie majątku kolejnym pokoleniom.
        </p>
      </div>

    </div>

  </section>

  {/* DOKOŃCZ ZDANIE */}

  <section className="max-w-6xl mx-auto px-6 py-20">

    <div className="bg-white rounded-[40px] border border-[#e4d4b4] shadow-xl p-10">

      <h2 className="text-4xl text-center mb-10">
        Dokończ zdanie
      </h2>

      <div className="space-y-4 text-gray-700 mb-8">

        <p>
          ➜ Chcę odkładać 500 zł miesięcznie na emeryturę i sprawdzić ile mogę zgromadzić do 65 roku życia.
        </p>

        <p>
          ➜ Szukam pakietu medycznego dla rodziny 2+2 z dostępem do specjalistów.
        </p>

        <p>
          ➜ Chcę zabezpieczyć dziecko polisą i odkładać 300 zł miesięcznie na jego przyszłość.
        </p>

      </div>

      <textarea
        rows="6"
        placeholder="Napisz czego potrzebujesz..."
        className="w-full border rounded-2xl p-4"
      />

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <input
          type="text"
          placeholder="Imię"
          className="border rounded-xl p-3"
        />

        <input
          type="tel"
          placeholder="Telefon"
          className="border rounded-xl p-3"
        />

        <input
          type="email"
          placeholder="E-mail"
          className="border rounded-xl p-3"
        />

      </div>

      <a
        href="mailto:kontakt@agprivate.pl"
        className="inline-block mt-8 px-8 py-4 rounded-2xl bg-[#d4b77c] text-[#111827]"
      >
        Wyślij zapytanie
      </a>

    </div>

  </section>

  {/* KONTAKT */}

  <section className="max-w-6xl mx-auto px-6 pb-24">

    <div className="bg-white rounded-[40px] border border-[#e4d4b4] shadow-2xl overflow-hidden">

      <div className="grid lg:grid-cols-2">

        <div className="p-12 lg:p-16 bg-[#f9f6ef]">

          <div className="uppercase tracking-[0.35em] text-sm text-[#8b6b35]">
            Kontakt
          </div>

          <h2 className="mt-4 text-4xl font-light text-[#111827]">
            Umów bezpłatną konsultację
          </h2>

          <div className="mt-10 space-y-5 text-lg">

            <div>
              <span className="text-[#8b6b35]">Telefon:</span>
              {" "}+48 508 235 474
            </div>

            <div>
              <span className="text-[#8b6b35]">E-mail:</span>
              {" "}kontakt@agprivate.pl
            </div>

            <div>
              <span className="text-[#8b6b35]">Lokalizacja:</span>
              {" "}Lublin • Rzeszów • Online
            </div>

          </div>

        </div>

        <div className="bg-[#111827] p-12 lg:p-16 text-white flex items-center">

          <div className="text-3xl font-light leading-relaxed">
            „Prawdziwe bezpieczeństwo finansowe buduje się latami —
            w ciszy, zaufaniu i odpowiedzialności.”
          </div>

        </div>

      </div>

    </div>

  </section>

</div>

)
}
