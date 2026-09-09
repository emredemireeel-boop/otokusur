import { ImageResponse } from 'next/og';

export const alt = 'OtoKusur — Arabayı almadan kusurunu öğren';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '76px',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #090B0F 0%, #151820 62%, #31101A 100%)',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', fontSize: 34, fontWeight: 800 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#A91D3A' }}>OK</div>
                    <span>OtoKusur</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: 970 }}>
                    <div style={{ color: '#D24A66', fontSize: 24, fontWeight: 700, letterSpacing: 2 }}>ARAÇ KUSUR İSTİHBARATI</div>
                    <div style={{ fontSize: 68, lineHeight: 1.06, fontWeight: 900, letterSpacing: -2 }}>Arabayı değil, gerçeği satın al.</div>
                    <div style={{ color: '#B7BBC5', fontSize: 27, lineHeight: 1.35 }}>Kronik arızalar, motor bazlı sorunlar ve satın alma öncesi kontrol noktaları.</div>
                </div>
            </div>
        ),
        size,
    );
}
