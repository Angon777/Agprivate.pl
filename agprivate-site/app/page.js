'use client'

import { useState } from 'react'

export default function OldMoneyInsuranceLanding() {
  const [monthly, setMonthly] = useState(500)
  const [age, setAge] = useState(35)
  const [retirementAge, setRetirementAge] = useState(65)
  const [rate, setRate] = useState(8)
  const [indexation, setIndexation] = useState(3)

  const years = Math.max(retirementAge - age, 0)
  const monthlyRate = rate / 100 / 12

  let futureValue = 0
  let totalDeposits = 0
  let currentMonthly = monthly

  for (let year = 0; year < years; year++) {
    for (let month = 0; month < 12; month++) {
      futureValue =
        (futureValue + currentMonthly) *
        (1 + monthlyRate)

      totalDeposits += currentMonthly
    }

    currentMonthly =
      currentMonthly *
      (1 + indexation / 100)
  }

  const profit = futureValue - totalDeposits

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#1f2937] font-serif">

      {/* GÓRNY PASEK */}

      <div className="bg-[#0f172a] text-white text-base font-semibold">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-center gap-12">

          <a href="tel:+48508235474">
            📞 +48 508 235 474
          </a>

          <a
            href="https://wa.me/48508235474"
            target="_blank"
            className="font-semibold text-[#d4b77c]"
          >
            WhatsApp
          </a>

          <a href="mailto:agprivate.info@gmail.com">
           className="font-semibold"
          </a>

        </div>
      </div>

      {/* HERO */}

      <section className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#111827] text-white border-b border-[#d4c5a2]">

        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-12">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <div className="flex items-center gap-6">

                <img
                  src="/LOGO-solo.png"
                  alt="AG Private"
                  className="h-40 w-auto"
                />

                <div>

                  <h1 className="text-4xl lg:text-6xl font-light leading-tight">
                    Bezpieczeństwo
                    <br />
                    Finansowe
                  </h1>

                  <div className="text-[#d4b77c] italic text-4xl lg:text-6xl">
                    na pokolenia
                  </div>

                </div>

              </div>

              <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
                Pomagam rodzinom i przedsiębiorcom budować
                bezpieczeństwo finansowe poprzez odpowiednio
                dobrane rozwiązania emerytalne, ochronę życia,
                zabezpieczenie dzieci oraz prywatną opiekę medyczną.
                Bez zobowiązań. 
                Bez skomplikowanego języka. 
                Z planem dopasowanym do Twojej sytuacji i celów.
                  
              </p>

              <div className="mt-6 flex flex-wrap gap-4">

                <a
                  href="https://wa.me/48508235474"
                  target="_blank"
                  className="px-6 py-4 rounded-2xl bg-[#d4b77c] text-[#111827] font-medium"
                >
                  Sprawdź jakie rozwiązanie będzie najlepsze dla Ciebie
                </a>

                <a
                  href="#kalkulator"
                  className="px-6 py-4 rounded-2xl border border-white/20"
                >
                  Sprawdź kalkulator
                </a>

              </div>

            </div>

            <div>

              <div className="overflow-hidden rounded-[32px] border border-[#d4b77c]/30">

                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                  alt="AG Private"
                  className="w-full h-[320px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* O MNIE */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-[32px] border border-[#e4d4b4] shadow-xl p-8">

          <div className="grid lg:grid-cols-3 gap-8 items-center">

            <div className="flex justify-center">

              <img
                src="/LOGO.png"
                alt="AG Private"
                className="max-h-[260px] w-auto"
              />

            </div>

            <div className="lg:col-span-2">

              <h2 className="text-4xl mb-6">
                O mnie
              </h2>

              <p className="mb-4 text-lg leading-relaxed">
               Pomagam rodzinom, przedsiębiorcom i osobom prywatnym budować 
               bezpieczeństwo finansowe na lata.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
               Wspólnie dobieramy rozwiązania, które chronią najbliższych, 
               pozwalają systematycznie budować kapitał oraz przygotować się 
               na przyszłość bez pozostawiania ważnych decyzji przypadkowi.
              </p>
                 
              <p className="mb-4 text-lg leading-relaxed">
               Specjalizuję się w prywatnych programach emerytalnych, 
               ochronie życia i zdrowia, 
               zabezpieczeniu dzieci oraz 
               długoterminowym budowaniu majątku.
              </p>

              <p className="mb-4 text-lg leading-relaxed">
                Współpracuję z PZU — jedną z najbardziej rozpoznawalnych
                i zaufanych instytucji finansowych w Polsce,
                posiadającą ponad 200-letnią historię działalności.
              </p>

               <p className="mb-4 text-lg leading-relaxed">
                Moim celem nie jest sprzedaż pojedynczego produktu, 
                lecz stworzenie planu, który będzie wspierał Ciebie i 
                Twoją rodzinę przez wiele lat.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* KALKULATOR */}

      <section
        id="kalkulator"
        className="max-w-7xl mx-auto px-6 py-10"
      >

        <div className="bg-white rounded-[32px] border border-[#e4d4b4] shadow-xl p-8">

          <div className="text-center mb-8">

            <h2 className="text-4xl mb-3">
              Kalkulator Budowy Kapitału
            </h2>

            <p className="text-gray-600 text-lg">
              Sprawdź jak regularne oszczędzanie może budować kapitał dla Ciebie,
              Twojego dziecka lub przyszłości całej rodziny.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">

            <div>
              <label className="block mb-2">
                Miesięczna wpłata
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
                Obecny wiek
              </label>

              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                Wiek przejścia na emeryturę
              </label>

              <input
                type="number"
                value={retirementAge}
                onChange={(e) =>
                  setRetirementAge(Number(e.target.value))
                }
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                Średnia stopa zwrotu (%)
              </label>

              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                Wzrost wpłat co rok
              </label>

              <select
                value={indexation}
                onChange={(e) =>
                  setIndexation(Number(e.target.value))
                }
                className="w-full border rounded-xl p-3"
              >
                <option value={0}>
                  Bez zwiększania
                </option>

                <option value={3}>
                  3% rocznie
                </option>

                <option value={6}>
                  6% rocznie
                </option>
              </select>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-[#f8f5ee] rounded-2xl p-6">

              <div className="text-gray-500">
                Łączna suma wpłat
              </div>

              <div className="text-3xl mt-2">
                {Math.round(totalDeposits).toLocaleString('pl-PL')} zł
              </div>

            </div>

            <div className="bg-[#f8f5ee] rounded-2xl p-6">

              <div className="text-gray-500">
                Wypracowany zysk
              </div>

              <div className="text-3xl mt-2 text-green-700">
                {Math.round(profit).toLocaleString('pl-PL')} zł
              </div>

            </div>

            <div className="bg-[#111827] text-white rounded-2xl p-6">

              <div className="text-gray-300">
                Kapitał końcowy
              </div>

              <div className="text-4xl mt-2 text-[#d4b77c]">
                {Math.round(futureValue).toLocaleString('pl-PL')} zł
              </div>

            </div>

          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Kalkulacja ma charakter poglądowy i nie stanowi
            oferty ani gwarancji osiągnięcia określonych wyników.
          </p>
<div className="mt-6 text-center text-gray-600">

  <p className="font-medium mb-3">
    Przykładowe zastosowania:
  </p>

  <div className="flex flex-wrap justify-center gap-3 text-sm">

    <span className="bg-[#f8f5ee] px-3 py-2 rounded-xl">
      Kapitał dla dziecka
    </span>

    <span className="bg-[#f8f5ee] px-3 py-2 rounded-xl">
      Prywatna emerytura
    </span>

    <span className="bg-[#f8f5ee] px-3 py-2 rounded-xl">
      Zabezpieczenie rodziny
    </span>

    <span className="bg-[#f8f5ee] px-3 py-2 rounded-xl">
      Budowa majątku
    </span>

  </div>

</div>
        </div>

      </section>

      {/* DLACZEGO WARTO */}

      <section className="max-w-7xl mx-auto px-6 py-4">

        <div className="text-center mb-8">

          <h2 className="text-4xl">
            Dlaczego warto współpracować ze mną?
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          <div className="bg-white p-6 rounded-3xl border border-[#e4d4b4] shadow-lg">

            <h3 className="text-xl mb-3">
              Indywidualne podejście
            </h3>

            <p>
              Każde rozwiązanie dobierane jest
              do sytuacji życiowej i celów klienta.
            </p>

          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#e4d4b4] shadow-lg">

            <h3 className="text-xl mb-3">
              Wsparcie po podpisaniu umowy
            </h3>

            <p>
              Kontakt nie kończy się po zawarciu
              polisy czy programu emerytalnego.
            </p>

          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#e4d4b4] shadow-lg">

            <h3 className="text-xl mb-3">
              Rozwiązania PZU
            </h3>

            <p>
              Współpraca z jedną z najbardziej
              rozpoznawalnych marek finansowych
              w Polsce.
            </p>

          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#e4d4b4] shadow-lg">

            <h3 className="text-xl mb-3">
              Obsługa online
            </h3>

            <p>
              Spotkania stacjonarne i online
              dla klientów z całej Polski.
            </p>

          </div>

        </div>

      </section>
      {/* OFERTA */}

      <section
        id="oferta"
        className="max-w-7xl mx-auto px-6 py-10"
      >

        <div className="text-center mb-8">

          <h2 className="text-4xl mb-3">
            Zakres współpracy
          </h2>

          <p className="text-gray-600">
            Rozwiązania finansowe dla rodzin,
            przedsiębiorców i osób budujących majątek.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl border border-[#e4d4b4] p-6 shadow-lg">
            <h3 className="text-2xl mb-3">
              Prywatna Emerytura
            </h3>

            <p>
              Budowanie kapitału długoterminowego
              z wykorzystaniem procentu składanego.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#e4d4b4] p-6 shadow-lg">
            <h3 className="text-2xl mb-3">
              Ubezpieczenie na Życie
            </h3>

            <p>
              Ochrona finansowa rodziny
              w przypadku nieprzewidzianych zdarzeń.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#e4d4b4] p-6 shadow-lg">
            <h3 className="text-2xl mb-3">
              Polisa dla Dziecka
            </h3>

            <p>
              Zabezpieczenie przyszłości,
              edukacji oraz startu w dorosłość.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#e4d4b4] p-6 shadow-lg">
            <h3 className="text-2xl mb-3">
              Pakiety Medyczne
            </h3>

            <p>
              Prywatna opieka medyczna
              dla rodzin i przedsiębiorców.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#e4d4b4] p-6 shadow-lg">
            <h3 className="text-2xl mb-3">
              Ochrona Firmy
            </h3>

            <p>
              Rozwiązania zabezpieczające
              właścicieli i wspólników firm.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#e4d4b4] p-6 shadow-lg">
            <h3 className="text-2xl mb-3">
              Sukcesja Majątku
            </h3>

            <p>
              Bezpieczne przekazywanie majątku
              kolejnym pokoleniom.
            </p>
          </div>

        </div>

      </section>

      {/* FORMULARZ */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-[32px] border border-[#e4d4b4] shadow-xl p-8">

          <h2 className="text-4xl text-center mb-8">
            Dokończ zdanie
          </h2>

          <div className="space-y-3 text-gray-700 mb-8">

            <p>
              ➜ Chcę odkładać określoną kwotę miesięcznie
              i sprawdzić możliwości budowania kapitału.
            </p>

            <p>
              ➜ Szukam prywatnej opieki medycznej
              dla siebie lub rodziny.
            </p>

            <p>
              ➜ Chcę zabezpieczyć rodzinę
              na wypadek nieprzewidzianych sytuacji.
            </p>

          </div>

          <textarea
            rows="5"
            placeholder="Opisz swoją sytuację lub potrzeby..."
            className="w-full border rounded-2xl p-4"
          />

          <div className="grid md:grid-cols-3 gap-4 mt-6">

            <input
              type="text"
              placeholder="Imię i Nazwisko"
              className="border rounded-xl p-3"
            />

            <input
              type="tel"
              placeholder="Telefon"
              className="border rounded-xl p-3"
            />

            <input
              type="email"
              placeholder="Adres e-mail"
              className="border rounded-xl p-3"
            />

          </div>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="mailto:agprivate.info@gmail.com"
              className="px-6 py-4 rounded-2xl bg-[#d4b77c] text-[#111827]"
            >
              Wyślij zapytanie
            </a>

            <a
              href="https://wa.me/48508235474"
              target="_blank"
              className="px-6 py-4 rounded-2xl border border-gray-300"
            >
              Napisz na WhatsApp
            </a>

          </div>

        </div>

      </section>
                
<footer className="text-center py-16">

  <div className="text-xl mb-4 text-[#8b6b35]">
    „Prawdziwe bezpieczeństwo finansowe buduje się latami — poprzez konsekwencję, odpowiedzialność i dobre decyzje.”
  </div>

  <div className="text-sm text-gray-500 mt-8">
    AG Private
  </div>

  <div className="text-sm text-gray-400 mt-2">
    © 2026 Wszystkie prawa zastrzeżone
  </div>

</footer>



    </div>
  )
}
