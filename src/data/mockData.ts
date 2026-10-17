import { JobAnalysisInput } from '../types';

export const mockScenarios: { [key: string]: { label: string; data: JobAnalysisInput } } = {
  reactDev: {
    label: "Desenvolvedor Frontend React Pleno (Tech)",
    data: {
      jobTitle: "Desenvolvedor Frontend React Pleno",
      company: "Fintech Inova Brasil",
      jobDescription: `Buscamos Desenvolvedor Frontend React Pleno para atuar em nossa plataforma de pagamentos digitais.
Responsabilidades:
- Desenvolver e manter aplicações web modernas em React, TypeScript e Tailwind CSS.
- Integrar APIs REST e GraphQL garantindo alta performance e segurança.
- Implementar testes automatizados com Jest, React Testing Library e Cypress.
- Aplicar práticas de Clean Code, arquitetura modular e design systems acessíveis (WCAG).
- Colaborar ativamente em equipe ágil (Scrum/Kanban) com Git, CI/CD e revisão de código.

Requisitos Obrigatórios:
- Experiência sólida com React, Hooks, TypeScript e gerenciamento de estado (Zustand ou Redux).
- Domínio de HTML5 semântico, CSS3 responsivo e Tailwind CSS.
- Experiência com consumo de APIs RESTful e tratamento de erros.
- Conhecimento em testes unitários e de integração.
- Git, GitHub e boas práticas de pull requests.

Diferenciais:
- Experiência com Next.js e Server Components.
- Conhecimento em micro-frontends e performance web (Core Web Vitals).`,
      resumeText: `LUCAS MENDES DA SILVA
São Paulo, SP | (11) 98765-4321 | lucas.mendes@email.com | linkedin.com/in/lucasmendes-dev

RESUMO PROFISSIONAL
Desenvolvedor Frontend com 3 anos de experiência na criação de interfaces web responsivas e dinâmicas utilizando JavaScript e React. Apaixonado por código limpo, experiência do usuário e otimização de interfaces. Experiência de trabalho em equipes ágeis utilizando metodologia Scrum.

COMPETÊNCIAS
JavaScript (ES6+), React.js, HTML5, CSS3, Sass, Git, GitHub, REST APIs, Scrum, Jira.

EXPERIÊNCIA PROFISSIONAL
Desenvolvedor Frontend Júnior / Pleno | WebTech Soluções (2022 - Presente)
- Construção de interfaces interativas para sistemas internos de clientes utilizando React e JavaScript.
- Integração de telas com serviços de backend via endpoints REST com Axios.
- Colaboração diária em cerimônias Scrum e controle de versionamento através do Git.
- Otimização do tempo de carregamento de páginas em 15% através de boas práticas de assets.

Desenvolvedor Web Estagiário | Agência Criativa (2021 - 2022)
- Manutenção de landing pages e portais corporativos em HTML, CSS e JavaScript.
- Ajustes de responsividade para dispositivos móveis e testes manuais de usabilidade.

FORMAÇÃO ACADÊMICA
Bacharelado em Ciência da Computação | Universidade Paulista (2019 - 2023)`
    }
  },
  dataAnalyst: {
    label: "Analista de Dados & BI Pleno (Analytics)",
    data: {
      jobTitle: "Analista de Dados e Inteligência de Mercado",
      company: "Logística Nacional S.A.",
      jobDescription: `Estamos contratando Analista de Dados e BI Pleno para transformar dados operacionais em decisões estratégicas.
Atribuições:
- Desenvolver dashboards gerenciais interativos utilizando Power BI e Tableau.
- Construir consultas SQL complexas para extração, limpeza e modelagem em BigQuery e PostgreSQL.
- Estruturar pipelines de dados com Python (Pandas, NumPy) e automatizar relatórios operacionais.
- Acompanhar KPIs de negócio, churn, CAC, LTV e apresentar insights para a diretoria.
- Garantir a integridade, governança e documentação dos dados analisados.

Requisitos:
- Sólida experiência em SQL (joins, window functions, CTEs) para análise de grandes volumes.
- Domínio avançado em Power BI (DAX, Power Query e modelagem relacional).
- Experiência com linguagem Python voltada para análise exploratória de dados.
- Habilidade de comunicação e visualização de dados (*data storytelling*).`,
      resumeText: `CAMILA DUARTE ROCHA
Belo Horizonte, MG | (31) 99123-4567 | camila.duarte@email.com | linkedin.com/in/camiladuarte-bi

RESUMO
Analista com 3 anos de experiência em rotinas analíticas, relatórios corporativos e inteligência comercial. Foco em traduzir números em planos de ação práticos para áreas comerciais e de operações.

HABILIDADES
Excel Avançado (VBA, Procv, Tabela Dinâmica), SQL básico, Power BI intermediário, Criação de Relatórios, Apresentações Executivas.

EXPERIÊNCIA
Analista de Informações Gerenciais | Distribuidora Central (2022 - Atual)
- Criação e manutenção de relatórios semanais de vendas e faturamento em Excel e Power BI.
- Realização de consultas em banco de dados relacional para conciliação financeira.
- Suporte aos gestores regionais com análise de indicadores operacionais.

Assistente de Dados | LogBrasil (2021 - 2022)
- Tabulação de dados operacionais e alimentação de planilhas de controle de frota.
- Criação de apresentações mensais em PowerPoint para a coordenação.

FORMAÇÃO
Graduação em Administração de Empresas | PUC Minas (2018 - 2022)`
    }
  }
};
