import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Sidebar, WorkspaceTab } from './components/layout/Sidebar';
import { HeroSection } from './components/landing/HeroSection';
import { HowItWorks } from './components/landing/HowItWorks';
import { EthicalBanner } from './components/landing/EthicalBanner';
import { Features } from './components/landing/Features';
import { AnalysisInput } from './components/workspace/AnalysisInput';
import { DiagnosticView } from './components/workspace/DiagnosticView';
import { ResumeViewer } from './components/workspace/ResumeViewer';
import { HistoryView } from './components/workspace/HistoryView';
import { SettingsView } from './components/workspace/SettingsView';
import { DesignSystemView } from './components/workspace/DesignSystemView';
import { JobAnalysisInput, AnalysisResult } from './types';
import { analyzeJobAndResume } from './lib/analyzerEngine';
import { mockScenarios } from './data/mockData';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'workspace'>('landing');
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('new-analysis');
  const [currentAnalysis, setCurrentAnalysis] = useState<AnalysisResult | null>(null);
  const [internalWorkspaceStep, setInternalWorkspaceStep] = useState<'input' | 'diagnostic' | 'resume'>('input');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Carrega histórico do localStorage
  const [history, setHistory] = useState<AnalysisResult[]>(() => {
    try {
      const saved = localStorage.getItem('vagacerta_analyses_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Salva no localStorage quando o histórico muda
  useEffect(() => {
    try {
      localStorage.setItem('vagacerta_analyses_history', JSON.stringify(history));
    } catch (e) {
      console.error('Falha ao salvar no localStorage', e);
    }
  }, [history]);

  // Executa o motor de análise semântica
  const handleAnalyze = (input: JobAnalysisInput) => {
    setIsAnalyzing(true);
    // Simula tempo háptico de processamento (800ms) para sensação de IA analítica
    setTimeout(() => {
      const result = analyzeJobAndResume(input);
      setCurrentAnalysis(result);
      setIsAnalyzing(false);
      setInternalWorkspaceStep('diagnostic');
    }, 850);
  };

  // Alterna o salvamento da análise atual no histórico
  const isCurrentSaved = !!currentAnalysis && history.some(h => h.id === currentAnalysis.id);
  const handleToggleSave = () => {
    if (!currentAnalysis) return;
    if (isCurrentSaved) {
      setHistory(prev => prev.filter(h => h.id !== currentAnalysis.id));
    } else {
      setHistory(prev => [currentAnalysis, ...prev]);
    }
  };

  const handleUpdateResumeText = (newText: string) => {
    if (!currentAnalysis) return;
    const updated = { ...currentAnalysis, optimizedResumeText: newText };
    setCurrentAnalysis(updated);
    setHistory(prev => prev.map(h => h.id === updated.id ? updated : h));
  };

  // Carrega exemplo direto da Landing Page
  const handleLoadExampleFromHero = () => {
    setCurrentView('workspace');
    setActiveTab('new-analysis');
    handleAnalyze(mockScenarios.reactDev.data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      
      {/* Barra de Navegação Superior */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          if (view === 'workspace' && !currentAnalysis) {
            setInternalWorkspaceStep('input');
          }
        }}
      />

      {/* Rota 1: Landing Page Completa */}
      {currentView === 'landing' && (
        <main className="flex-1">
          <HeroSection
            onStart={() => {
              setCurrentView('workspace');
              setActiveTab('new-analysis');
              setInternalWorkspaceStep('input');
            }}
            onLoadExample={handleLoadExampleFromHero}
          />
          <HowItWorks />
          <EthicalBanner 
            onStart={() => {
              setCurrentView('workspace');
              setActiveTab('new-analysis');
              setInternalWorkspaceStep('input');
            }} 
          />
          <Features />
          
          {/* Rodapé da Landing Page */}
          <footer className="py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500">
            <p className="font-semibold text-slate-700">VagaCerta ATS • Otimizador Ético de Currículos</p>
            <p className="mt-1">Desenvolvido com carinho por Tarcisio Bispo de Araujo (Tata) para o Desafio DIO.</p>
          </footer>
        </main>
      )}

      {/* Rota 2: App Workspace com Sidebar */}
      {currentView === 'workspace' && (
        <div className="flex-1 flex flex-col md:flex-row">
          
          <Sidebar
            activeTab={activeTab}
            onSelectTab={(tab) => {
              setActiveTab(tab);
              if (tab === 'new-analysis') {
                setInternalWorkspaceStep('input');
              }
            }}
            savedCount={history.length}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {activeTab === 'new-analysis' && (
              <>
                {internalWorkspaceStep === 'input' && (
                  <AnalysisInput
                    onAnalyze={handleAnalyze}
                    isLoading={isAnalyzing}
                  />
                )}

                {internalWorkspaceStep === 'diagnostic' && currentAnalysis && (
                  <DiagnosticView
                    result={currentAnalysis}
                    onGoToResume={() => setInternalWorkspaceStep('resume')}
                    onBackToInput={() => setInternalWorkspaceStep('input')}
                    isSaved={isCurrentSaved}
                    onToggleSave={handleToggleSave}
                  />
                )}

                {internalWorkspaceStep === 'resume' && currentAnalysis && (
                  <ResumeViewer
                    result={currentAnalysis}
                    onBackToDiagnostic={() => setInternalWorkspaceStep('diagnostic')}
                    onUpdateResumeText={handleUpdateResumeText}
                  />
                )}
              </>
            )}

            {activeTab === 'dashboard' && (
              <div className="max-w-5xl mx-auto space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Visão Geral & Métricas</h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Acompanhe a evolução de aderência dos seus currículos analisados.
                  </p>
                </div>
                {history.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total de Análises</span>
                      <p className="text-3xl font-black text-brand-blue-700 mt-2">{history.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Média de Match ATS</span>
                      <p className="text-3xl font-black text-emerald-600 mt-2">
                        {Math.round(history.reduce((acc, h) => acc + h.score.overall, 0) / history.length)}%
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Melhor Match</span>
                      <p className="text-3xl font-black text-slate-900 mt-2">
                        {Math.max(...history.map(h => h.score.overall))}%
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-sm">
                    Faça uma análise para visualizar suas estatísticas agregadas.
                  </div>
                )}
              </div>
            )}

            {activeTab === 'history' && (
              <HistoryView
                history={history}
                onSelectAnalysis={(item) => {
                  setCurrentAnalysis(item);
                  setActiveTab('new-analysis');
                  setInternalWorkspaceStep('diagnostic');
                }}
                onClearHistory={() => setHistory([])}
                onNewAnalysis={() => {
                  setActiveTab('new-analysis');
                  setInternalWorkspaceStep('input');
                }}
              />
            )}

            {activeTab === 'settings' && <SettingsView />}

            {activeTab === 'design-system' && <DesignSystemView />}
          </main>

        </div>
      )}

    </div>
  );
}

export default App;
