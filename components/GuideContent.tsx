import type { ReactNode } from 'react';
import Link from 'next/link';

function renderInline(text: string): ReactNode[] {
    return text.split(/(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean).map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong className="font-semibold text-[#111827]" key={index}>{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link && (link[2].startsWith('/') || link[2].startsWith('https://'))) {
            const external = link[2].startsWith('https://');
            return (
                <Link
                    className="font-semibold text-[#A91D3A] underline decoration-[#A91D3A]/30 underline-offset-2 hover:decoration-[#A91D3A]"
                    href={link[2]}
                    key={index}
                    rel={external ? 'noopener noreferrer' : undefined}
                    target={external ? '_blank' : undefined}
                >
                    {link[1]}
                </Link>
            );
        }
        return <span key={index}>{part}</span>;
    });
}

function headingId(text: string): string {
    return text
        .toLocaleLowerCase('tr-TR')
        .replace(/[çğıöşü]/g, (letter) => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' })[letter] ?? letter)
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function isBlockStart(line: string): boolean {
    return /^(#{2,4})\s+/.test(line) || /^-\s+/.test(line) || /^\d+\.\s+/.test(line) || line.startsWith('|');
}

function tableCells(line: string): string[] {
    return line.split('|').slice(1, -1).map((cell) => cell.trim());
}

export default function GuideContent({ content }: { content: string }) {
    const lines = content.split(/\r?\n/);
    const blocks: ReactNode[] = [];
    let index = 0;

    while (index < lines.length) {
        const line = lines[index].trim();
        if (!line) {
            index += 1;
            continue;
        }

        const heading = line.match(/^(#{2,4})\s+(.+)$/);
        if (heading) {
            const level = heading[1].length;
            const text = heading[2];
            const className = level === 2
                ? 'text-lg font-bold text-[#111827] mt-7 mb-2'
                : level === 3
                    ? 'text-base font-bold text-[#111827] mt-5 mb-2'
                    : 'text-sm font-bold text-[#111827] mt-4 mb-2';
            const children = renderInline(text);
            const id = headingId(text);
            blocks.push(level === 2
                ? <h2 className={className} id={id} key={'heading-' + index}>{children}</h2>
                : level === 3
                    ? <h3 className={className} id={id} key={'heading-' + index}>{children}</h3>
                    : <h4 className={className} id={id} key={'heading-' + index}>{children}</h4>);
            index += 1;
            continue;
        }

        if (line.startsWith('|')) {
            const tableLines: string[] = [];
            while (index < lines.length && lines[index].trim().startsWith('|')) {
                tableLines.push(lines[index].trim());
                index += 1;
            }
            const rows = tableLines.map(tableCells);
            const hasHeader = rows.length > 1 && rows[1].every((cell) => /^:?-{3,}:?$/.test(cell));
            const header = hasHeader ? rows[0] : null;
            const body = rows.slice(hasHeader ? 2 : 0);
            blocks.push(
                <div className="my-5 overflow-x-auto rounded-lg border border-[#E4E4E7]" key={'table-' + index}>
                    <table className="w-full border-collapse text-left text-xs">
                        {header && (
                            <thead className="bg-[#F7F7F8]">
                                <tr>{header.map((cell, cellIndex) => <th className="border-b border-[#E4E4E7] px-3 py-2 font-semibold text-[#111827]" key={cellIndex}>{renderInline(cell)}</th>)}</tr>
                            </thead>
                        )}
                        <tbody>
                            {body.map((row, rowIndex) => (
                                <tr className="border-b border-[#F0F0F2] last:border-0" key={rowIndex}>
                                    {row.map((cell, cellIndex) => <td className="px-3 py-2 text-[#52525B]" key={cellIndex}>{renderInline(cell)}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>,
            );
            continue;
        }

        if (/^-\s+/.test(line)) {
            const items: string[] = [];
            while (index < lines.length && /^-\s+/.test(lines[index].trim())) {
                items.push(lines[index].trim().replace(/^-\s+/, ''));
                index += 1;
            }
            blocks.push(
                <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#374151]" key={'list-' + index}>
                    {items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item)}</li>)}
                </ul>,
            );
            continue;
        }

        if (/^\d+\.\s+/.test(line)) {
            const items: string[] = [];
            while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
                items.push(lines[index].trim().replace(/^\d+\.\s+(✅\s*)?/, ''));
                index += 1;
            }
            blocks.push(
                <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-[#374151]" key={'ordered-' + index}>
                    {items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item)}</li>)}
                </ol>,
            );
            continue;
        }

        const paragraph: string[] = [line];
        index += 1;
        while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index].trim())) {
            paragraph.push(lines[index].trim());
            index += 1;
        }
        blocks.push(
            <p className="mb-4 text-sm leading-relaxed text-[#374151]" key={'paragraph-' + index}>
                {renderInline(paragraph.join(' '))}
            </p>,
        );
    }

    return <div>{blocks}</div>;
}
