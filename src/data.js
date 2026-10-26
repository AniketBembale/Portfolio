// Central content for the portfolio — sourced from resume, CloudThat profile, and GitHub.

export const profile = {
  name: "Aniket Bembale",
  role: "AI Engineer",
  tagline: "Building & deploying GenAI and ML systems that ship.",
  summary:
    "AI Engineer with 2.8+ years of experience building and deploying GenAI and ML solutions. Proficient in Python, AWS, RAG, LLMs, Multi-Agent Systems (A2A, MCP) and MLOps, with strong expertise in data pipelines, model development, and scalable system design. Experienced in CI/CD, performance optimization, and rapid POC development.",
  location: "Bangalore, India",
  phone: "+91-8329608916",
  email: "aniketbembale@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/aniket-bembale",
    github: "https://github.com/AniketBembale",
    cloudthat: "https://www.cloudthat.com/resources/author/aniket-bembale/",
  },
  stats: [
    { value: "2.8+", label: "Years in AI/ML" },
    { value: "4", label: "Research Publications" },
    { value: "3", label: "AWS Certifications" },
    { value: "40", label: "GitHub Repositories" },
  ],
};

export const skills = [
  {
    group: "AI / ML & GenAI",
    items: [
      "Multi-Agent Systems",
      "Generative AI",
      "Advanced RAG",
      "LLM Fine-Tuning (LoRA, QLoRA)",
      "Deep Learning",
      "NLP",
      "Machine Learning",
      "Prompt Engineering",
      "Conversational AI",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS Bedrock",
      "AWS Lambda",
      "Amazon EC2 / S3 / ECR",
      "DynamoDB",
      "API Gateway",
      "Docker",
      "CI/CD",
      "MLflow",
      "DVC",
    ],
  },
  {
    group: "Frameworks & Tools",
    items: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "CrewAI",
      "AutoGen",
      "Strands Agents",
      "FastAPI",
      "Flask",
      "Streamlit",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    group: "Databases & Vector Stores",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "FAISS",
      "ChromaDB",
      "Qdrant",
      "OpenSearch",
      "S3 Vectors",
    ],
  },
  {
    group: "Languages",
    items: ["Python", "SQL", "C", "C++", "Java"],
  },
  {
    group: "Quantum & Research",
    items: ["Qiskit", "PennyLane", "QNN", "QSVR", "VQC", "Quantum Optimization"],
  },
];

export const experience = [
  {
    role: "Senior Research Associate (AI/Data)",
    company: "CloudThat",
    location: "Bangalore, India",
    period: "2026 — Present",
    points: [
      "Developed a GenAI conversational analytics platform using AWS Bedrock, Lambda, and DynamoDB — supporting intelligent tool routing, parallel API calls, and multi-turn analytics across 400+ cinema locations.",
      "Built an AI customer support chatbot on AWS using the Strands Agent framework orchestrated by Amazon Nova Pro (Bedrock) with a hybrid RAG + Text-to-SQL architecture for product/FAQ and live order/account queries.",
      "Reduced LLM token usage by 40% and per-query operational cost through optimized tool-selection and prompt design on Amazon Bedrock.",
    ],
  },
  {
    role: "Project Associate (AI/ML Engineer)",
    company: "C-DAC CINE, IIT Guwahati",
    location: "Guwahati, India",
    period: "Feb 2024 — Present",
    points: [
      "Developed a GenAI-based predictive policing system using RAG with the Llama model, improving insight accuracy and reducing manual analysis effort by 40–50% through automated charge-sheet generation.",
      "Engineered a real-time evacuation optimization pipeline combining XGBoost-based dynamic edge weighting with Dijkstra's algorithm.",
      "Built a hybrid quantum–classical neural network (HQNN) on 6 flood features, achieving performance comparable to classical models using quantum-enhanced gradient updates for real-time evacuation routing.",
      "Devised a Quantum Computing approach for Graph Optimization focused on the Shortest Path Problem.",
      "Collaborated on an R&D project under the National Quantum Mission (MeitY), focusing on Quantum Machine Learning algorithms for disaster escape routing.",
    ],
  },
];

