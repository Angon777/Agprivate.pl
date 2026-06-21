'use client'

import { useState } from 'react'

export default function OldMoneyInsuranceLanding() {
  const [monthly, setMonthly] = useState(500)
const [years, setYears] = useState(30)
const [rate, setRate] = useState(8)
const [indexation, setIndexation] = useState(0)

const monthlyRate = rate / 100 / 12
const months = years * 12

const futureValue =
  monthly *
  ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)

const totalDeposits = monthly * months
const profit = futureValue - totalDeposits
  return (
  <div className="min-h-screen bg-[#f5f1e8] text-[#1f2937] font-serif">
    <div className="bg-[#0f172a] text-white text-sm">
  <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap gap-4 justify-center">
    <a href="tel:+48508235474">
      📞 +48 508 235 474
    </a>

    <a href="https://wa.me/48508235474" target="_blank">
      WhatsApp
    </a>

    <a href="mailto:kontakt@agprivate.pl">
      kontakt@agprivate.pl
    </a>
  </div>
</div>


  {/* HERO */}

   <section className="relative overflow-hidden border-b border-[#d4c5a2] bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#111827] text-white">

    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />

    <div className="relative max-w-7xl mx-auto px-6 py-4 lg:py-6 grid lg:grid-cols-2 gap-14 items-center">

<div>

  <div className="flex items-center gap-6 mb-6">

    <img
      src="/LOGO-solo.png"
      alt="AG Private Advisory"
      className="h-32 w-auto"
    />

    <div>

      <h1 className="text-4xl lg:text-5xl font-light leading-tight tracking-tight">
        Bezpieczeństwo finansowe
      </h1>

      <div className="text-[#d4b77c] italic text-4xl lg:text-5xl mt-1">
        na pokolenia
      </div>

    </div>

  </div>

        <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-xl">
          Prywatne doradztwo finansowe, ubezpieczenia na życie,
          prywatne emerytury, polisy dla dzieci i pakiety medyczne.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">

          <a
            href="https://wa.me/48508235474"
            target="_blank"
            className="px-8 py-4 rounded-2xl bg-[#d4b77c] text-[#111827] text-lg shadow-2xl"
          >
            Umów konsultację
          </a>

          <a
            href="#oferta"
            className="px-6 py-4 rounded-2xl border border-white/30 bg-white/5 backdrop-blur text-lg"
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
            className="w-full h-[220px] object-cover"
          />

        </div>

      </div>

    </div>

  </section>

  {/* OFERTA */}
  <section className="max-w-6xl mx-auto px-6 py-12">

  <div className="bg-white rounded-[40px] border border-[#e4d4b4] shadow-xl p-6">

    <h2 className="text-4xl text-center mb-4">
      Symulator Prywatnej Emerytury
    </h2>

    <p className="text-center text-gray-600 mb-10">
      Sprawdź ile możesz zgromadzić dzięki regularnemu oszczędzaniu.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div>
        <label className="block mb-2">
          Miesięczna wpłata (zł)
        </label>

        <input
          type="number"
          value={monthly}
          onChange={(e) => setMonthly(Number(e.target.value))}
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Liczba lat
        </label>

        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Średnia stopa zwrotu (%)
            <div>
  <label className="block mb-2">
    Indeksacja składki
  </label>

  <select
    value={indexation}
    onChange={(e) => setIndexation(Number(e.target.value))}
    className="w-full border rounded-xl p-3"
  >
    <option value={0}>Brak</option>
    <option value={3}>3% rocznie</option>
    <option value={6}>6% rocznie</option>
  </select>
</div>
        </label>

        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full border rounded-xl p-3"
        />
      </div>

    </div>

    <div className="mt-12 grid md:grid-cols-3 gap-6">

      <div className="bg-[#f8f5ee] p-6 rounded-2xl">
        <div className="text-gray-500">
          Suma wpłat
        </div>

        <div className="text-3xl mt-2">
          {Math.round(totalDeposits).toLocaleString('pl-PL')} zł
        </div>
      </div>

      <div className="bg-[#f8f5ee] p-6 rounded-2xl">
        <div className="text-gray-500">
          Wypracowany zysk
        </div>

        <div className="text-3xl mt-2 text-green-700">
          {Math.round(profit).toLocaleString('pl-PL')} zł
        </div>
      </div>

      <div className="bg-[#111827] text-white p-6 rounded-2xl">
        <div className="text-gray-300">
          Kapitał końcowy
        </div>

        <div className="text-4xl mt-2 text-[#d4b77c]">
          {Math.round(futureValue).toLocaleString('pl-PL')} zł
        </div>
      </div>

    </div>

  </div>

</section>

  <section
    id="oferta"
    className="max-w-7xl mx-auto px-6 py-12"
  >

    <div className="text-center mb-8">

      <h2 className="text-5xl font-light">
        Oferta
      </h2>

      <p className="mt-6 text-xl text-gray-600">
        Rozwiązania finansowe dla rodzin i przedsiębiorców.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Prywatna Emerytura</h3>
        <p>
          Budowanie kapitału z wykorzystaniem procentu składanego.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Ubezpieczenie na Życie</h3>
        <p>
          Ochrona finansowa dla Ciebie i Twojej rodziny.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Polisa dla Dziecka</h3>
        <p>
          Zabezpieczenie przyszłości i edukacji dziecka.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Pakiety Medyczne</h3>
        <p>
          Prywatna opieka medyczna dla rodzin i firm.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Ochrona Firmy</h3>
        <p>
          Zabezpieczenie przedsiębiorców i wspólników.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#e4d4b4]">
        <h3 className="text-2xl mb-4">Sukcesja Majątku</h3>
        <p>
          Bezpieczne przekazanie majątku kolejnym pokoleniom.
        </p>
      </div>

    </div>

  </section>

  {/* DOKOŃCZ ZDANIE */}

  <section className="max-w-6xl mx-auto px-6 py-10">

    <div className="bg-white rounded-[40px] border border-[#e4d4b4] shadow-xl p-6">

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
        rows="4"
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

  <section className="max-w-6xl mx-auto px-6 pb-10">

    <div className="bg-white rounded-[40px] border border-[#e4d4b4] shadow-2xl overflow-hidden">

      <div className="grid lg:grid-cols-2">

        <div className="p-4 lg:p-6 bg-[#f9f6ef]">

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

        <div className="bg-[#111827] p-5 lg:p-6 text-white flex items-center">

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
