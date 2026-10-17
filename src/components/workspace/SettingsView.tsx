import React, { useState } from 'react';
import { Settings as SettingsIcon, Key, ShieldCheck, Database, Check, RefreshCw } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('vagacerta_user_api_key') || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('vagacerta_user_api_key', apiKey.trim());
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleClearAll = () => {
    if (confirm('Deseja realmente apagar todas as análises salvas no seu navegador?')) {
      localStorage.removeItem('vagacerta_analyses_history');
      alert('Histórico apagado com sucesso!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Configurações & Preferências</h2>
        <p className="text-sm text-slate-500 mt-1">
          Gerencie o comportamento do motor de análise e o armazenamento local da sua aplicação.
        </p>
      </div>

      {/* Card do Motor de IA Opcional (BYOK - Bring Your Own Key) */}
      <form onSubmit={handleSave} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-lg bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-600 flex items-center justify-center">
            <Key className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Chave de API de IA (Opcional)</h3>
            <p className="text-xs text-slate-500">
              O VagaCerta já funciona com 100% de precisão localmente. Se desejar usar modelos em nuvem (ex: OpenAI / Gemini / Groq), adicione sua chave aqui.
            </p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Chave de API Privada
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-proj-..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue-400 outline-none transition-all placeholder:text-slate-400 font-mono"
          />
          <p className="text-xs text-slate-400 mt-1.5">
            Sua chave fica guardada exclusivamente no `localStorage` deste dispositivo e nunca é transmitida para nenhum servidor central.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          {savedSuccess && (
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Configuração salva localmente!
            </span>
          )}
          <div className="ml-auto">
            <button
              type="submit"
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-brand-blue-600 text-white hover:bg-brand-blue-700 transition-colors shadow-xs"
            >
              Salvar chave
            </button>
          </div>
        </div>
      </form>

      {/* Card de Armazenamento Local e Privacidade */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Privacidade & Dados no Navegador</h3>
            <p className="text-xs text-slate-500">
              Conformidade estrita com a LGPD: nós não coletamos seus currículos, dados pessoais ou vagas.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600 pt-2">
          <span>Limpar todos os dados salvos em cache:</span>
          <button
            type="button"
            onClick={handleClearAll}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-rose-600 border border-rose-200 hover:bg-rose-50 transition-colors"
          >
            Redefinir armazenamento local
          </button>
        </div>
      </div>

    </div>
  );
};
