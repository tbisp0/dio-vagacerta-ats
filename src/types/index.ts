export interface JobAnalysisInput {
  jobTitle: string;
  company: string;
  jobDescription: string;
  resumeText: string;
}

export interface MatchScoreDetails {
  overall: number; // 0 - 100
  hardSkillsScore: number;
  contextScore: number;
  structureScore: number;
  statusLabel: 'Excelente match' | 'Bom match' | 'Match moderado' | 'Baixo match';
  statusColor: 'emerald' | 'blue' | 'amber' | 'rose';
}

export interface AnalysisResult {
  id: string;
  createdAt: string;
  input: JobAnalysisInput;
  score: MatchScoreDetails;
  summary: string;
  strengths: string[];
  gaps: string[];
  foundKeywords: string[];
  missingKeywords: string[];
  improvementSuggestions: string[];
  optimizedResumeText: string;
}

export interface ATSChecklistItem {
  id: string;
  title: string;
  passed: boolean;
  explanation: string;
}
