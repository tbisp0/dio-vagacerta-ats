import React from 'react';
import { Palette, Check, Sparkles, Sliders, Type, Layers } from 'lucide-react';

export const DesignSystemView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* Cabeçalho */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-600 flex items-center justify-center">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Design System & Diretrizes de UX</h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Especificações canônicas dos tokens de design, acessibilidade WCAG e componentes do VagaCerta ATS.
            </p>
          </div>
        </div>
      </div>

      {/* Paleta de Cores Oficial */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-brand-blue-600" />
          <span>Paleta Canônica (Branco, Azul Claro e Amarelo Claro para Destaque)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Card Branco / Superfície */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
            <div className="h-16 rounded-lg bg-white border border-slate-300 shadow-xs mb-3 flex items-center justify-center font-mono text-xs text-slate-500">
              #FFFFFF / #F8FAFC
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">Superfície & Fundo</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Sensação de folha de papel limpa e descanso visual. Usado nos cards principais e plano de fundo.
            </p>
          </div>

          {/* Card Azul Claro / Ação */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
            <div className="h-16 rounded-lg bg-brand-blue-600 shadow-xs mb-3 flex items-center justify-center font-mono text-xs text-white font-bold">
              #0284C7 (Blue 600) / #E0F2FE (Blue 100)
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">Azul Confiança (Ação & Tags)</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Botões de CTA e chips de competências identificadas. Contraste de 5.1:1 sobre branco (WCAG AA).
            </p>
          </div>

          {/* Card Amarelo Claro / Marca-Texto */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
            <div className="h-16 rounded-lg bg-brand-yellow-100 border border-brand-yellow-300 shadow-xs mb-3 flex items-center justify-center font-mono text-xs text-yellow-900 font-bold">
              #FEF9C3 (Yellow 100) / #FEF08A (Yellow 200)
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">Amarelo Claro (Marca-Texto)</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Metáfora de marca-texto para alertar palavras-chave ausentes e dicas sem gerar sensação de erro severo.
            </p>
          </div>

        </div>
      </div>

      {/* Tipografia */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Type className="w-5 h-5 text-brand-blue-600" />
          <span>Tipografia & Escala Modular (Família Inter)</span>
        </h3>
        <div className="space-y-3 pt-2">
          <div className="p-3 rounded-lg border border-slate-100 flex items-center justify-between">
            <span className="text-2xl font-bold text-slate-900">Display Title (36px / Bold)</span>
            <span className="font-mono text-xs text-slate-400">text-4xl font-bold</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-100 flex items-center justify-between">
            <span className="text-lg font-semibold text-slate-800">Section Header (20px / SemiBold)</span>
            <span className="font-mono text-xs text-slate-400">text-xl font-semibold</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-100 flex items-center justify-between">
            <span className="text-sm text-slate-600">Body & Paragraph (14px / Regular)</span>
            <span className="font-mono text-xs text-slate-400">text-sm text-slate-600</span>
          </div>
        </div>
      </div>

    </div>
  );
};
