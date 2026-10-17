import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';

interface NavbarProps {
  currentView: 'landing' | 'workspace';
  onNavigate: (view: 'landing' | 'workspace') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logotipo e Identidade */}
        <div 
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-200 flex items-center justify-center text-brand-blue-600 shadow-sm group-hover:bg-brand-blue-100 transition-colors">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-slate-900 tracking-tight">VagaCerta</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-blue-100 text-brand-blue-700">
                ATS Friendly
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">Otimizador Ético de Currículos</p>
          </div>
        </div>

        {/* Links e Botão de Ação */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('landing')}
            className={`text-sm font-medium transition-colors ${
              currentView === 'landing' 
                ? 'text-brand-blue-600 font-semibold' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Início
          </button>
          
          <button
            onClick={() => onNavigate('workspace')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-brand-blue-600 text-white shadow-sm hover:bg-brand-blue-700 active:scale-[0.99] transition-all"
          >
            <span>{currentView === 'landing' ? 'Abrir Aplicativo' : 'Nova Análise'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
