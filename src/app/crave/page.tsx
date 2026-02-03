import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata = {
  title: "Crave | Dish.io Intelligence",
  description: "Market velocity & AI-powered menu intel.",
};

export default function CravePage() {
  return (
    <div className="crave-page">
      <div className="crave-dashboard-container">
        <div className="crave-loader-line" />
        <aside className="w-[200px] border-r border-white/5 py-[30px] px-[30px] flex flex-col">
          <div className={`${spaceGrotesk.className} font-bold text-2xl tracking-[2px] text-[var(--crave-yellow)] mb-[50px] flex items-center gap-2.5`}>
            <span className="block w-1 h-6 bg-[var(--crave-yellow)] shadow-[0_0_10px_var(--crave-yellow)]" />
            CRAVE
          </div>
          <nav className="flex flex-col">
            <div className="text-[#666] mb-5 text-sm cursor-pointer transition-colors duration-300 flex items-center gap-2.5 text-white">
              <span className="text-[var(--crave-yellow)]">•</span>
              Overview
            </div>
            <div className="text-[#666] mb-5 text-sm cursor-pointer transition-colors duration-300 flex items-center gap-2.5 hover:text-white">Campaigns</div>
            <div className="text-[#666] mb-5 text-sm cursor-pointer transition-colors duration-300 flex items-center gap-2.5 hover:text-white">Menu Intel</div>
            <div className="text-[#666] mb-5 text-sm cursor-pointer transition-colors duration-300 flex items-center gap-2.5 hover:text-white">Guests</div>
          </nav>
          <div className="mt-auto text-xs text-[#444]">DISH.IO INT.</div>
        </aside>
        <main className="flex-1 p-10 flex flex-col gap-5">
          <div className="flex justify-between items-end mb-5">
            <div>
              <h2 className={`${spaceGrotesk.className} font-light text-[28px] m-0`}>
                Market <span className="text-[var(--crave-yellow)] font-bold">Velocity</span>
              </h2>
            </div>
            <div className="text-xs text-[var(--crave-yellow)] border border-[var(--crave-border)] py-1.5 px-3 rounded-[20px] flex items-center gap-1.5">
              <span className="crave-pulse-dot" />
              LIVE AI ANALYSIS
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative transition-all duration-300 overflow-hidden hover:bg-[rgba(255,215,0,0.03)] hover:border-[rgba(255,215,0,0.2)] hover:-translate-y-0.5">
              <div className="text-xs text-[#888] uppercase tracking-wider mb-2.5">Customer Intent</div>
              <div className={`${spaceGrotesk.className} text-3xl font-medium`}>High</div>
              <div className="text-sm text-[#4CAF50] flex items-center gap-1 mt-1">▲ 24% vs last week</div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative transition-all duration-300 overflow-hidden hover:bg-[rgba(255,215,0,0.03)] hover:border-[rgba(255,215,0,0.2)] hover:-translate-y-0.5">
              <div className="text-xs text-[#888] uppercase tracking-wider mb-2.5">Menu Engagement</div>
              <div className={`${spaceGrotesk.className} text-3xl font-medium`}>4.8s</div>
              <div className="text-sm flex items-center gap-1 mt-1" style={{ color: "var(--crave-yellow)" }}>Avg view time</div>
            </div>
            <div className="col-span-2 flex items-center gap-5 p-5 rounded bg-gradient-to-r from-[rgba(255,215,0,0.05)] to-transparent border-l-2 border-[var(--crave-yellow)]" style={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}>
              <div className="w-10 h-10 flex items-center justify-center border border-[var(--crave-yellow)] rounded-full text-[var(--crave-yellow)] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 2a10 10 0 0 1 10 10" /><path d="M12 12L2.5 10" />
                </svg>
              </div>
              <p className="text-sm text-[#ccc] leading-relaxed max-w-[80%]">
                &ldquo;Your spicy rigatoni is trending in local searches. Launching &apos;Heat Wave&apos; campaign to targeted profiles...&rdquo;
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
