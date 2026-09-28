import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const expectedUsername = process.env.ADMIN_USERNAME;
    const expectedPassword = process.env.ADMIN_PASSWORD;

    if (!expectedUsername || !expectedPassword) {
        return new NextResponse('Admin erişimi sunucuda yapılandırılmamış.', { status: 503 });
    }

    const authorization = request.headers.get('authorization');
    if (authorization?.startsWith('Basic ')) {
        try {
            const decoded = Buffer.from(authorization.slice(6), 'base64').toString('utf8');
            const separator = decoded.indexOf(':');
            const username = separator >= 0 ? decoded.slice(0, separator) : '';
            const password = separator >= 0 ? decoded.slice(separator + 1) : '';

            if (username === expectedUsername && password === expectedPassword) {
                return NextResponse.next();
            }
        } catch {
            // Geçersiz Basic başlığı aşağıdaki 401 yanıtına düşer.
        }
    }

    return new NextResponse('Admin girişi gerekli.', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="OtoKusur Admin", charset="UTF-8"',
            'Cache-Control': 'no-store',
        },
    });
}

export const config = {
    matcher: '/admin/:path*',
};
