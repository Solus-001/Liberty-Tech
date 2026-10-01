const RIBBON =
  "M-40 -20 C 120 30 340 70 310 140 S 60 190 90 260 S 340 320 310 390 S 60 450 90 520 S 340 580 310 650 S 120 720 420 820";

const SPARK = "M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z";

/** Decorative hero layers. Each block only shows under its own theme (see styles.css). */
export function ThemeHeroArt() {
  return (
    <>
      <div className="theme-art theme-art-abstract" aria-hidden="true">
        <svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="rib-fill" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="800">
              <stop offset="0" stopColor="#ffc233" />
              <stop offset="0.35" stopColor="#ff5a7a" />
              <stop offset="0.7" stopColor="#d02fa8" />
              <stop offset="1" stopColor="#6a2bd9" />
            </linearGradient>
            <filter id="rib-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
            <filter id="rib-drop" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>
          <path d={RIBBON} fill="none" stroke="#05000f" strokeOpacity="0.6" strokeWidth="46" strokeLinecap="round" filter="url(#rib-drop)" transform="translate(12 18)" />
          <path d={RIBBON} fill="none" stroke="url(#rib-fill)" strokeWidth="44" strokeLinecap="round" strokeLinejoin="round" />
          <path d={RIBBON} fill="none" stroke="#2b0066" strokeOpacity="0.4" strokeWidth="12" strokeLinecap="round" filter="url(#rib-soft)" transform="translate(10 13)" />
          <path d={RIBBON} fill="none" stroke="#ffffff" strokeOpacity="0.42" strokeWidth="9" strokeLinecap="round" filter="url(#rib-soft)" transform="translate(-9 -10)" />
        </svg>
        <svg className="spark spark-a" viewBox="0 0 24 24"><path d={SPARK} fill="currentColor" /></svg>
        <svg className="spark spark-b" viewBox="0 0 24 24"><path d={SPARK} fill="currentColor" /></svg>
      </div>

      <div className="theme-art theme-art-collage" aria-hidden="true">
        <span className="c-block" />
        <span className="c-band" />
        <span className="c-sun" />
        <span className="c-sun-sm" />
        <span className="c-dots" />
        <span className="c-rose" />
        <span className="c-vert c-vert-r">Liberty Tech</span>
        <span className="c-vert c-vert-l">Freedom of tech</span>
      </div>
    </>
  );
}
