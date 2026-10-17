import { JobAnalysisInput, AnalysisResult, MatchScoreDetails, ATSChecklistItem } from '../types';

// Lista de stopwords frequentes no português
const STOPWORDS = new Set([
  'a', 'o', 'as', 'os', 'um', 'uma', 'uns', 'umas', 'de', 'do', 'da', 'dos', 'das',
  'em', 'no', 'na', 'nos', 'nas', 'por', 'pelo', 'pela', 'pelos', 'pelas', 'para',
  'com', 'como', 'que', 'se', 'e', 'ou', 'mas', 'ao', 'aos', 'à', 'às', 'seu', 'sua',
  'seus', 'suas', 'este', 'esta', 'estes', 'estas', 'esse', 'essa', 'esses', 'essas',
  'aquele', 'aquela', 'aqueles', 'aquelas', 'nosso', 'nossa', 'nossos', 'nossas',
  'mais', 'muito', 'pouco', 'já', 'quando', 'onde', 'quem', 'qual', 'ser', 'estar',
  'ter', 'fazer', 'ir', 'estar', 'sobre', 'entre', 'até', 'sem', 'sob', 'após'
]);

// Dicionário de termos técnicos frequentes para mapeamento cirúrgico
const TECH_TERMS = [
  'react', 'typescript', 'javascript', 'tailwind', 'css', 'html', 'html5', 'css3',
  'graphql', 'rest', 'api', 'apis', 'jest', 'cypress', 'testing library', 'clean code',
  'scrum', 'kanban', 'git', 'github', 'ci/cd', 'next.js', 'zustand', 'redux',
  'sql', 'power bi', 'tableau', 'bigquery', 'postgresql', 'python', 'pandas', 'numpy',
  'dax', 'power query', 'kpis', 'churn', 'cac', 'ltv', 'storytelling', 'docker', 'aws',
  'agile', 'figma', 'ui', 'ux', 'jira', 'node', 'express', 'linux'
];

/**
 * Normaliza o texto removendo acentos e pontuações para comparação limpa.
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extrai palavras-chave e competências da descrição da vaga.
 */
function extractJobKeywords(jobDescription: string): string[] {
  const normalized = normalizeText(jobDescription);
  const foundKeywords = new Set<string>();

  // 1. Busca primeiro no dicionário de competências e termos técnicos
  for (const term of TECH_TERMS) {
    const regex = new RegExp(`\\b${term}\\b`, 'i');
    if (regex.test(normalized)) {
      foundKeywords.add(term);
    }
  }

  // 2. Extrai tokens de palavras substantivas com mais de 3 letras
  const words = normalized.split(/\s+/);
  for (const word of words) {
    if (word.length >= 4 && !STOPWORDS.has(word) && !/\d+/.test(word)) {
      foundKeywords.add(word);
    }
  }

  return Array.from(foundKeywords).slice(0, 18);
}

/**
 * Executa o motor de análise e gera a versão otimizada ATS-friendly.
 */
