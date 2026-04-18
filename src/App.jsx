import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Brain, TrendingUp, Award, Briefcase, GraduationCap, Sparkles, Zap, Cpu, Cloud, BarChart3, Terminal, Download, BookOpen, Layers } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Brain className="text-purple-400" size={28} />,
      title: 'ML & AI',
      color: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/30',
      skills: [
        'PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras',
        'CNNs', 'RNNs', 'LSTMs', 'XGBoost', 'AdaBoost', 'Random Forest',
        'Transformers (BERT, T5)', 'LangChain', 'LangGraph',
        'Generative AI', 'LLMs', 'VLMs', 'RAG',
        'Prompt Engineering', 'Pinecone', 'FAISS',
        'Statistical Modeling', 'Predictive Modeling'
      ]
    },
    {
      icon: <BarChart3 className="text-green-400" size={28} />,
      title: 'Data & Analytics',
      color: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-500/30',
      skills: [
        'Pandas', 'NumPy', 'PySpark',
        'Hypothesis Testing', 'A/B Testing', 'Experimental Design',
        'ANOVA', 'PCA', 'Causal Inference',
        'ROC-AUC', 'SHAP', 'Regression', 'Classification', 'Clustering',
        'Tableau', 'Matplotlib', 'Seaborn', 'Data Visualization'
      ]
    },
    {
      icon: <Terminal className="text-blue-400" size={28} />,
      title: 'Languages & Frameworks',
      color: 'from-blue-500/20 to-indigo-500/20',
      border: 'border-blue-500/30',
      skills: [
        'Python', 'R', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'Matlab',
        'React.js', 'Node.js', 'Express.js', 'Next.js',
        'MongoDB', 'REST APIs'
      ]
    },
    {
      icon: <Cloud className="text-orange-400" size={28} />,
      title: 'Tools & Platforms',
      color: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/30',
      skills: [
        'AWS (EC2, S3)', 'Databricks', 'HuggingFace',
        'Streamlit', 'Git', 'Unix/Linux',
        'OpenAI', 'Anthropic Claude',
        'Apache Spark', 'Hadoop', 'Postman', 'VS Code'
      ]
    },
    {
      icon: <Code className="text-cyan-400" size={28} />,
      title: 'Full Stack Development',
      color: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/30',
      skills: [
        'React.js', 'Node.js', 'Next.js', 'Express.js',
        'TypeScript', 'MongoDB', 'REST APIs',
        'JWT Auth', 'Redis', 'AWS EC2/S3'
      ]
    },
    {
      icon: <Cpu className="text-pink-400" size={28} />,
      title: 'CS Fundamentals',
      color: 'from-pink-500/20 to-rose-500/20',
      border: 'border-pink-500/30',
      skills: [
        'Data Structures', 'Algorithms', 'OOP',
        'Operating Systems', 'DBMS', 'Computer Vision', 'NLP'
      ]
    }
  ];
  const experiences = [
    {
      role: 'ML Engineer Intern',
      company: 'Bajaj Capitals',
      location: 'Gurugram, India',
      period: 'Dec 2024 – Jun 2025',
      color: 'purple',
      highlights: [
        'Architected an end-to-end financial analytics ML pipeline ingesting 50K+ transaction records daily, applying feature engineering and unsupervised anomaly detection to lift structured data quality from 72% to 94%, directly reducing downstream model errors.',
        'Built a regression-based retirement forecasting model incorporating 20+ behavioral and financial features, reducing RMSE by 18% over baseline and improving long-range prediction stability for customer portfolio planning.',
        'Implemented k-fold cross-validation, residual error diagnostics, and SHAP-based feature attribution to harden model generalization, cutting overfitting gap from 11% to 4% on held-out validation sets.',
        'Automated data ingestion and model retraining pipeline using Python and SQL, reducing manual intervention by 60% and enabling weekly model refresh cycles with zero downtime.'
      ]
    },
    {
      role: 'Data Science Intern',
      company: 'Truminds Software Systems',
      location: 'Gurugram, India',
      period: 'Mar 2024 – Jul 2024',
      color: 'blue',
      highlights: [
        'Engineered 15+ geospatial features from 5K+ location records using spatial joins and distance-based aggregations, boosting downstream customer targeting model precision by 30% (0.61 to 0.79 precision@k), directly improving customer experience optimization.',
        'Conducted comprehensive EDA including outlier detection, missing-value imputation, and geo-cluster analysis, surfacing 3 high-value customer micro-segments previously invisible in raw data, adopted directly in GTM strategy.',
        'Integrated Google Maps API with a Flask backend to enrich customer profiles with real-time POI and footfall data, improving address-level geocoding accuracy by 20% and reducing lookup latency by 35%'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'ITMTB Technologies',
      location: 'Pune, India',
      period: 'Aug 2022 – Sep 2022',
      color: 'cyan',
      highlights: [
        'Delivered a full-stack healthcare analytics platform (React, Node.js, Express, SQL, TypeScript) with JWT auth and role-based access control, deployed on AWS EC2/S3 and serving 500+ concurrent users.',
        'Designed and optimized RESTful APIs with indexed SQL queries and Redis-layer caching, achieving a 40% reduction in average API response time (320ms to 192ms) under peak load.',
        
      ]
    }
  ];

  const projects = [
    {
      title: 'StudyMate AI — RAG-Based Student Productivity Agent',
      tech: 'Python, Streamlit, FAISS, Groq API, LLMs',
      icon: <BookOpen className="text-emerald-400" size={32} />,
      gradient: 'from-emerald-500 to-teal-500',
      description: 'RAG-based AI agent for document Q&A, summarization, and personalized study planning using LLMs',
      stats: [
        { label: 'Relevance ↑', value: '30%' },
        { label: 'Hallucinations ↓', value: '25%' },
        { label: 'Queries', value: '50+' }
      ],
      link: 'https://studymate-ai-agent.streamlit.app/'
    },
    {
      title: 'MoLoRAG — Multi-Modal Logic-Aware RAG System',
      tech: 'VLMs, PyTorch, HuggingFace, BERT, T5',
      icon: <Layers className="text-violet-400" size={32} />,
      gradient: 'from-violet-500 to-purple-500',
      description: 'Multi-modal RAG pipeline combining vision and text inputs for reasoning-aware generation',
      stats: [
        { label: 'MRR ↑', value: '12%' },
        { label: 'Recall@5 ↑', value: '18%' },
        { label: 'F1 vs GPT-3.5', value: '+8pts' }
      ],
      link: 'https://github.com/dhankarsimran/molorag'
    },
    {
      title: 'Deepfake Detection System',
      tech: 'Python, PyTorch, CNN, OpenCV, Streamlit',
      icon: <Brain className="text-pink-400" size={32} />,
      gradient: 'from-pink-500 to-rose-500',
      description: 'End-to-end deep learning pipeline for detecting deepfake content in images and videos',
      stats: [
        { label: 'Accuracy', value: '90%' },
        { label: 'Data Processed', value: '10K+' },
        { label: 'Models', value: 'CNN' }
      ],
      link: 'https://deepfake-detector-real.streamlit.app'
    },
    {
      title: 'MindTunes - Neural Activity Dashboard',
      tech: 'Python, PyTorch, MNE, React, Three.js',
      icon: <Cpu className="text-cyan-400" size={32} />,
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Interactive 3D brain visualization platform with real-time EEG data analysis',
      stats: [
        { label: 'FPS', value: '30' },
        { label: 'Brain Regions', value: '68' },
        { label: 'Latency ↓', value: '40%' }
      ],
      link: 'https://mindtunes6.netlify.app'
    },
    {
      title: 'Customer Churn Prediction',
      tech: 'Python, SQL, Scikit-learn, Jupyter',
      icon: <TrendingUp className="text-purple-400" size={32} />,
      gradient: 'from-purple-500 to-indigo-500',
      description: 'ML-driven churn prediction system for telecom industry analytics',
      stats: [
        { label: 'Accuracy', value: '89%' },
        { label: 'Records', value: '5M+' },
        { label: 'Model', value: 'LogR' }
      ],
      link: 'https://github.com/dhankarsimran/Bank_Customer_Churn_Model'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <>
        {/* Mobile Overlay — MUST be outside nav */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            scrolled
              ? 'bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-purple-500/10'
              : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* Logo */}
            <button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection('about');
                setMenuOpen(false);
              }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              SD
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item.toLowerCase());
                  }}
                  className={`hover:text-purple-400 transition-all duration-300 relative ${
                    activeSection === item.toLowerCase()
                      ? 'text-purple-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Hamburger Button */}
            <button
              className="md:hidden text-purple-400 z-50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-purple-400"></span>
                <span className="block w-6 h-0.5 bg-purple-400"></span>
                <span className="block w-6 h-0.5 bg-purple-400"></span>
              </div>
            </button>
          </div>

          {/* Mobile Slide Menu */}
          <div
            className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-slate-950/95 backdrop-blur-lg transform transition-transform duration-500 z-50 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col gap-8 px-8 pt-24">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item.toLowerCase());
                    setMenuOpen(false);
                  }}
                  className={`text-left text-lg transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'text-purple-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </>


      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative animate-float">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 shadow-2xl shadow-purple-500/50 animate-glow">
                <img 
                  src="https://dhankarsimran.github.io/portfolio/profile-photo.JPG" 
                  alt="Simran Dhankar" 
                  className="w-full h-full rounded-full object-cover bg-slate-800"
                />
              </div>
            </div>
            
            <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">
              Simran Dhankar
            </h1>
            {/* <div className="overflow-hidden mb-4">
              <p className="text-3xl text-purple-300 mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
                Data Scientist & Software Engineer
              </p>
            </div> */}
            <div className="overflow-hidden mb-8">
              <p className="text-gray-400 max-w-2xl text-lg animate-slide-up" style={{animationDelay: '0.4s'}}>
                M.S. Data Science @ University of Washington | Building AI-powered systems — from raw data to production-ready applications.
              </p>
            </div>
            
            <div
              className="flex gap-4 mb-8 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              {/* Get In Touch — hidden on mobile */}
              <a
                href="mailto:simrandhankar3@gmail.com"
                className="group hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                Get In Touch
              </a>

              {/* Resume */}
              <a
                href="https://dhankarsimran.github.io/portfolio/Resume_Simran_Dhankar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
              >
                <Download size={20} />
                Resume
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/dhankarsimran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-slate-500/50"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>


            <div className="flex gap-8 text-gray-400 animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <MapPin size={20} />
                <span>Seattle, WA</span>
              </div>
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Phone size={20} />
                <span>+1 (206) 391-7320</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" data-animate className={`py-20 px-6 transition-all duration-1000 ${visibleSections['education'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <GraduationCap className="text-purple-400" size={40} />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300 mb-2">M.S. in Data Science</h3>
                    <p className="text-gray-300 text-lg">University of Washington</p>
                  </div>
                  <span className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-purple-200 px-4 py-2 rounded-full text-sm font-semibold border border-purple-400/30">GPA: 3.9/4.0</span>
                </div>
                <p className="text-gray-400 mb-4">Sep 2025 – Expected Jun 2027</p>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Statistics', 'Probability', 'Linear Algebra', 'Data Visualization', 'Big Data'].map(course => (
                    <span key={course} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300 mb-2">B.Tech in Computer Science</h3>
                    <p className="text-gray-300 text-lg">GGSIP University, India</p>
                  </div>
                  <span className="bg-gradient-to-r from-blue-600/40 to-cyan-600/40 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold border border-blue-400/30">GPA: 3.8/4.0</span>
                </div>
                <p className="text-gray-400 mb-4">Dec 2020 – Jun 2024</p>
                <div className="flex flex-wrap gap-2">
                  {['Software Engineering', 'Data Structures', 'Algorithms', 'Database Systems', 'Operating Systems', 'Object-oriented Programming'].map(course => (
                    <span key={course} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" data-animate className={`py-20 px-6 transition-all duration-1000 delay-200 ${visibleSections['experience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Briefcase className="text-purple-400" size={40} />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`group bg-gradient-to-br ${exp.color === 'purple' ? 'from-purple-900/40' : exp.color === 'blue' ? 'from-blue-900/40' : 'from-cyan-900/40'} to-slate-900/40 backdrop-blur-sm border ${exp.color === 'purple' ? 'border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/20' : exp.color === 'blue' ? 'border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/20' : 'border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/20'} rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}>
                <div className="flex flex-col mb-4">
                  <h3 className={`text-2xl font-bold mb-2 ${exp.color === 'purple' ? 'text-purple-300' : exp.color === 'blue' ? 'text-blue-300' : 'text-cyan-300'}`}>{exp.role}</h3>
                  <p className="text-xl text-gray-200">{exp.company}</p>
                  <p className="text-gray-400">{exp.location}</p>
                  <span className={`mt-2 inline-block bg-gradient-to-r ${exp.color === 'purple' ? 'from-purple-600/40 to-pink-600/40 text-purple-200 border-purple-400/30' : exp.color === 'blue' ? 'from-blue-600/40 to-cyan-600/40 text-blue-200 border-blue-400/30' : 'from-cyan-600/40 to-teal-600/40 text-cyan-200 border-cyan-400/30'} px-4 py-2 rounded-full text-sm font-semibold border w-fit`}>{exp.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <Zap className={`${exp.color === 'purple' ? 'text-purple-400' : exp.color === 'blue' ? 'text-blue-400' : 'text-cyan-400'} flex-shrink-0 mt-1`} size={18} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-animate className={`py-20 px-6 transition-all duration-1000 delay-300 ${visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Code className="text-purple-400" size={40} />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
          </div>
          
          {/* Desktop: Horizontal Single Line Scroll */}
          <div className="hidden md:block overflow-x-auto pb-6 scrollbar-thin">
            <div className="flex gap-6 w-max pb-2">
              {projects.map((project, idx) => (
                <a 
                  key={idx} 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 w-96 flex-shrink-0 cursor-pointer" 
                  style={{animationDelay: `${idx * 0.2}s`}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="p-8 relative z-10">
                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      {project.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 mb-4 font-mono">{project.tech}</p>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    <div className="grid grid-cols-3 gap-3">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-3 text-center group-hover:border-purple-500/40 transition-colors duration-300">
                          <div className="text-2xl font-bold text-purple-300">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm font-semibold">View Project</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden flex flex-col gap-8">
            {projects.map((project, idx) => (
              <a 
                key={idx} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 cursor-pointer" 
                style={{animationDelay: `${idx * 0.2}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="p-8 relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {project.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4 font-mono">{project.tech}</p>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-3 text-center group-hover:border-purple-500/40 transition-colors duration-300">
                        <div className="text-2xl font-bold text-purple-300">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-semibold">View Project</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Completely Redesigned */}
      <section id="skills" data-animate className={`py-20 px-6 transition-all duration-1000 delay-400 ${visibleSections['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Database className="text-purple-400" size={40} />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className={`group relative bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.border} rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`} style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="group/skill bg-slate-900/60 border border-white/20 rounded-full px-4 py-2 hover:bg-slate-800/80 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" data-animate className={`py-20 px-6 transition-all duration-1000 delay-500 ${visibleSections['achievements'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Award className="text-purple-400" size={40} />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8 hover:border-yellow-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Sparkles className="text-yellow-400 mb-4 group-hover:animate-spin" size={40} />
                <h3 className="text-2xl font-bold text-yellow-300 mb-3">2nd Place - Databricks Hackathon</h3>
                <p className="text-gray-300">Developed ML solution for flight connection risk prediction (Nov 2025)</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <TrendingUp className="text-blue-400 mb-4 group-hover:animate-bounce" size={40} />
                <h3 className="text-2xl font-bold text-blue-300 mb-3">Microsoft Learn Student Ambassador</h3>
                <p className="text-gray-300">Conducted Git/GitHub workshops for 60+ attendees (Beta Level)</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Briefcase className="text-purple-400 mb-4 group-hover:animate-pulse" size={40} />
                <h3 className="text-2xl font-bold text-purple-300 mb-3">Vice President - Enactus ADGITM</h3>
                <p className="text-gray-300">Led 40+ member team delivering community-driven projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className={`py-20 px-6 transition-all duration-1000 delay-600 ${visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-gray-300 mb-12 text-xl">
            I'm always interested in hearing about new opportunities, collaborations, or just chatting about data science and technology!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:simrandhankar3@gmail.com" className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-2xl transition-all transform hover:scale-110 text-lg shadow-lg hover:shadow-purple-500/50">
              <Mail size={24} className="group-hover:animate-bounce" />
              simrandhankar3@gmail.com
            </a>
            <a 
              href="https://dhankarsimran.github.io/portfolio/Resume_Simran_Dhankar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-10 py-5 rounded-2xl transition-all transform hover:scale-110 text-lg shadow-lg hover:shadow-green-500/50"
            >
              <Download size={24} className="group-hover:animate-bounce" />
              Download Resume
            </a>
            <a href="https://linkedin.com/in/simran-dhankar" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-10 py-5 rounded-2xl transition-all transform hover:scale-110 text-lg shadow-lg hover:shadow-blue-500/50">
              <Linkedin size={24} className="group-hover:animate-bounce" />
              LinkedIn
            </a>
            <a href="https://github.com/dhankarsimran" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-slate-700 hover:bg-slate-600 px-10 py-5 rounded-2xl transition-all transform hover:scale-110 text-lg shadow-lg hover:shadow-slate-500/50">
              <Github size={24} className="group-hover:animate-bounce" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2026 Simran Dhankar. Crafted with passion and code.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.5); }
          50% { box-shadow: 0 0 60px rgba(168, 85, 247, 0.8), 0 0 80px rgba(236, 72, 153, 0.5); }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: rgba(168, 85, 247, 0.5) rgba(30, 41, 59, 0.5);
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </div>
  );
}
