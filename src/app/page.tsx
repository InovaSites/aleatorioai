"use client";
import { useState, useCallback } from 'react';
import Script from 'next/script';
import { ClipboardDocumentIcon, SparklesIcon, CpuChipIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import GoogleAdsense from '@/components/GoogleAdsense';

export default function GeradorAleatorio() {
  const [digitos, setDigitos] = useState(8);
  const [resultado, setResultado] = useState('');
  const [opcoes, setOpcoes] = useState({
    numeros: true,
    letras: false,
    simbolos: false,
    icones: false,
  });
  const [copiado, setCopiado] = useState(false);

  const gerarCaracteres = () => {
    let caracteres = '';
    const numeros = '0123456789';
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const icones = '⚡⭐🔥💧✨🎵🚀🌟🌌';

    if (opcoes.numeros) caracteres += numeros;
    if (opcoes.letras) caracteres += letras;
    if (opcoes.simbolos) caracteres += simbolos;
    if (opcoes.icones) caracteres += icones;

    return caracteres;
  };

  const gerarAleatorio = useCallback(() => {
    const caracteres = gerarCaracteres();
    if (!caracteres) return;

    let resultado = '';
    for (let i = 0; i < digitos; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setResultado(resultado);
    setCopiado(false);
  }, [digitos, opcoes]);

  const copiarParaAreaTransferencia = () => {
    navigator.clipboard.writeText(resultado);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  // Objeto de tradução para as opções
  const traducoesOpcoes: { [key: string]: string } = {
    numeros: 'Números',
    letras: 'Letras',
    simbolos: 'Símbolos',
    icones: 'Ícones'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <GoogleAdsense />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/30">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <SparklesIcon className="h-10 w-10 text-purple-400" />
            Gerador Quântico Aleatório
          </h1>

          <div className="space-y-6">
            <div className="bg-gray-700/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg">Dígitos: {digitos}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={gerarAleatorio}
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2"
                  >
                    <CpuChipIcon className="h-5 w-5" />
                    Gerar
                  </button>
                </div>
              </div>

              <input
                type="range"
                min="4"
                max="64"
                value={digitos}
                onChange={(e) => setDigitos(Number(e.target.value))}
                className="w-full bg-gray-600 rounded-lg appearance-none h-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(opcoes).map(([chave, valor]) => (
                <label
                  key={chave}
                  className="flex items-center gap-3 bg-gray-700/30 p-4 rounded-lg hover:bg-gray-700/50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={valor}
                    onChange={() => setOpcoes(prev => ({ ...prev, [chave]: !valor }))}
                    className="h-5 w-5 text-purple-500 rounded focus:ring-purple-500"
                  />
                  <span className="capitalize">{traducoesOpcoes[chave]}</span>
                </label>
              ))}
            </div>

            {resultado && (
              <div className="mt-8 bg-gray-700/30 rounded-lg p-6 relative">
                <div className="text-3xl font-mono break-all text-center mb-4">
                  {resultado}
                </div>
                <button
                  onClick={copiarParaAreaTransferencia}
                  className="w-full bg-gray-600 hover:bg-gray-700 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                >
                  <ClipboardDocumentIcon className="h-5 w-5" />
                  {copiado ? 'Copiado!' : 'Copiar para Área de Transferência'}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p className="flex items-center justify-center gap-2">
          <CommandLineIcon className="h-5 w-5" />
          Inova Sites © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}