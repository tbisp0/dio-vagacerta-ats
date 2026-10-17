import React from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  History, 
  Settings, 
  Palette,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export type WorkspaceTab = 'new-analysis' | 'dashboard' | 'history' | 'settings' | 'design-system';

interface SidebarProps {
  activeTab: WorkspaceTab;
  onSelectTab: (tab: WorkspaceTab) => void;
  savedCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  onSelectTab, 
  savedCount 
}) => {
  const menuItems: { id: WorkspaceTab; label: string; icon: React.ReactNode; badge?: string | number }[] = [
    {
      id: 'new-analysis',
      label: 'Nova Análise',
      icon: <PlusCircle className="w-5 h-5" />,
    },
    {
      id: 'dashboard',
      label: 'Visão Geral / Métricas',
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      id: 'history',
      label: 'Histórico Salvo',
      icon: <History className="w-5 h-5" />,
      badge: savedCount > 0 ? savedCount : undefined
    },
    {
      id: 'settings',
      label: 'Configurações',
      icon: <Settings className="w-5 h-5" />,
    },
    {
      id: 'design-system',
      label: 'Design System (UX)',
      icon: <Palette className="w-5 h-5" />,
    }
  ];

  return (
    <aside className="no-print w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 min-h-[calc(100vh-4rem)]">
      
      {/* Aviso de Privacidade Local */}
      <div className="p-4 border-b border-slate-100">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100 text-xs text-brand-blue-800">
          <ShieldCheck className="w-4 h-4 text-brand-blue-600 shrink-0" />
          <span>Privacidade ativa: seus dados não saem do seu navegador.</span>
        </div>
      </div>

      {/* Menu Principal */}
      <nav className="p-3 space-y-1 flex-1">
        <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Navegação
        </div>
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-brand-blue-50 text-brand-blue-700 font-semibold shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={isActive ? 'text-brand-blue-600' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-blue-100 text-brand-blue-700">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Rodapé da Sidebar */}
      <div className="p-4 border-t border-slate-200 bg-slate-50/50">
        <div className="text-xs text-slate-500">
          <p className="font-medium text-slate-700">VagaCerta ATS v1.0</p>
          <p>Projeto Autoral DIO</p>
        </div>
      </div>

    </aside>
  );
};
