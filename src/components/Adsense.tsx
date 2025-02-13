import { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export default function Adsense({ slot }: { slot: string }) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('Erro ao carregar anúncio:', err);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-9957367545840879"
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
} 