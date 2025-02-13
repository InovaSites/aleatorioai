import React from 'react';

export default function TestAdsense({ slot }: { slot: string }) {
    return (
        <div className="w-full h-[250px] bg-gray-700/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
                <p className="text-gray-400">Espaço para Anúncio</p>
                <p className="text-sm text-gray-500">Slot: {slot}</p>
            </div>
        </div>
    );
} 