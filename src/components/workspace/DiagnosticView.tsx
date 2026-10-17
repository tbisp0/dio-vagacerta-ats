import React from 'react';
import { AnalysisResult } from '../../types';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  BookmarkCheck,
  TrendingUp,
  Sliders,
  FileCheck2
} from 'lucide-react';

interface DiagnosticViewProps {
  result: AnalysisResult;
  onGoToResume: () => void;
  onBackToInput: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

export const DiagnosticView: React.FC<DiagnosticViewProps> = ({
  result,
  onGoToResume,
  onBackToInput,
  isSaved,
  onToggleSave
}) => {
  const { score, strengths, gaps, foundKeywords, missingKeywords, improvementSuggestions, input } = result;

  // Cor do score
  const getBadgeStyle = () => {
    switch (score.statusColor) {
      case 'emerald':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'blue':
        return 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200';
      case 'amber':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'rose':
      default:
        return 'bg-rose-50 text-rose-700 border-rose-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Barra de Ações Superior */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToInput}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Nova análise / Editar dados</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSave}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              isSaved 
                ? 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200' 
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            {isSaved ? <BookmarkCheck className="w-4 h-4 text-brand-blue-600" /> : <Bookmark className="w-4 h-4 text-slate-400" />}
            <span>{isSaved ? 'Análise salva' : 'Salvar análise'}</span>
          </button>

          <button
            onClick={onGoToResume}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold bg-brand-blue-600 text-white shadow-sm hover:bg-brand-blue-700 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ver currículo otimizado</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cartão de Score Geral e Resumo */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getBadgeStyle()}`}>
                {score.statusLabel}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {result.createdAt}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {input.jobTitle}
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              {input.company}
            </p>
          </div>

          {/* Medidor do Match Geral */}
          <div className="sm:text-right shrink-0">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Match Geral ATS
            </span>
            <div className="flex items-baseline sm:justify-end gap-1.5">
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {score.overall}%
              </span>
            </div>
            <div className="w-48 sm:w-56 h-2.5 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div 
                className="h-full bg-brand-blue-600 rounded-full transition-all duration-700"
                style={{ width: `${score.overall}%` }}
              />
            </div>
          </div>

        </div>

        {/* Resumo Diagnóstico */}
        <p className="text-sm text-slate-600 leading-relaxed pt-5">
          {result.summary}
        </p>

        {/* Quebra Ponderada da Pontuação (Diferencial Autoral do Tata) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-100">
          <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/60">
            <span className="text-xs text-slate-500 block mb-1">Hard Skills & Termos (50%)</span>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-slate-800">{score.hardSkillsScore}%</span>
              <Sliders className="w-4 h-4 text-brand-blue-500" />
            </div>
          </div>

          <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/60">
            <span className="text-xs text-slate-500 block mb-1">Contexto & Título da Vaga (30%)</span>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-slate-800">{score.contextScore}%</span>
              <TrendingUp className="w-4 h-4 text-brand-blue-500" />
            </div>
          </div>

          <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/60">
            <span className="text-xs text-slate-500 block mb-1">Estrutura & Legibilidade ATS (20%)</span>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-slate-800">{score.structureScore}%</span>
              <FileCheck2 className="w-4 h-4 text-emerald-500" />
            </div>
          </div>
        </div>

      </div>

      {/* Grid de 2 Colunas: Pontos Fortes vs. Lacunas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Coluna 1: Pontos Fortes */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Pontos Fortes Identificados</h3>
            </div>

            <ul className="space-y-3">
              {strengths.map((str, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coluna 2: Lacunas Identificadas */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Lacunas e Atenções</h3>
            </div>

            <ul className="space-y-3">
              {gaps.map((gap, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{gap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Grid de Palavras-Chave (Encontradas vs. Ausentes com Amarelo Claro) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Tags Encontradas (Azul Claro) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-slate-900">
              Palavras-chave encontradas ({foundKeywords.length})
            </h4>
            <span className="text-xs text-brand-blue-700 font-medium">Já no seu currículo</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {foundKeywords.length > 0 ? (
              foundKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200"
                >
                  {kw}
                </span>
              ))
            ) : (
              <p className="text-xs text-slate-400 italic">Nenhum termo técnico coincidente encontrado.</p>
            )}
          </div>
        </div>

        {/* Tags Ausentes (Amarelo Claro Marca-Texto) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-slate-900">
              Palavras-chave ausentes da vaga ({missingKeywords.length})
            </h4>
            <span className="text-xs text-yellow-800 font-medium">Destaque de marca-texto</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {missingKeywords.length > 0 ? (
              missingKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-brand-yellow-100 text-yellow-900 border border-brand-yellow-200"
                >
                  {kw}
                </span>
              ))
            ) : (
              <p className="text-xs text-emerald-600 font-medium">Todas as palavras-chave principais estão presentes!</p>
            )}
          </div>
        </div>

      </div>

      {/* Caixa de Sugestões de Melhoria */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-blue-600" />
          <span>Plano de Ação para Maximizar seu Match</span>
        </h4>
        <div className="space-y-2">
          {improvementSuggestions.map((sug, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-sm text-slate-700">
              <span className="w-5 h-5 rounded-full bg-brand-blue-100 text-brand-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span>{sug}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
