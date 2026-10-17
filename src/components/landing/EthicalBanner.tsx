import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface EthicalBannerProps {
  onStart: () => void;
}

export const EthicalBanner: React.FC<EthicalBannerProps> = ({ onStart }) => {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-2xl border border-brand-yellow-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-yellow-100 border border-brand-yellow-300 flex items-center justify-center text-yellow-800 shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-800 bg-brand-yellow-100 px-2 py-0.5 rounded-sm">
                  Uso Ético Obrigatório
                </span>
                <h3 className="font-bold text-slate-900 text-lg">
                  Importante: o VagaCerta nunca inventa experiências
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                Nossa ferramenta ajuda a organizar, dar destaque e traduzir suas experiências reais 
                para os padrões e termos que os robôs do ATS procuram. Ela não adiciona habilidades 
                ou dados falsos que você não tenha vivenciado.
              </p>
            </div>
          </div>

          <button
            onClick={onStart}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 shadow-xs transition-colors"
          >
            <span>Começar análise</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>

        </div>

      </div>
    </section>
  );
};
