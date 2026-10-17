# VagaCerta ATS — Otimizador Curricular Ético para o Mercado Brasileiro

> **Desafio DIO & Lovable:** Construção de uma aplicação web que compara currículos com vagas reais e devolve uma versão ATS-friendly (compatível com os sistemas de rastreamento de candidatos como Gupy, Kenoby, Workday e Greenhouse).

---

## 1. O Problema Resolvido

No Brasil, milhares de profissionais qualificados são descartados sumariamente na primeira etapa seletiva por robôs de triagem automática (os chamados **ATS - Applicant Tracking Systems**). 

Isso acontece não por falta de competência, mas porque:
1. Os currículos utilizam formatos gráficos complexos (duas colunas, tabelas, caixas de texto ou ícones) que quebram o leitor do robô.
2. A terminologia usada pelo candidato não coincide com a taxonomia exata exigida pelo recrutador no anúncio da vaga.

O **VagaCerta ATS** resolve essa dor traduzindo e organizando a trajetória real do profissional na linguagem que o algoritmo espera ler.

---

## 2. A Regra de Ouro da Honestidade Ética

> **Compromisso Ético Inegociável:**  
> O VagaCerta ATS **nunca inventa competências, cargos ou resultados** que o candidato não possui. Ele potencializa a apresentação, reorganiza o vocabulário e realça experiências verdadeiras para superar a barreira da máquina.

---

## 3. O Mega Prompt Planejado para o Lovable

Como parte do processo de concepção, foi estruturado o seguinte **Mega Prompt em Markdown**, focado em arquitetura limpa, componentes Shadcn/ui e paleta suave (Branco, Azul Claro e Amarelo Claro para destaque de marca-texto):

```markdown
# Projeto: VagaCerta ATS - Otimizador de Currículos Ético e Inteligente

Construa uma aplicação web moderna em React, TypeScript, Tailwind CSS e componentes do Shadcn/UI chamada "VagaCerta ATS".
A aplicação compara a descrição de uma vaga com o currículo de um candidato e devolve uma versão otimizada para sistemas ATS.

Regra Suprema de Ética:
- O app melhora a comunicação do candidato, mas NUNCA inventa experiências que ele não tem. Exiba um card informativo de compromisso ético na interface.

Design System & Paleta de Cores:
- Cores: Fundo branco/off-white (slate-50), Azul Claro (#0284C7 e #E0F2FE) para confiança e botões, e Amarelo Claro (#FEF9C3) para a metáfora do marca-texto em palavras-chave ausentes e alertas.
- Tipografia: Sans-serif (Inter) com alta escaneabilidade.

Estrutura da Aplicação:
1. Landing Page: Hero com título impactante, card flutuante de demonstração do match (com score de 78%, tags azuis e amarelas), seção "Como funciona" em 3 passos e card de compromisso ético.
2. Workspace do App com Sidebar: Abas para Nova Análise, Métricas/Dashboard, Histórico Local, Configurações e Design System.
3. Entrada de Dados: Campos amplos para Vaga e Currículo com botões de 1 clique para carregar exemplos reais (Dev Frontend React e Analista de Dados).
4. Diagnóstico Completo: Score geral de Match ATS, fórmula explicável (Hard skills 50%, Contexto 30%, Estrutura 20%), pontos fortes, lacunas e chips de palavras-chave encontradas e ausentes.
5. Folha de Currículo ATS-Friendly: Folha A4 limpa para impressão em PDF sem cabeçalhos do navegador, modo de visualização "Visão do Robô ATS (Raw)", edição de texto inline, download em .DOCX e .TXT, e checklist educativo de conformidade ATS.

Fricção Zero:
- Funcionamento imediato sem exigir cadastro ou login. Armazenamento de análises no localStorage do navegador.
```

---

## 4. Decisão de Engenharia Autoral: Autonomia e Custo Zero

Durante o desenvolvimento, optou-se por **não depender de créditos limitados de plataformas terceiras (como Lovable ou APIs pagas de IA)**. 

Implementou-se uma **arquitetura híbrida e autônoma**:
- **Motor Heurístico Local (TypeScript):** Roda 100% no cliente com tokenização, cálculo ponderado de relevância semântica e reestruturação textual em menos de 800ms.
- **Privacidade Total (LGPD):** Nenhum dado de currículo ou vaga é enviado para servidores externos.
- **BYOK (Bring Your Own Key):** Suporte opcional a chaves de API nas configurações caso o usuário queira refinamento generativo profundo.

---

## 5. Como a Análise Funciona (Passo a Passo)

```
[Vaga] + [Currículo Atual]
         │
         ▼
[Motor Semântico em TypeScript]
 ├── Extração de Hard Skills e n-grams do anúncio
 ├── Varredura de densidade no texto do candidato
 ├── Cálculo Ponderado do Score (Hard Skills: 50% | Contexto: 30% | Estrutura: 20%)
 └── Reorganização em layout canônico de coluna única para ATS
         │
         ▼
[Entrega ao Usuário]
 ├── Score e diagnóstico de pontos fortes/lacunas
 ├── Badges Azuis (Encontradas) e Amarelas (Ausentes)
 ├── Alternador "Folha A4" vs. "Visão do Robô (Raw)"
 └── Exportação: Copiar Texto, Imprimir/PDF (@media print) e Download .DOCX
```

---

## 6. Como Executar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/<seu-usuario>/DIO-vagacerta-ats.git

# 2. Acesse a pasta do projeto
cd DIO-vagacerta-ats

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

---

## 7. Como Gerar o PDF Formatado

1. Na tela de **Currículo Otimizado**, clique no botão **"Imprimir / PDF"**.
2. A aplicação utiliza estilos dedicados `@media print` que ocultam automaticamente menus, botões e barras laterais.
3. No diálogo de impressão do navegador, escolha a opção **"Salvar como PDF"** com margens padrão.

---

## 8. Licença e Autoria

Projeto concebido e desenvolvido por **Tarcisio Bispo de Araujo (Tata)** para o Desafio DIO.
Licença MIT.