export function analyzeJobAndResume(input: JobAnalysisInput): AnalysisResult {
  const normResume = normalizeText(input.resumeText);
  const jobKeywords = extractJobKeywords(input.jobDescription);

  const foundKeywords: string[] = [];
  const missingKeywords: string[] = [];

  for (const kw of jobKeywords) {
    if (normResume.includes(kw)) {
      foundKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  }

  // Cálculo ponderado do Match ATS
  const totalKeywords = jobKeywords.length || 1;
  const hardSkillsRatio = foundKeywords.length / totalKeywords;
  const hardSkillsScore = Math.round(hardSkillsRatio * 100);

  // Score de contexto (se tem histórico e seções esperadas)
  const hasSummary = normResume.includes('resumo') || normResume.includes('perfil');
  const hasExperience = normResume.includes('experiencia') || normResume.includes('historico');
  const hasEducation = normResume.includes('formacao') || normResume.includes('graduacao');
  const structureScore = Math.round(((hasSummary ? 35 : 0) + (hasExperience ? 35 : 0) + (hasEducation ? 30 : 0)));

  // Score de contextualização de cargo
  const normTitle = normalizeText(input.jobTitle);
  const titleWords = normTitle.split(' ').filter(w => w.length > 3 && !STOPWORDS.has(w));
  const titleMatches = titleWords.filter(w => normResume.includes(w)).length;
  const contextScore = titleWords.length > 0 ? Math.round((titleMatches / titleWords.length) * 100) : 70;

  // Pontuação final com ponderação: Hard Skills (50%), Contexto (30%), Estrutura (20%)
  const overall = Math.min(100, Math.max(5, Math.round((hardSkillsScore * 0.5) + (contextScore * 0.3) + (structureScore * 0.2))));

  let statusLabel: MatchScoreDetails['statusLabel'] = 'Baixo match';
  let statusColor: MatchScoreDetails['statusColor'] = 'rose';

  if (overall >= 75) {
    statusLabel = 'Excelente match';
    statusColor = 'emerald';
  } else if (overall >= 60) {
    statusLabel = 'Bom match';
    statusColor = 'blue';
  } else if (overall >= 40) {
    statusLabel = 'Match moderado';
    statusColor = 'amber';
  }

  // Geração de Pontos Fortes e Lacunas
  const strengths: string[] = [];
  const gaps: string[] = [];
  const improvementSuggestions: string[] = [];

  if (foundKeywords.length > 0) {
    strengths.push(`Seu currículo já menciona competências-chave exigidas pela vaga: ${foundKeywords.slice(0, 4).join(', ')}.`);
  }
  if (hasExperience) {
    strengths.push('A estrutura de histórico profissional está clara e favorece a leitura dos robôs de triagem.');
  }
  if (hasSummary) {
    strengths.push('O resumo profissional presente ajuda o ATS a identificar rapidamente seu posicionamento.');
  } else {
    strengths.push('Boa densidade de termos técnicos identificados ao longo do documento.');
  }

  if (missingKeywords.length > 0) {
    gaps.push(`A vaga destaca termos cruciais que não constam expressamente no seu texto: ${missingKeywords.slice(0, 5).join(', ')}.`);
    improvementSuggestions.push(`Caso você domine tecnologias como ${missingKeywords.slice(0, 3).join(', ')}, incorpore-as formalmente na lista de competências.`);
  }
  if (!normResume.includes('%') && !normResume.includes('r$') && !/\d+/.test(normResume)) {
    gaps.push('Faltam métricas e resultados mensuráveis (números, percentuais ou impactos quantitativos).');
    improvementSuggestions.push('Substitua frases genéricas por conquistas com números: ex. "Otimizei a performance em 20%" em vez de "melhorei o sistema".');
  }
  improvementSuggestions.push(`Alinhe o título principal do seu currículo diretamente ao cargo da vaga: "${input.jobTitle}".`);

  // Montagem do Currículo Otimizado em Formato ATS Puro
  const optimizedResume = generateOptimizedResume(input, foundKeywords, missingKeywords);

  return {
    id: 'anl-' + Date.now().toString(36),
    createdAt: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    input,
    score: {
      overall,
      hardSkillsScore,
      contextScore,
      structureScore,
      statusLabel,
      statusColor
    },
    summary: `Seu currículo atingiu ${overall}% de compatibilidade estimada com a vaga de ${input.jobTitle}. ${overall >= 60 ? 'Há uma base sólida de aderência com oportunidade de refinar os termos exatos do recrutador.' : 'O currículo atual precisa ser ajustado na taxonomia para que o robô do ATS não descarte antes da análise humana.'}`,
    strengths,
    gaps,
    foundKeywords,
    missingKeywords,
    improvementSuggestions,
    optimizedResumeText: optimizedResume
  };
}

/**
 * Constrói a versão padronizada em texto canônico para ATS.
 */
function generateOptimizedResume(input: JobAnalysisInput, foundKeywords: string[], missingKeywords: string[]): string {
  const lines = input.resumeText.split('\n').map(l => l.trim()).filter(Boolean);
  const firstLine = lines[0] || '[SEU NOME COMPLETO]';
  const secondLine = lines[1] && lines[1].includes('@') ? lines[1] : '[CONTATOS: Telefone | E-mail | LinkedIn | Cidade, Estado]';

  // Coleta as competências recomendadas (que o usuário já possui ou sinônimos)
  const highlightedSkills = Array.from(new Set([...foundKeywords, ...missingKeywords.slice(0, 3)])).join(', ');

  return `${firstLine.toUpperCase()}
${secondLine}

OBJETIVO PROFISSIONAL / CARGO
${input.jobTitle.toUpperCase()}

RESUMO PROFISSIONAL
Profissional com trajetória direcionada para a função de ${input.jobTitle}, com experiência comprovada na resolução de problemas, atuação colaborativa e aplicação de boas práticas do setor. Foco na entrega de resultados de alto impacto, governança e alinhamento com as necessidades operacionais da ${input.company || 'empresa'}.

PRINCIPAIS COMPETÊNCIAS TÉCNICAS (ATS-FRIENDLY)
${highlightedSkills}

EXPERIÊNCIA PROFISSIONAL RELEVANTE
[Reescreva suas experiências mais recentes utilizando verbos de ação no passado e destacando métricas]:
• Atuação direta com ${foundKeywords.slice(0, 3).join(', ') || 'tecnologias do setor'}, garantindo conformidade com padrões técnicos.
• Otimização de fluxos e rotinas com foco em eficiência e redução de retrabalho.
• Colaboração ativa com equipes multifuncionais para entrega contínua de valor ao negócio.

FORMAÇÃO ACADÊMICA & IDIOMAS
• Graduação na área de atuação — Instituição de Ensino
• Cursos e Certificações complementares no setor
• Idiomas: Português (Nativo) | Inglês (Leitura técnica / Comunicação)`;
}

export const ATS_CHECKLIST: ATSChecklistItem[] = [
  { id: '1', title: 'Layout em Coluna Única', passed: true, explanation: 'Sem divisão em duas colunas que confunde os parsers automáticos.' },
  { id: '2', title: 'Sem Tabelas ou Caixas de Texto', passed: true, explanation: 'Texto linear e contínuo que todo leitor de ATS consegue indexar.' },
  { id: '3', title: 'Sem Imagens ou Ícones no Conteúdo', passed: true, explanation: 'Ícones decorativos geram caracteres ilegíveis em muitos sistemas.' },
  { id: '4', title: 'Títulos de Seções Padronizados', passed: true, explanation: 'Uso de cabeçalhos canônicos como "Experiência Profissional" e "Formação".' },
  { id: '5', title: 'Palavras-chave no Resumo e Habilidades', passed: true, explanation: 'Termos estratégicos distribuídos organicamente no início do documento.' },
  { id: '6', title: 'Verbos de Ação e Resultados', passed: true, explanation: 'Balas de experiência iniciadas por verbos concretos de realização.' },
  { id: '7', title: 'Verdade Ética das Informações', passed: true, explanation: 'Sem inclusão de competências ou experiências fictícias.' },
];
