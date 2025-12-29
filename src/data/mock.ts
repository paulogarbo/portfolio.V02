// Types
export interface DeveloperInfo {
  name: string;
  role: string;
  tagline: string;
  heroPhrase: string;
  whatsappNumber: string;
  whatsappMessage: string;
  photo: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface AboutMe {
  title: string;
  description: string;
  photos: string[];
  values: Value[];
}

export interface SkillItem {
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Experience {
  id: number;
  type: string;
  title: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  technologies: string[];
  link: string | null;
  github: string | null;
  featured: boolean;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  cta: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  semester: string;
  expectedGraduation: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  verified: boolean;
  link: string | null;
}

// Data
export const developerInfo: DeveloperInfo = {
  name: "Desenvolvedor Full-Stack",
  role: "Desenvolvedor Full-Stack",
  tagline: "Construindo soluções robustas com AdonisJS",
  heroPhrase: "Transformando ideias em código de alta performance",
  whatsappNumber: "5512996378228",
  whatsappMessage:
    "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  photo: "/hero.jpg",
  email: "paulexgarbo@gmail.com",
  location: "Taubaté - SP",
  linkedin: "https://www.linkedin.com/in/paulo-alexgarba/",
  github: "https://github.com/paulogarbo",
};

export const aboutMe: AboutMe = {
  title: "Sobre Mim",
  description: `Sou um desenvolvedor full-stack apaixonado por criar soluções tecnológicas que fazem a diferença. Com 2 anos de experiência no mercado, tenho focado minha carreira no desenvolvimento backend, especialmente com AdonisJS.

Minha jornada começou como freelancer, onde aprendi a importância de entregar projetos de qualidade dentro do prazo. Hoje, trabalho em uma empresa há mais de 1 ano, onde continuo evoluindo minhas habilidades e contribuindo para projetos desafiadores.

Quando não estou codando, gosto de ler sobre novas tecnologias, jogar videogames e passar tempo com amigos. Acredito que um bom desenvolvedor deve ser curioso, resiliente e sempre disposto a aprender.`,
  photos: ["/img.jpg"],
  values: [
    { title: "Qualidade", description: "Código limpo e bem documentado" },
    { title: "Inovação", description: "Sempre buscando as melhores soluções" },
    { title: "Colaboração", description: "Trabalho em equipe é essencial" },
    { title: "Aprendizado", description: "Evolução constante" },
  ],
};

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      { name: "AdonisJS", level: 90, description: "Framework principal" },
      { name: "Node.js", level: 85, description: "Runtime JavaScript" },
      {
        name: "Express.js",
        level: 75,
        description: "Framework web minimalista",
      },
      { name: "REST API", level: 90, description: "Design e implementação" },
      { name: "GraphQL", level: 60, description: "Query language" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 75, description: "Biblioteca UI" },
      { name: "Next.js", level: 70, description: "Framework React" },
      { name: "TypeScript", level: 80, description: "JavaScript tipado" },
      { name: "TailwindCSS", level: 85, description: "Framework CSS" },
      { name: "HTML/CSS", level: 90, description: "Fundamentos web" },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "PostgreSQL", level: 85, description: "Banco relacional" },
      { name: "MySQL", level: 80, description: "Banco relacional" },
      { name: "MongoDB", level: 70, description: "Banco NoSQL" },
      { name: "Redis", level: 65, description: "Cache e sessões" },
    ],
  },
  {
    category: "DevOps & Ferramentas",
    items: [
      { name: "Git", level: 90, description: "Controle de versão" },
      { name: "Docker", level: 70, description: "Containerização" },
      { name: "Linux", level: 75, description: "Ambiente de desenvolvimento" },
      { name: "AWS", level: 60, description: "Cloud computing" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    type: "CLT",
    title: "Desenvolvedor Full-Stack Junior",
    company: "ClickSoft",
    period: "Jul 2024 - Dez 2025",
    duration: "1 ano+",
    description:
      "Desenvolvimento de aplicações web e mobile utilizando tecnologias modernas, contribuindo para a evolução de produtos digitais da empresa.",
    responsibilities: [
      "Desenvolvimento de dashboards administrativos com React e Next.js",
      "Criação de APIs RESTful robustas com AdonisJS",
      "Implementação de interfaces responsivas com TailwindCSS",
      "Colaboração em projetos ágeis utilizando metodologias Scrum",
      "Integração de sistemas e otimização de performance",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "TailwindCSS",
    ],
    isCurrent: false,
  },
  {
    id: 2,
    type: "CLT",
    title: "Desenvolvedor Full-Stack",
    company: "X Software House",
    period: "Mai 2024 - Jul 2024",
    duration: "3 meses",
    description:
      "Desenvolvimento de soluções web personalizadas para diversos clientes, participando de todo o ciclo de desenvolvimento.",
    responsibilities: [
      "Desenvolvimento de aplicações web com React e Node.js",
      "Integração de APIs de terceiros e serviços externos",
      "Otimização de performance e responsividade",
      "Participação ativa em todo ciclo de desenvolvimento",
    ],
    technologies: ["React", "Node.js", "AdonisJS", "JavaScript", "PostgreSQL"],
    isCurrent: false,
  },
  {
    id: 3,
    type: "Freelancer",
    title: "Desenvolvedor Full-Stack",
    company: "Autônomo",
    period: "2023 - Mai 2024",
    duration: "1 ano+",
    description:
      "Desenvolvimento de projetos web para diversos clientes, desde landing pages até sistemas completos, com gerenciamento próprio de prazos e entregas.",
    responsibilities: [
      "Criação de websites responsivos e modernos",
      "Desenvolvimento de sistemas web completos",
      "Gerenciamento de projetos, prazos e entregas",
      "Comunicação direta com clientes e levantamento de requisitos",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    isCurrent: false,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão Empresarial",
    description:
      "Plataforma completa para gestão de pequenas e médias empresas com controle de estoque, vendas e financeiro.",
    image: null,
    technologies: ["AdonisJS", "React", "PostgreSQL", "Redis"],
    link: null,
    github: null,
    featured: true,
  },
  {
    id: 2,
    title: "API de E-commerce",
    description:
      "Backend completo para e-commerce com autenticação, carrinho de compras e integração com gateway de pagamento.",
    image: null,
    technologies: ["Node.js", "Express", "MongoDB", "Stripe"],
    link: null,
    github: null,
    featured: true,
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description:
      "Painel administrativo para visualização de métricas e KPIs em tempo real.",
    image: null,
    technologies: ["Next.js", "TypeScript", "Chart.js", "TailwindCSS"],
    link: null,
    github: null,
    featured: false,
  },
];

export const contactInfo: ContactInfo = {
  title: "Vamos Conversar?",
  subtitle:
    "Estou disponível para novos projetos e oportunidades. Entre em contato!",
  cta: "Fale comigo no WhatsApp",
};

export const education: Education = {
  degree: "Bacharelado em Ciência da Computação",
  institution: "Faculdade Anhanguera",
  period: "2021 - 2026 (Em andamento)",
  semester: "7º Semestre",
  expectedGraduation: "Dezembro 2026",
  highlights: [
    "Foco em Desenvolvimento de Software",
    "Algoritmos e Estruturas de Dados",
    "Engenharia de Software",
    "Banco de Dados e Sistemas Distribuídos",
  ],
};

export const certifications: Certification[] = [
  {
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "AI-900",
    description:
      "Certificação fundamental em conceitos de Inteligência Artificial e serviços de IA do Azure.",
    skills: [
      "Azure AI",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
    ],
    verified: true,
    link: null,
  },
];
