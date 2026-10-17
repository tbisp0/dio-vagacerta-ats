import React from 'react';
import { AnalysisResult } from '../../types';
import { History as HistoryIcon, ArrowRight, Trash2, Calendar, Building, Sparkles } from 'lucide-react';

interface HistoryViewProps {
  history: AnalysisResult[];
  onSelectAnalysis: (analysis: AnalysisResult) => void;
  onClearHistory: () => void;
  onNewAnalysis: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  history,
  onSelectAnalysis,
  onClearHistory,
  onNewAnalysis
}) => {
  if (history.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center bg-white rounded-2xl border border-slate-200 p-12">
        <div className="w-16 h-16 rounded-2xl bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-600 flex items-center justify-center mx-auto mb-4">
          <HistoryIcon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhuma análise salva ainda</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
          Quando você analisar uma vaga e seu currículo, clique no botão "Salvar análise" 
          para guardar o histórico das otimizações no seu navegador.
        </p>
        <button
          onClick={onNewAnalysis}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-blue-600 text-white shadow-sm hover:bg-brand-blue-700 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Fazer minha primeira análise</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      <div className="flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-200">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Histórico de Análises</h2>
          <p className="text-sm text-slate-500 mt-1">
            {history.length} análise{history.length > 1 ? 's' : ''} armazenada{history.length > 1 ? 's' : ''} com segurança neste navegador.
          </p>
        </div>

        <button
          onClick={onClearHistory}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span>Limpar histórico</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {history.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectAnalysis(item)}
            className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-blue-300 hover:shadow-md transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {item.score.statusLabel}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.createdAt}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue-600 transition-colors">
                {item.input.jobTitle}
              </h3>
              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-400" />
                <span>{item.input.company}</span>
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Match ATS</span>
                <span className="text-2xl font-black text-brand-blue-700">
                  {item.score.overall}%
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-brand-blue-50 flex items-center justify-center text-slate-400 group-hover:text-brand-blue-600 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
