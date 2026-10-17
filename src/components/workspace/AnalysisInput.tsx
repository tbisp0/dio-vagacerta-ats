import React, { useState } from 'react';
import { JobAnalysisInput } from '../../types';
import { mockScenarios } from '../../data/mockData';
import { Sparkles, Play, RotateCcw, Building2, Briefcase, FileText, CheckCircle2 } from 'lucide-react';

interface AnalysisInputProps {
  onAnalyze: (input: JobAnalysisInput) => void;
  isLoading: boolean;
}

export const AnalysisInput: React.FC<AnalysisInputProps> = ({ onAnalyze, isLoading }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');

  // Carrega um dos cenários pré-configurados com 1 clique
  const handleLoadScenario = (key: 'reactDev' | 'dataAnalyst') => {
    const scenario = mockScenarios[key].data;
    setJobTitle(scenario.jobTitle);
    setCompany(scenario.company);
    setJobDescription(scenario.jobDescription);
    setResumeText(scenario.resumeText);
  };

  const handleClear = () => {
    setJobTitle('');
    setCompany('');
    setJobDescription('');
    setResumeText('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle.trim() || !jobDescription.trim() || !resumeText.trim()) {
      alert('Por favor, preencha ao menos o Título da vaga, a Descrição da vaga e o seu Currículo.');
      return;
    }
    onAnalyze({
      jobTitle: jobTitle.trim(),
      company: company.trim() || 'Empresa Confidencial',
      jobDescription: jobDescription.trim(),
      resumeText: resumeText.trim()
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Cabeçalho da Seção com Botões de Teste Rápido */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Nova Análise de Compatibilidade</h2>
            <p className="text-sm text-slate-600 mt-1">
              Cole as informações da vaga e o seu currículo ou clique em um dos exemplos rápidos abaixo.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
              Exemplos rápidos:
            </span>
            <button
              type="button"
              onClick={() => handleLoadScenario('reactDev')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200 hover:bg-brand-blue-100 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Dev React (Tech)</span>
            </button>
            <button
              type="button"
              onClick={() => handleLoadScenario('dataAnalyst')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-yellow-50 text-yellow-900 border border-brand-yellow-200 hover:bg-brand-yellow-100 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Analista de Dados (BI)</span>
            </button>
            <button
              type="button"
              onClick={handleClear}
              title="Limpar campos"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Formulário Principal */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Metadados da Vaga (Título e Empresa) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Título da Vaga <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Ex.: Desenvolvedor Frontend React Pleno"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue-400 focus:border-brand-blue-400 outline-none transition-all placeholder:text-slate-400"
              />
              <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Empresa Contratante (Opcional)
            </label>
            <div className="relative">
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Ex.: Fintech Inova Brasil ou Confidencial"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue-400 focus:border-brand-blue-400 outline-none transition-all placeholder:text-slate-400"
              />
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>
        </div>

        {/* Lado a Lado: Descrição da Vaga vs. Currículo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Descrição da Vaga */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col h-full">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-blue-50 border border-brand-blue-200 flex items-center justify-center text-brand-blue-600">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">1. Descrição Completa da Vaga</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {jobDescription.length} caracteres
              </span>
            </div>

            <textarea
              required
              rows={14}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Cole aqui a descrição completa da vaga: responsabilidades, requisitos obrigatórios, tecnologias, diferenciais e atribuições..."
              className="w-full p-3.5 rounded-xl border border-slate-300 text-sm leading-relaxed focus:ring-2 focus:ring-brand-blue-400 focus:border-brand-blue-400 outline-none transition-all resize-y placeholder:text-slate-400 flex-1 font-sans"
            />
          </div>

          {/* Card 2: Currículo Atual */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col h-full">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow-100 border border-brand-yellow-200 flex items-center justify-center text-yellow-800">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">2. Seu Currículo Atual</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {resumeText.length} caracteres
              </span>
            </div>

            <textarea
              required
              rows={14}
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Cole aqui o texto completo do seu currículo: cabeçalho, resumo, competências, histórico de experiências e formação acadêmica..."
              className="w-full p-3.5 rounded-xl border border-slate-300 text-sm leading-relaxed focus:ring-2 focus:ring-brand-blue-400 focus:border-brand-blue-400 outline-none transition-all resize-y placeholder:text-slate-400 flex-1 font-sans"
            />
          </div>

        </div>

        {/* Botão de Ação Principal */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold bg-brand-blue-600 text-white shadow-md hover:bg-brand-blue-700 active:scale-[0.99] disabled:opacity-60 transition-all cursor-pointer"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Processando análise semântica...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Analisar Match e Gerar Versão Otimizada</span>
              </>
            )}
          </button>
        </div>

      </form>

    </div>
  );
};
