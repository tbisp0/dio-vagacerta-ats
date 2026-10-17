import React from 'react';
import { Search, FileText, CheckCircle, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Cole a vaga desejada',
      description: 'Adicione o título da vaga e a descrição completa com os requisitos e competências solicitadas.',
      icon: <Search className="w-5 h-5 text-brand-blue-600" />,
      bg: 'bg-brand-blue-50 border-brand-blue-200'
    },
    {
      number: '02',
      title: 'Adicione seu currículo atual',
      description: 'Cole o texto do seu currículo do jeito que está, sem precisar formatar nada com antecedência.',
      icon: <FileText className="w-5 h-5 text-brand-blue-600" />,
      bg: 'bg-brand-blue-50 border-brand-blue-200'
    },
    {
      number: '03',
      title: 'Receba a análise e o currículo',
      description: 'Veja o score de match, palavras-chave que faltam e exporte uma versão 100% pronta para o robô do ATS.',
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50 border-emerald-200'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Como funciona o VagaCerta</h2>
          <p className="text-slate-600 mt-2 text-base">
            Em três passos simples e rápidos você compara, entende as lacunas e otimiza seu perfil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 relative hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${step.bg}`}>
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-slate-400 font-mono">
                  PASSO {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