export const projects = [
  {
    title: "Conversational Analytics Chatbot",
    blurb:
      "Natural-language querying of customer satisfaction metrics (NPS/CSAT) across cinema locations via a multi-agent architecture.",
    highlights: [
      "Multi-agent orchestration on Amazon Bedrock (Qwen3-32B) with agents for routing, follow-up resolution, date parsing, and dynamic calculations.",
      "Serverless infra on AWS Lambda + WebSocket API Gateway with DynamoDB session management.",
      "Parallel processing and query optimization cut response time from hours to seconds.",
    ],
    tech: ["Amazon Bedrock", "AWS Lambda", "API Gateway", "DynamoDB", "Python"],
    category: "GenAI · Agents",
  },
  {
    title: "AI for Predictive Law Enforcement",
    blurb:
      "An AI/ML legal assistant helping officers identify applicable sections under BNS 2023, BSA 2023, IPC 1860 & CrPC 1973, and draft preliminary sheets.",
    highlights: [
      "End-to-end RAG pipeline across four Indian legal codes with hierarchical parent–child chunking.",
      "Custom regex PDF ingestion (PyMuPDF) handling gazette headers and footnote markers.",
      "LaBSE multilingual embeddings for bilingual Hindi–English FIR queries on on-prem Qdrant.",
    ],
    tech: ["LangChain", "LLaMA", "LaBSE", "Qdrant", "PyMuPDF", "FastAPI", "Docker", "RAGAS"],
    category: "GenAI · RAG",
  },
  {
    title: "Quantum Routing for Disaster Management",
    blurb:
      "A disaster-management system combining Quantum Machine Learning and optimization for flood prediction and evacuation planning.",
    highlights: [
      "XGBoost model dynamically predicts edge weights feeding Dijkstra's algorithm for real-time path optimization.",
      "Hybrid Quantum Neural Network updates safe/shortest routes in real time from flood data.",
      "QNN, QSVR, and VQC models for graph optimization under evolving flood conditions.",
    ],
    tech: ["Qiskit", "PennyLane", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost"],
    category: "Quantum ML",
  },
  {
    title: "Intelligent Document-to-JSON Parser",
    blurb:
      "LLM pipeline converting unstructured documents into schema-compliant structured JSON, cutting manual processing effort.",
    highlights: [
      "GPT-4 + LangChain pipeline with prompt templates enforcing schema-compliant output.",
      "TrOCR for text extraction from scanned/handwritten documents before LLM processing.",
      "FAISS semantic retrieval layer for targeted JSON field population; FastAPI + Docker deployment.",
    ],
    tech: ["GPT-4", "LangChain", "TrOCR", "FAISS", "FastAPI", "Docker"],
    category: "GenAI · RAG",
  },
  {
    title: "AI-Powered Budget Travel Planner",
    blurb:
      "An agentic AI system for end-to-end itinerary validation and budget booking.",
    highlights: [
      "SerpAPI integration for live flights and hotels.",
      "LangGraph reasoning orchestrated with Google Gemini.",
      "Streamlit-based interactive frontend.",
    ],
    tech: ["LangGraph", "Google Gemini", "SerpAPI", "Streamlit", "Python"],
    category: "GenAI · Agents",
  },
];

export const publications = [
  {
    title:
      "Quantum Computing for Graph Optimization: An Approach to the Shortest Path Problem",
    authors:
      "Aniket Bembale, Nagendra Singh, Vinayaka Poorma, Jitesh Choudhary",
    venue: "ETTIS 2025 Conference",
    award: "Best Paper Award",
    year: "2025",
  },
  {
    title:
      "A Topical Review of Quantum and Classical Machine Learning Approaches to Disaster Escape Routing Problems",
    authors: "A. Vinil, P. Iyer, J. Chetan, A. Bembale, N. Singh",
    venue: "IEEE Access",
    year: "2025",
  },
  {
    title:
      "FloodGraph: A Data Re-Uploading Enabled QSVR Framework for Flood Parameter Prediction and Dynamic Graph Updation",
    authors:
      "Vinayaka Poorma, Nagendra Singh, Aniket Bembale, Jitesh Choudhary",
    venue: "GCON 2026 (Accepted)",
    award: "Best Paper Award",
    year: "2026",
  },
];

export const certifications = [
  {
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    date: "Aug 2026",
    badge: "/badges/aws-ml-associate.svg",
  },
  {
    title: "AWS Agentic AI Demonstrated",
    issuer: "Amazon Web Services",
    date: "Aug 2026",
    badge: "/badges/aws-agentic-ai.svg",
  },
  {
    title: "AWS Serverless Demonstrated",
    issuer: "Amazon Web Services",
    date: "Aug 2026",
    badge: "/badges/aws-serverless.svg",
  },
];

export const education = [
  {
    school: "Center for Development of Advanced Computing (C-DAC)",
    degree: "Post-Graduation Diploma, Artificial Intelligence",
    location: "Noida, Uttar Pradesh",
    period: "2022 — 2023",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "Master of Science",
    location: "Pune, Maharashtra",
    period: "2020 — 2022",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "Bachelor of Science",
    location: "Pune, Maharashtra",
    period: "2017 — 2020",
  },
];

// Curated from public GitHub (github.com/AniketBembale) — selected representative repos.
export const repos = [
  {
    name: "LLM_From_Scratch",
    desc: "Complete transformer-based Large Language Model built from scratch in Python, covering every fundamental component.",
    lang: "Python",
    url: "https://github.com/AniketBembale/LLM_From_Scratch",
  },
  {
    name: "Agentic-AI",
    desc: "LangChain tutorials and agentic-AI experiments.",
    lang: "Jupyter Notebook",
    url: "https://github.com/AniketBembale/Agentic-AI",
  },
  {
    name: "Travel_Planner",
    desc: "Agentic AI travel planner for itinerary validation and budget booking.",
    lang: "Python",
    url: "https://github.com/AniketBembale/Travel_Planner",
  },
  {
    name: "NeoStat_RAG_Chatbot",
    desc: "Retrieval-Augmented Generation chatbot implementation.",
    lang: "Python",
    url: "https://github.com/AniketBembale/NeoStat_RAG_Chatbot",
  },
  {
    name: "Vehicle_Insurance_Project",
    desc: "End-to-end vehicle insurance ML project with full pipeline.",
    lang: "Python",
    url: "https://github.com/AniketBembale/Vehicle_Insurance_Project",
  },
  {
    name: "MLOPS_DVC_Pipeline",
    desc: "End-to-end MLOps DVC pipeline with Amazon S3 integration.",
    lang: "Jupyter Notebook",
    url: "https://github.com/AniketBembale/MLOPS_DVC_Pipeline",
  },
  {
    name: "Building_Neural_Network_From_Scratch",
    desc: "Artificial Neural Network for MNIST built from scratch using NumPy.",
    lang: "Python",
    url: "https://github.com/AniketBembale/Building_Neural_Network_From_Scratch",
  },
  {
    name: "CNN_From_Scratch",
    desc: "A CNN model developed from scratch in plain Python.",
    lang: "Python",
    url: "https://github.com/AniketBembale/CNN_From_Scratch",
  },
  {
    name: "Face_Emotion_Recognition",
    desc: "Facial emotion recognition using deep learning.",
    lang: "Jupyter Notebook",
    url: "https://github.com/AniketBembale/Face_Emotion_Recognition",
  },
  {
    name: "Chat_With_PDF",
    desc: "Chat over PDF documents using an LLM + retrieval.",
    lang: "Python",
    url: "https://github.com/AniketBembale/Chat_With_PDF",
  },
  {
    name: "AI-Disease-Diagnosis",
    desc: "AI-driven disease diagnosis experiments.",
    lang: "Jupyter Notebook",
    url: "https://github.com/AniketBembale/AI-Disease-Diagnosis",
  },
  {
    name: "Gradient_Descent_Algorithm_From_Scratch",
    desc: "Gradient Descent implemented from scratch on the Boston Housing dataset.",
    lang: "Python",
    url: "https://github.com/AniketBembale/Gradient_Descent_Algorithm_From_Scratch",
  },
];
