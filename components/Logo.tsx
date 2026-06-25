/**
 * OtoKusur Logo — Professional, memorable, corporate
 * Concept: Car silhouette integrated with a magnifying glass/shield,
 * representing "inspect before you buy"
 */

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'light' | 'dark';
    showText?: boolean;
}

const sizes = {
    sm: { icon: 28, text: 15, gap: 8 },
    md: { icon: 32, text: 17, gap: 10 },
    lg: { icon: 42, text: 24, gap: 12 },
};

export default function Logo({ size = 'md', variant = 'light', showText = true }: LogoProps) {
    const s = sizes[size];
    const textColor = variant === 'light' ? '#0F0F10' : '#FFFFFF';

    return (
        <span className="logo-wrapper" style={{ display: 'inline-flex', alignItems: 'center', gap: s.gap }}>
            {/* Icon Mark */}
            <svg
                width={s.icon}
                height={s.icon}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {/* Background rounded square */}
                <rect width="40" height="40" rx="10" fill="#A91D3A" />

                {/* Car body silhouette — simplified, elegant */}
                <path
                    d="M10 24.5C10 23.672 10.672 23 11.5 23H28.5C29.328 23 30 23.672 30 24.5V26C30 26.552 29.552 27 29 27H11C10.448 27 10 26.552 10 26V24.5Z"
                    fill="rgba(255,255,255,0.95)"
                />
                {/* Car roof / cabin */}
                <path
                    d="M14 23L16.5 17.5C16.8 16.9 17.4 16.5 18.1 16.5H22.5C23.1 16.5 23.7 16.8 24 17.3L27 23"
                    stroke="rgba(255,255,255,0.95)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(255,255,255,0.15)"
                />
                {/* Windshield divider */}
                <line x1="20.5" y1="17" x2="20.5" y2="23" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />

                {/* Front wheel */}
                <circle cx="14.5" cy="27" r="2.5" fill="#A91D3A" stroke="rgba(255,255,255,0.95)" strokeWidth="1.6" />
                <circle cx="14.5" cy="27" r="0.8" fill="rgba(255,255,255,0.95)" />

                {/* Rear wheel */}
                <circle cx="25.5" cy="27" r="2.5" fill="#A91D3A" stroke="rgba(255,255,255,0.95)" strokeWidth="1.6" />
                <circle cx="25.5" cy="27" r="0.8" fill="rgba(255,255,255,0.95)" />

                {/* Magnifying glass — top right, representing inspection */}
                <circle cx="28" cy="13" r="4.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" fill="none" />
                <line x1="31.2" y1="16.2" x2="33.5" y2="18.5" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
                {/* Check mark inside magnifier */}
                <path
                    d="M25.8 13.2L27.2 14.6L30.2 11.5"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Headlight accent */}
                <rect x="28.5" y="23.8" width="2" height="1.4" rx="0.7" fill="rgba(255,200,100,0.7)" />
            </svg>

            {/* Wordmark */}
            {showText && (
                <span
                    style={{
                        fontSize: s.text,
                        fontWeight: 800,
                        color: textColor,
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    Oto
                    <span style={{ color: '#A91D3A' }}>Kusur</span>
                </span>
            )}
        </span>
    );
}
