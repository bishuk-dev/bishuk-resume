export const profile = {
  name: 'Bishu Kumar',
  handle: 'bishuk-dev',
  role: 'B.Tech CSE (AI & ML) student',
  focus: 'Backend systems · Applied AI · Data engineering',
  location: 'Dehradun, India',
  education: {
    school: "Tula's Institute, Dehradun",
    degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
    period: '2025 — 2029',
  },
  summary:
    'Computer Science student focused on building backend-heavy systems, data pipelines, and practical AI tooling. I like projects where correctness, architecture, and performance matter more than flashy demos.',
  links: {
    github: 'https://github.com/bishuk-dev',
    linkedin: 'https://linkedin.com/in/bishuk-dev',
    email: 'mailto:bishuk.dev@gmail.com',
  },
};

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript'] },
  { group: 'Backend & APIs', items: ['FastAPI', 'Node.js', 'Express', 'REST APIs', 'SSE'] },
  { group: 'Data & Storage', items: ['MongoDB', 'PostgreSQL', 'DuckDB', 'Parquet', 'Neo4j'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Astro', 'Tailwind CSS'] },
  { group: 'Engineering', items: ['Git', 'Docker', 'Linux', 'Testing', 'Data modeling'] },
  { group: 'Concepts', items: ['AST parsing', 'Graphs / DAGs', 'Topological sort', 'Feature engineering', 'LLM APIs'] },
];

export const projects = [
  {
    index: '01',
    title: 'Bitcoin Intelligence Platform',
    eyebrow: 'Offline investigative data platform',
    description:
      'A correctness-first platform for ingesting Bitcoin transaction and network-observation data into canonical Parquet, querying it with DuckDB, deriving a factual Neo4j graph, and building deterministic feature datasets for later analysis.',
    highlights: [
      'Canonical ingestion with validation, deduplication, provenance, quarantine, and atomic publication.',
      'Rebuildable analytics and graph layers designed around explicit data contracts rather than hidden state.',
      'Versioned feature engineering with cutoff-aware semantics, lineage, validation, and reproducible benchmarks.',
    ],
    stack: ['Python 3.13', 'FastAPI', 'Parquet', 'DuckDB', 'Neo4j', 'React', 'Docker'],
    href: 'https://github.com/bishuk-dev/bitcoin-intel',
    status: 'In active development',
  },
  {
    index: '02',
    title: 'MockMate',
    eyebrow: 'Schema-aware mock data generator',
    description:
      'An AI-assisted tool that parses Mongoose schemas as ASTs, discovers cross-collection dependencies, generates semantically realistic Faker rules, and materializes referentially valid mock datasets.',
    highlights: [
      'Uses Acorn AST traversal instead of executing untrusted schema files.',
      "Builds a dependency graph and uses Kahn's algorithm to derive a safe generation order.",
      'Streams backend progress to a VS Code-inspired React interface using Server-Sent Events.',
    ],
    stack: ['Node.js', 'Express', 'React', 'Vite', 'MongoDB', 'Acorn', 'Faker.js', 'OpenRouter'],
    href: 'https://github.com/bishuk-dev/MockMate',
    status: 'Public project',
  },
];

export const now = [
  'Deepening backend and systems fundamentals',
  'Practicing data structures and algorithms consistently',
  'Exploring LLM engineering through practical projects',
];
