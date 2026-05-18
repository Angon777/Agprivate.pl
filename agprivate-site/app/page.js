export default function OldMoneyInsuranceLanding() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#1f2937] font-serif">
      <section className="relative overflow-hidden border-b border-[#d4c5a2] bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#111827] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#d4c5a2]/50 bg-white/5 backdrop-blur px-4 py-2 rounded-full text-sm tracking-wide text-[#e7d7b5] mb-6">
              AG Private Advisory
            </div>

            <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight">
              Bezpieczeństwo finansowe
              <span className="block text-[#d4b77c] italic mt-2">na pokolenia</span>
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-xl">
              Prywatne doradztwo w zakresie ochrony życia, bezpieczeństwa rodziny oraz strategii finansowych budowanych z myślą o przyszłych pokoleniach.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-[#d4b77c] text-[#111827] text-lg shadow-2xl">
                Umów prywatną konsultację
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/30 bg-white/5 backdrop-blur text-lg">
                Zobacz ofertę
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[36px] overflow-hidden shadow-2xl border border-[#d4b77c]/30 bg-white/10 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury office"
                className="w-full h-[650px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-white rounded-[40px] border border-[#e4d4b4] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 bg-[#f9f6ef]">
              <div className="uppercase tracking-[0.35em] text-sm text-[#8b6b35]">
                Kontakt
              </div>

              <h2 className="mt-4 text-4xl font-light text-[#111827] leading-tight">
                Umów bezpłatną konsultację
              </h2>

              <div className="mt-10 space-y-5 text-lg">
                <div>
                  <span className="text-[#8b6b35]">Telefon:</span> +48 508 235 474 • WhatsApp • Viber
                </div>
                <div>
                  <span className="text-[#8b6b35]">E-mail:</span> kontakt@agprivate.pl
                </div>
                <div>
                  <span className="text-[#8b6b35]">Lokalizacja:</span> Lublin • Rzeszów • online worldwide
                </div>
              </div>
            </div>

            <div className="bg-[#111827] p-12 lg:p-16 text-white flex flex-col justify-center">
              <div className="text-3xl font-light leading-relaxed">
                „Prawdziwe bezpieczeństwo finansowe buduje się latami — w ciszy, zaufaniu i odpowiedzialności.”
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
