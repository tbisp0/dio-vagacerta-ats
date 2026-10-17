import React, { useState } from 'react';
import { AnalysisResult } from '../../types';
import { ATS_CHECKLIST } from '../../lib/analyzerEngine';
import { 
  ArrowLeft, 
  Copy, 
  Printer, 
  Download, 
  Edit3, 
  Check, 
  FileText, 
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Code2
} from 'lucide-react';

interface ResumeViewerProps {
  result: AnalysisResult;
  onBackToDiagnostic: () => void;
  onUpdateResumeText: (newText: string) => void;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({
  result,
  onBackToDiagnostic,
  onUpdateResumeText
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(result.optimizedResumeText);
  const [copiedToast, setCopiedToast] = useState(false);
  const [viewMode, setViewMode] = useState<'formatted' | 'raw'>('formatted');

  // Copia o texto para a área de transferência com Toast
  const handleCopy = () => {
    navigator.clipboard.writeText(editText);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  // Impressão limpa via navegador para salvar em PDF (usando @media print)
  const handlePrintPDF = () => {
    window.print();
  };

  // Download do arquivo DOCX / TXT formatado via Blob
  const handleDownloadDoc = () => {
    const blob = new Blob([editText], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `curriculo_ats_${result.input.jobTitle.toLowerCase().replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([editText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `curriculo_ats_${result.input.jobTitle.toLowerCase().replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    onUpdateResumeText(editText);
  };

  const wordCount = editText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Toast Flutuante de Cópia */}
      {copiedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 text-sm font-medium animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Currículo copiado para a área de transferência!</span>
        </div>
      )}

      {/* Barra de Ações Superior (Oculta na impressão) */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        
        <button
          onClick={onBackToDiagnostic}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao diagnóstico</span>
        </button>

        {/* Botões de Ação */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Alternador de Modo: Formatado vs. Visão do Robô ATS (Autoral do Tata) */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg mr-2 border border-slate-200">
            <button
              onClick={() => setViewMode('formatted')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                viewMode === 'formatted' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Folha A4</span>
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                viewMode === 'raw' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Visão do Robô (Raw)</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-slate-500" />
            <span>Copiar</span>
          </button>

          <button
            onClick={handlePrintPDF}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Imprimir / PDF</span>
          </button>

          <button
            onClick={handleDownloadDoc}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>.DOCX</span>
          </button>

          <button
            onClick={handleDownloadTxt}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>.TXT</span>
          </button>

          {isEditing ? (
            <button
              onClick={handleSaveEdit}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Salvar edição</span>
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200 hover:bg-brand-blue-100 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editar texto</span>
            </button>
          )}

        </div>

      </div>

      {/* Grid Principal: Folha do Currículo + Checklist ATS Lateral */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Folha do Currículo (8 Colunas em Desktop / 12 na Impressão) */}
        <div className="lg:col-span-8 print-page">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm font-sans relative">
            
            {/* Metadados do Topo (Ocultos na impressão) */}
            <div className="no-print flex items-center justify-between pb-6 mb-6 border-b border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-blue-600" />
                <span className="font-semibold text-slate-700">Versão Otimizada ATS-Friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">Português</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">Tom: profissional</span>
                <span className="font-mono text-slate-400">{wordCount} palavras</span>
              </div>
            </div>

            {/* Conteúdo do Currículo */}
            {isEditing ? (
              <textarea
                rows={28}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full p-4 rounded-xl border border-brand-blue-300 font-mono text-xs leading-relaxed outline-none focus:ring-2 focus:ring-brand-blue-400 bg-slate-50/50"
              />
            ) : viewMode === 'raw' ? (
              <pre className="font-mono text-xs text-slate-800 leading-relaxed whitespace-pre-wrap bg-slate-50 p-6 rounded-xl border border-slate-200 overflow-x-auto">
                {editText}
              </pre>
            ) : (
              <div className="whitespace-pre-line text-sm text-slate-800 leading-relaxed font-sans space-y-4">
                {editText}
              </div>
            )}

          </div>
        </div>

        {/* Sidebar Lateral Direita: Checklist ATS e Resumo da Vaga (Ocultos na impressão) */}
        <div className="no-print lg:col-span-4 space-y-6">
          
          {/* Checklist Educativo ATS (Inspiração do Bruno com Toque do Tata) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Checklist de Conformidade ATS</h3>
            </div>

            <div className="space-y-3">
              {ATS_CHECKLIST.map((item) => (
                <div key={item.id} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800">{item.title}</p>
                    <p className="text-slate-500 mt-0.5">{item.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card Ético de Reforço */}
          <div className="bg-brand-yellow-50/70 border border-brand-yellow-200 rounded-2xl p-5 text-xs text-yellow-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-yellow-800 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Lembrete de Integridade</p>
              <p className="text-yellow-800/90 mt-1 leading-relaxed">
                Antes de submeter o arquivo à vaga, faça uma leitura rápida para assegurar que 
                todas as competências citadas refletem sua verdadeira trajetória.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
