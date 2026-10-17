# Design System — VagaCerta ATS
**Versão:** 1.0.0  
**Data:** Outubro de 2026  
**Autor & Diretor Criativo:** Tarcisio Bispo de Araujo (Tata)  
**Papel do Agente:** Sênior Product Designer & UI/UX Specialist  

---

## 1. Filosofia de Design e Princípios Centrais

O **VagaCerta ATS** foi concebido sob três premissas fundamentais de experiência do usuário:

1. **Acolhimento e Empatia:** Processos seletivos são estressantes. A interface foge de contrastes agressivos e telas escuras intimidadoras, adotando uma atmosfera de **estúdio de trabalho calmo, claro e encorajador**.
2. **A Metáfora do Marca-Texto:** O uso do **amarelo claro** funciona como um marca-texto real em uma folha de papel: serve para iluminar termos essenciais, alertar sem assustar e guiar o olho do usuário para onde há oportunidade de melhoria.
3. **Escaneabilidade e Rigor Tipográfico:** A hierarquia tipográfica reproduz a lógica que um algoritmo ATS e um recrutador sênior usam para ler um documento em menos de 6 segundos.

---

## 2. Paleta de Cores e Tokens de Semiótica

A paleta foi selecionada para garantir harmonia estética e **conformidade rigorosa com acessibilidade WCAG 2.1 nível AA** (mínimo de 4.5:1 para texto normal e 3:1 para elementos de interface).

### 2.1 Cores Base (Superfície e Fundo)
- **Background App (Canvas):** `#F8FAFC` (`slate-50`) — Off-white descansado para os olhos.
- **Card Background (Superfície):** `#FFFFFF` (`white`) — Branco puro com bordas sutis para destacar cartões de conteúdo.
- **Bordas & Divisores:** `#E2E8F0` (`slate-200`) e `#CBD5E1` (`slate-300`).

### 2.2 Cores Primárias (Azul Claro e Acentos de Confiança)
- **Blue 50 (Fundo sutil de destaque):** `#F0F9FF` (`brand-blue-50`)
- **Blue 100 (Badge de termos presentes):** `#E0F2FE` (`brand-blue-100`)
- **Blue 200 (Bordas de foco e seletores):** `#BAE6FD` (`brand-blue-200`)
- **Blue 500 (Botões secundários e ícones):** `#0EA5E9` (`brand-blue-500`)
- **Blue 600 (Ação Primária / CTA):** `#0284C7` (`brand-blue-600`) — Proporciona 5.1:1 de contraste sobre branco.
- **Blue 700 (Hover de CTA):** `#0369A1` (`brand-blue-700`)

### 2.3 Cores de Destaque (Amarelo Claro / Marca-Texto)
- **Yellow 50 (Fundo de alertas suaves):** `#FEFCE8` (`brand-yellow-50`)
- **Yellow 100 (Fundo de termos ausentes / tags):** `#FEF9C3` (`brand-yellow-100`)
- **Yellow 200 (Bordas de realce):** `#FEF08A` (`brand-yellow-200`)
- **Texto sobre Amarelo (Contraste Aprovado):** `#854D0E` (`yellow-800`) ou `#713F12` (`yellow-900`) — Garante leitura nítida sem ofuscar.

### 2.4 Cores Semânticas de Diagnóstico
- **Status Positivo (Match Forte):** `#059669` (`emerald-600`) com fundo `#ECFDF5` (`emerald-50`).
- **Status Moderado / Alerta:** `#D97706` (`amber-600`) com fundo `#FFFBEB` (`amber-50`).
- **Status Crítico (Baixo Match):** `#E11D48` (`rose-600`) com fundo `#FFF1F2` (`rose-50`).

---

## 3. Tipografia e Escala Modular

A tipografia canônica é a família **Inter** (sans-serif neutra, moderna e com excelente legibilidade em telas de baixa e alta densidade de pixels).

| Nível | Tamanho | Peso | Line-Height | Uso no VagaCerta ATS |
| :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `2.25rem` (36px) | Bold (700) | `2.5rem` | Título principal da Hero e Dashboard |
| **Heading H2** | `1.5rem` (24px) | SemiBold (600) | `2rem` | Títulos de seções e diagnósticos |
| **Heading H3** | `1.125rem` (18px) | Medium (500) | `1.75rem` | Cabeçalhos de cartões e blocos |
| **Body Large** | `1rem` (16px) | Regular (400) | `1.5rem` | Parágrafos de instrução e resumos |
| **Body Regular** | `0.875rem` (14px) | Regular / Medium | `1.25rem` | Textos de inputs, tabelas e listas |
| **Caption / Badge**| `0.75rem` (12px) | Medium (500) | `1rem` | Tags de palavras-chave, metadados |

---

## 4. Componentes Canônicos (Shadcn/UI Adaptado)

### 4.1 Botão de Ação Primária (Button Primary)
- **Normal:** `bg-brand-blue-600 text-white font-medium py-2.5 px-5 rounded-lg shadow-sm transition-all hover:bg-brand-blue-700 active:scale-[0.99]`
- **Com ícone:** Espaçamento `gap-2` com ícone de 18px.

### 4.2 Botão Secundário / Outline
- **Normal:** `bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 py-2.5 px-5 rounded-lg font-medium shadow-sm transition-colors`

### 4.3 Badges de Palavras-Chave (Chips)
- **Tag Encontrada (Azul/Verde):** `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200`
- **Tag Ausente (Amarelo Claro Marca-Texto):** `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-yellow-100 text-yellow-900 border border-brand-yellow-200`

### 4.4 Card de Documento (Folha A4 ATS)
- **Visualização em Tela:** `bg-white border border-slate-200 rounded-xl p-8 shadow-sm font-sans max-w-4xl mx-auto`
- **Regras para Impressão (`@media print`):**
  - Oculta sidebar, botões e barras de navegação (`.no-print { display: none !important; }`).
  - Margens padrão A4 (`@page { margin: 15mm; size: A4 portrait; }`).
  - Cores forçadas em escala de cinza/preto para impressoras térmicas e jatos de tinta.

---

## 5. Diretrizes de Acessibilidade e Micro-interações
- Todos os campos de formulário contêm rótulos descritivos (`<label>`) e foco visual claro (`focus:ring-2 focus:ring-brand-blue-400 focus:outline-none`).
- Contadores de caracteres em tempo real para orientar o candidato sobre o volume ideal de texto para um ATS.
- Feedbacks de estado através de Toasts temporários de 3 segundos quando o texto for copiado ou exportado.
