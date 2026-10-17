# VagaCerta ATS — Otimizador Curricular Ético para o Mercado Brasileiro

> **Desafio DIO & Lovable:** Construção de uma aplicação web que compara um currículo com uma vaga de emprego e devolve uma versão ATS-friendly (otimizada para sistemas de triagem automática como Gupy, Kenoby, Workday, Greenhouse e Taleo).

🌐 **Endereço da Aplicação Publicada (Live Demo):**  
👉 **[https://tbisp0.github.io/dio-vagacerta-ats/](https://tbisp0.github.io/dio-vagacerta-ats/)**

📁 **Repositório Oficial no GitHub:**  
👉 **[https://github.com/tbisp0/dio-vagacerta-ats](https://github.com/tbisp0/dio-vagacerta-ats)**

---

## 1. Qual Problema a Aplicação Resolve?

No mercado de trabalho brasileiro, um número expressivo de currículos de profissionais qualificados é descartado sumariamente na primeira etapa seletiva por robôs de triagem automática (os chamados **ATS - Applicant Tracking Systems**).

Essa eliminação precoce ocorre por dois fatores principais:
1. **Incompatibilidade Estrutural:** Currículos diagramados com tabelas, colunas duplas, caixas de texto flutuantes ou ícones gráficos geram erros na extração (*parsing*) do texto pelos sistemas automatizados.
2. **Desalinhamento Semântico de Taxonomia:** A pessoa possui a experiência prática, mas não utilizou os termos e palavras-chave exatos descritos no anúncio da vaga (por exemplo, listar apenas "bancos de dados" quando o sistema busca "SQL avançado, PostgreSQL ou BigQuery").

O **VagaCerta ATS** funciona como um tradutor ético: analisa o anúncio da vaga, compara com o currículo atual, aponta o nível de aderência (*match score*), destaca termos presentes e ausentes e reorganiza o currículo em um layout canônico de coluna única, pronto para os robôs e para a leitura humana.

---

## 2. A Regra de Ouro da Honestidade Ética

> **Compromisso Ético Obrigatório:**  
> A aplicação **melhora a forma como o candidato se apresenta, mas NUNCA inventa experiências ou competências que ele não tem**. 
> Essa diretriz é exposta em destaque na própria interface do usuário por meio de um card de compromisso ético e no checklist de integridade.

---

## 3. O Mega Prompt Utilizado e sua Evolução

### 3.1 O Mega Prompt Original Planejado para o Lovable
Para guiar a concepção do produto, foi estruturado o seguinte Mega Prompt em Markdown:

````markdown
# Projeto: VagaCerta ATS - Otimizador de Currículos Ético e Inteligente

Você é um engenheiro de software sênior e especialista em UI/UX para aplicações web modernas. Construa uma aplicação web completa em React, TypeScript, Tailwind CSS e componentes do Shadcn/UI chamada "VagaCerta ATS".

A aplicação resolve o drama do mercado de trabalho brasileiro: candidatos qualificados barrados pelos robôs de triagem de RH (ATS) antes de qualquer pessoa ler o currículo.

1. Princípios e Diretrizes:
- Regra de Ouro: A ferramenta reorganiza, contextualiza e melhora como o candidato se apresenta com as palavras-chave certas da vaga, mas NUNCA inventa experiências que ele não tem. Exiba esse compromisso na interface.
- Design System: Shadcn/UI com paleta em Branco (#FFFFFF / slate-50), Azul Claro (#0284C7 / #E0F2FE) para ações e Amarelo Claro (#FEF9C3 / #FEF08A) como marca-texto para alertas de termos ausentes.
- Fricção Zero: Sem login obrigatório; funcionamento imediato com armazenamento no localStorage.

2. Telas e Componentes:
- Landing Page: Hero impactante com card de demonstração (match visual de 78%, tags azuis e amarelas), "Como funciona" em 3 passos e banner de compromisso ético.
- Workspace do App: Sidebar com Nova Análise, Métricas/Dashboard, Histórico Local, Configurações e Design System.
- Entrada de Dados: Campos amplos para Vaga e Currículo com botões de 1 clique para carregar exemplos reais (Dev Frontend React e Analista de Dados).
- Diagnóstico: Match geral ponderado (Hard Skills 50%, Contexto 30%, Estrutura 20%), pontos fortes, lacunas e badges de termos encontrados e ausentes.
- Currículo Otimizado: Folha A4 para impressão em PDF sem cabeçalhos do navegador (@media print), alternador "Folha A4" vs. "Visão do Robô (Raw)", edição de texto inline, download em .DOCX e .TXT, e checklist educativo ATS lateral.
````

### 3.2 O que mudou nele até a versão final?
1. **Autonomia sem dependência de créditos:** Em vez de depender de créditos limitados do Lovable ou de chaves de API pagas na nuvem, o motor semântico foi integralmente implementado no próprio código TypeScript do frontend (`analyzerEngine.ts`). Isso garante custo zero vitalício, velocidade instantânea (<800ms) e privacidade total (LGPD).
2. **Transparência do Score (Fórmula Explicável):** Na versão final, a pontuação não é apenas um percentual arbitrário; ela exibe a quebra em três dimensões: *Hard Skills & Termos* (50%), *Contexto do Título da Vaga* (30%) e *Estrutura ATS* (20%).
3. **Modo "Visão do Robô ATS (Raw)":** Adicionou-se uma alternância de visualização na tela do currículo para exibir exatamente o texto puro linear que os robôs leem.
4. **Documento Dedicado de Design System:** Criação do arquivo [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) com os tokens de cores, tipografia Inter e acessibilidade WCAG AA.

---

## 4. Como a Análise Funciona (Da Vaga ao Currículo Ajustado)

O fluxo técnico de processamento ocorre em 4 etapas no cliente:

```
[1. Entrada]               [2. Motor Semântico]              [3. Diagnóstico Visual]        [4. Entrega & Exportação]
- Título e Descrição   ──> - Normalização & Stopwords    ──> - Score Ponderado (%)      ──> - Folha A4 ATS-Friendly
- Currículo Atual          - Extração de Hard Skills         - Badges Azuis (Presentes)     - Cópia com Toast
                           - Varredura de Frequência         - Badges Amarelas (Ausentes)   - Impressão Limpa / PDF
                           - Análise de Estrutura Canônica   - Pontos Fortes & Lacunas      - Download em .DOCX e .TXT
```

1. **Higienização:** O motor remove stopwords da língua portuguesa e normaliza acentuações e pontuações.
2. **Extração de Entidades:** Identifica competências técnicas e termos do setor presentes no anúncio da vaga.
3. **Comparação Cruzada:** Verifica a presença de cada termo no texto do candidato, calculando o percentual de cobertura de *Hard Skills*.
4. **Reestruturação Canônica:** Gera o documento em formato de coluna única, estruturando: Cabeçalho limpo, Cargo pretendido em destaque, Resumo Profissional estratégico, Lista de Competências Relevantes e Histórico cronológico reverso com verbos de ação.

---

## 5. Ajustes Solicitados após a Primeira Concepção e Por Quê

1. **Criação de Exemplos Prontos em 1 Clique (Dados Mockados):**
   - *Por quê:* Avaliadores e recrutadores precisam testar a ferramenta em poucos segundos. Adicionamos dois perfis completos do mercado brasileiro: *Desenvolvedor Frontend React Pleno* e *Analista de Dados & BI*.
2. **Exportação Híbrida (.DOCX, .TXT e Impressão A4/PDF):**
   - *Por quê:* O candidato precisa de flexibilidade para editar o arquivo no Microsoft Word ou salvar como PDF padronizado sem que o navegador inclua cabeçalhos de URL e data.
3. **Persistência Segura no `localStorage`:**
   - *Por quê:* Permite que o usuário feche a aba sem perder suas análises anteriores, sem necessidade de banco de dados ou cadastro prévio.
4. **Campo Opcional para Chave de IA (BYOK):**
   - *Por quê:* Mantém a aplicação 100% funcional localmente de graça, mas oferece a usuários avançados a possibilidade de conectar seus próprios modelos da OpenAI ou Gemini nas configurações.

---

## 6. Checklist de Conformidade da Submissão

- [x] Aplicação publicada e acessível publicamente via link web.
- [x] Todos os arquivos e diretórios citados existem e têm conteúdo funcional.
- [x] O link submetido é o do repositório público no GitHub.
- [x] Nome do repositório legível, em minúsculas e sem acentos: `dio-vagacerta-ats`.
- [x] Nenhuma chave de API, token ou credencial privada foi versionada no repositório (`.gitignore` configurado).
- [x] Build de produção testado e verificado sem erros (`npm run build`).

---

## 7. Como Executar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/tbisp0/dio-vagacerta-ats.git

# 2. Acesse a pasta do projeto
cd dio-vagacerta-ats

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

---

## 8. Licença e Autoria

Projeto concebido e desenvolvido por **Tarcisio Bispo de Araujo (Tata)** como projeto prático do Desafio DIO.  
Licença MIT.
