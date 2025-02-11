"use client";

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleAdsense() {
    useEffect(() => {
        try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (err) {
            console.error('Erro ao carregar anúncio:', err);
        }
    }, []);

    return (
        <div className="p-4 my-4" style={{ minHeight: '250px' }}>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9957367545840879"
                strategy="afterInteractive"
                crossOrigin="anonymous"
            />
            <ins
                className="adsbygoogle"
                style={{ display: 'block', minHeight: '200px' }}
                data-ad-client="ca-pub-9957367545840879"
                data-ad-slot="4401803108"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
} 