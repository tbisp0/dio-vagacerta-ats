import React from 'react';
import { Target, FileCheck, KeyRound, MessageSquareQuote } from 'lucide-react';

export const Features: React.FC = () => {
  const items = [
    {
      title: 'Match Real com a Vaga',
      description: 'Entenda com clareza o quanto seu perfil atende aos requisitos declarados no anúncio.',
      icon: <Target className="w-5 h-5 text-yellow-800" />,
      bg: 'bg-brand-yellow-100 border-brand-yellow-200'
    },
    {
      title: 'Currículo 100% ATS Friendly',
      description: 'Versão em coluna única, sem tabelas ou elementos que quebram os filtros das plataformas.',
      icon: <FileCheck className="w-5 h-5 text-yellow-800" />,
      bg: 'bg-brand-yellow-100 border-brand-yellow-200'
    },
    {
      title: 'Palavras-chave Estratégicas',
      description: 'Descubra quais termos do setor estão presentes e quais faltam para aumentar sua pontuação.',
      icon: <KeyRound className="w-5 h-5 text-yellow-800" />,
      bg: 'bg-brand-yellow-100 border-brand-yellow-200'
    },
    {
      title: 'Narrativa Profissional Alinhada',
      description: 'Ajuste seu resumo e competências reais para o vocabulário usado pelos recrutadores.',
      icon: <MessageSquareQuote className="w-5 h-5 text-yellow-800" />,
      bg: 'bg-brand-yellow-100 border-brand-yellow-200'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Por que usar o VagaCerta ATS</h2>
          <p className="text-slate-600 mt-2 text-base">
            Aumente suas chances de ser chamado para entrevistas reais sem perder tempo com rejeições automáticas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 hover:border-slate-300 transition-colors"
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-slate-900 text-base mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
