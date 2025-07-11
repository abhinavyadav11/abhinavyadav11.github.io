import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, FileText, ExternalLink, Mail, MapPin, Calendar, ChevronDown, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Import images
import heroBg from './assets/hero-bg.png'
import cryptoProject from './assets/crypto-project.png'
import aiAnalystProject from './assets/ai-analyst-project.png'
import driverDetectionProject from './assets/driver-detection-project.png'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'skills', 'experience']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      title: "CryptoAgent",
      description: "Real-time crypto market insight platform using LLMs, ML models, and automation pipelines.",
      image: cryptoProject,
      stack: ["Python", "XGBoost", "Streamlit", "FAISS", "LLaMA 3"],
      github: "https://github.com/abhinavyadav11/cryptoagent",
      demo: "#"
    },
    {
      title: "AI Data Analyst",
      description: "Multi-format AI agent that processes PDF, Excel, image, and text data with Groq API and NLP tools.",
      image: aiAnalystProject,
      stack: ["Python", "OpenCV", "Tesseract", "spaCy", "Streamlit"],
      github: "https://github.com/abhinavyadav11/ai-data-analyst",
      demo: "#"
    },
    {
      title: "Driver Alertness Detection",
      description: "Real-time driver monitoring system using YOLO and VGG16 for eye closure detection and safety alerting.",
      image: driverDetectionProject,
      stack: ["OpenCV", "TensorFlow", "VGG16", "Streamlit"],
      github: "https://github.com/abhinavyadav11/driver-alertness",
      demo: "#"
    }
  ]

  const skills = {
    "Programming Languages": ["Python", "SQL", "Java"],
    "ML/AI Frameworks": ["TensorFlow", "Scikit-learn", "XGBoost", "Transformers"],
    "AI Tools": ["LangChain", "HuggingFace", "OpenRouter", "FAISS", "Pinecone"],
    "Development": ["Docker", "Streamlit", "FastAPI", "n8n", "AWS EC2"]
  }

  const experience = [
    {
      company: "InventoHub",
      role: "AI/ML Intern",
      period: "2024",
      description: "Built autonomous data pipelines using Selenium, Phantombuster, n8n on AWS for LLM-based applications.",
      icon: "🚀"
    },
    {
      company: "Aladdin Creative Studio",
      role: "Data Science Intern",
      period: "2023",
      description: "Developed real-time eye detection and alert system using YOLO + VGG16.",
      icon: "👁️"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-xl font-semibold text-gray-900"
              whileHover={{ scale: 1.02 }}
            >
              Abhinav Yadav
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'projects', 'skills', 'experience'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors text-sm font-medium ${
                    activeSection === section ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-gray-900 tracking-tight">
              Abhinav Yadav
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
              AI/ML Engineer | Data Scientist | Crypto Automation Enthusiast
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              "I build intelligent systems that think, trade, and analyze — all in real time."
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button asChild variant="default" size="lg" className="bg-gray-900 hover:bg-gray-800 text-white border-0 rounded-full px-8">
              <a href="https://github.com/abhinavyadav11" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8">
              <a href="https://www.linkedin.com/in/abhinav-yadav-70088a252" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8">
              <a href="https://github.com/abhinavyadav11/resume/blob/main/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="animate-bounce"
          >
            <ChevronDown 
              className="h-6 w-6 mx-auto text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
              About Me
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <User className="w-12 h-12 text-gray-600" />
              </div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                Hi, I'm Abhinav Yadav 👋
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                I'm a Computer Science Engineer by degree and an AI/ML enthusiast at heart. I discovered my passion for artificial intelligence and data science during my college years, and I've been building intelligent systems since 2022.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                My journey in AI/ML has led me to work on diverse projects ranging from cryptocurrency market analysis to computer vision applications. I specialize in creating real-time systems that can think, analyze, and automate complex processes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                When I'm not coding or training models, you'll find me exploring new technologies, contributing to open-source projects, reading research papers, or working on automation solutions that make life easier.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Showcasing my latest work in AI/ML, automation, and data science
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-medium text-gray-900">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600 font-light leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 text-gray-700 border-0 font-light">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild size="sm" variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button asChild size="sm" className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-full">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-medium text-center text-gray-900">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs border-gray-300 text-gray-700 font-light">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
              Experience
            </h2>
            <p className="text-lg text-gray-600 font-light">
              My professional journey in AI/ML and data science
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-3xl">{exp.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-medium text-gray-900">{exp.role}</h3>
                          <Badge variant="outline" className="border-gray-300 text-gray-700 font-light">{exp.period}</Badge>
                        </div>
                        <h4 className="text-lg text-gray-700 mb-3 font-medium">{exp.company}</h4>
                        <p className="text-gray-600 font-light leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-4 text-gray-900">Let's Connect</h3>
            <p className="text-gray-600 mb-8 font-light">
              Interested in collaborating or discussing AI/ML projects? Let's talk!
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Button asChild variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full">
                <a href="https://github.com/abhinavyadav11" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full">
                <a href="https://www.linkedin.com/in/abhinav-yadav-70088a252" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full">
                <a href="mailto:abhinavyadav11@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-500 font-light">
              © 2024 Abhinav Yadav. Built with React & Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App

