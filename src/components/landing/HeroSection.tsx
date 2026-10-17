import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, FileText, Sparkles, Shield, Search } from 'lucide-react';

interface HeroSectionProps {
  onStart: () => void;
  onLoadExample: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStart, onLoadExample }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-200 bg-linear-to-b from-brand-blue-50/40 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Mensagem de Impacto */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue-100/70 border border-brand-blue-200 text-xs font-semibold text-brand-blue-800">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue-600" />
              <span>Análise semântica por vaga • 100% ATS Friendly</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Descubra o quanto seu currículo combina com uma{' '}
              <span className="text-brand-blue-600 underline decoration-brand-yellow-300 decoration-4 underline-offset-6">
                vaga real
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Cole a vaga, adicione seu currículo atual e receba um diagnóstico completo de match, 
              as palavras-chave essenciais e uma versão otimizada pronta para passar pelos filtros automáticos do RH.
            </p>

            {/* Ações Principais */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStart}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold bg-brand-blue-600 text-white shadow-md hover:bg-brand-blue-700 active:scale-[0.99] transition-all"
              >
                <span>Analisar meu currículo agora</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onLoadExample}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-base font-medium bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-xs transition-colors"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span>Testar com exemplo (1 clique)</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500 pt-2">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Sem cadastro
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Gratuito
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Dados seguros no navegador
              </span>
            </div>

          </div>

          {/* Lado Direito: Card Flutuante de Demonstração (Inspiração do Bruno com Identidade VagaCerta) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-semibold text-slate-900 text-base">Desenvolvedor Frontend React</h3>
                  <p className="text-xs text-slate-500">Fintech Inova Brasil • Exemplo Real</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Bom match
                </span>
              </div>

              {/* Barra de Match */}
              <div className="py-4">
                <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-1.5">
                  <span>Match geral ATS</span>
                  <span className="text-brand-blue-700 font-bold text-sm">78%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue-500 rounded-full transition-all duration-1000" style={{ width: '78%' }} />
                </div>
              </div>

              {/* Tags Encontradas (Azul Claro) */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-medium text-slate-500">Palavras-chave encontradas:</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200">
                    react
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200">
                    typescript
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200">
                    tailwind
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200">
                    git
                  </span>
                </div>
              </div>

              {/* Tags Ausentes (Amarelo Claro Marca-Texto) */}
              <div className="space-y-1.5 pt-3">
                <span className="text-xs font-medium text-slate-500">Palavras-chave ausentes / recomendadas:</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-yellow-100 text-yellow-900 border border-brand-yellow-200">
                    jest
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-yellow-100 text-yellow-900 border border-brand-yellow-200">
                    cypress
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-yellow-100 text-yellow-900 border border-brand-yellow-200">
                    graphql
                  </span>
                </div>
              </div>

              {/* Box de Prévia */}
              <div className="mt-5 p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 flex items-center gap-3 text-xs text-brand-blue-900">
                <FileText className="w-5 h-5 text-brand-blue-600 shrink-0" />
                <span>Versão ATS-friendly pronta para copiar, baixar em PDF e DOCX.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
