'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BarChart, Book, Bot, Brain, Code, Cpu, Github, Mail, MessageSquare, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { Swords } from 'lucide-react'
import { FolderGit } from 'lucide-react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  
const leaders = [
  {
    name: 'Jonathan Teodoro',
    role: 'Presidente',
    image: '/jonathan.jpg',
    bio: 'Aluno de Ciência da Computação',
  },
  {
    name: 'Pedro Pinheiro',
    role: 'Vice Presidente',
    image: '/pedro.jpeg',
    bio: 'Aluno de Ciência da Computação',
  },
  {
    name: 'Pietra Baptista',
    role: 'Diretora de Marketing',
    image: '/pietra.jpeg',
    bio: 'Aluna de Engenharia da Computação',
  },
  {
    name: 'Yanomã Konwski',
    role: 'Diretor Financeiro',
    image: '/yanoma.jpeg',
    bio: 'Aluno de Ciência da Computação',
  },
  {
    name: 'Gabriel Scarpelin',
    role: 'Diretor Educacional',
    image: '/gabriel.jpeg',
    bio: 'Aluno de Ciência da Computação',
  },
  {
    name: 'Ana Carolina',
    role: 'Diretora de Pessoas e Eventos',
    image: '/ana.jpeg',
    bio: 'Aluna de Engenharia de Software',
  },
]
const modules = [
  {
    title: "módulo 1",
    description: "Fundamentos de Programação em Python e Machine Learning",
    icon: Code,
  },
  {
    title: "módulo 2",
    description: "Inteligência Artificial Generativa e Aplicações Práticas",
    icon: Cpu,
  },
  {
    title: "módulo 3",
    description: "IA Preditiva, Deep Learning, Visão Computacional e Processamento de Linguagem Natural",
    icon: Brain,
  },
]


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
  
  <div className="container relative z-10 mx-auto px-4 py-32 text-center">
    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <Image
        src="/Logo Inteli AI.svg"
        alt="Inteli AI Logo"
        width={300}
        height={78}
        className="mx-auto mb-8"
        priority
      />
      <h1 className="mb-6 text-3xl sm:text-6xl font-bold tracking-tight">
        impulsionando o futuro com
        <span className="block text-white">inteligência artificial</span>
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300"> 
        A liga de IA do Inteli dedicada a explorar e desenvolver soluções de ponta em Inteligência Artificial, promovendo a inovação e formando a próxima geração de líderes em IA.
      </p>
    </div>
  </div>

  {/* Animated background pattern */}
  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
  
  {/* Scroll indicator */}
  <motion.div 
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
    initial={{ opacity: 0, y: -10 }}
    animate={{ 
      opacity: [0.4, 1, 0.4],
      y: [0, 10, 0]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    onClick={() => window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })}
  >
    <p className="text-zinc-400 text-sm font-light"></p>
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className="text-zinc-400"
    >
      <path 
        d="M12 5L12 19M12 19L19 12M12 19L5 12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
</header>
      {/* Features Section */}
      <section id="sobre" className="py-32 bg-[#f9fafb] text-black flex items-center">
  <div className="container mx-auto px-6">
    
   
    
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">o que é a inteli.ai?</h2>
      <div className="w-20 h-1 bg-black mb-6"></div>
        <p className="text-lg mb-4">
          A inteli.ai é uma liga de inovação dedicada a explorar e desenvolver as fronteiras da Inteligência Artificial. Nossa missão é capacitar estudantes e profissionais a se tornarem líderes na revolução da IA, promovendo aprendizado prático e colaboração.
        </p>
        <p className="text-lg">
          Através de projetos desafiadores, workshops e competições, buscamos criar um ambiente onde a criatividade e o conhecimento técnico se fundem para gerar soluções inovadoras que moldarão o futuro da tecnologia e da sociedade.
        </p>
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap gap-4">
          {[
            { icon: Cpu, text: 'tecnologia de ponta' },
            { icon: Brain, text: 'aprendizado contínuo' },
            { icon: FolderGit, text: 'projetos inovadores' },
            { icon: Swords, text: 'competições' },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center w-[calc(50%-0.5rem)] p-4 rounded-lg border border-white border-opacity-10"
            >
              <item.icon className="w-16 h-16 mb-3" />
              <p className="text-lg font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="estrutura" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">como vai funcionar?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border p-8 rounded-lg flex flex-col"
          >
            <div className="flex flex-row items-center gap-4">
            <Book className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">primeira fase</h3>
            </div>
            
            <p>
              Três módulos focados em fundamentos de IA, aprendizado de máquina e processamento de linguagem natural. Aulas teóricas combinadas com exercícios práticos para solidificar o conhecimento.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border p-8 rounded-lg"
          >
            <div className="flex flex-row items-center gap-4">
            <Bot className="w-12 h-12 mb-4 flex flex-col" />
            <h3 className="text-2xl font-semibold mb-4">segunda fase</h3>
            </div>
            <p>
              Foco em projetos práticos e workshops avançados. Os participantes trabalharão em equipes para desenvolver soluções de IA para problemas do mundo real, com orientação de mentores da indústria.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >

        </motion.div>
      </div>
    </section>
    <section id="modulos" className="py-20 bg-[#f9fafb] text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">módulos de aprendizado</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
        Os alunos da primeira fase passarão por três módulos intensivos de dois meses cada. Ao fim de cada etapa, poderão testar seus conhecimentos em desafios, hackathons e competições empolgantes!
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="min-h-36 flex flex-col items-center text-center p-6 border rounded-lg bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
            >
              <module.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-sm">{module.description}</p>
            </motion.div>
          ))}
          
        </div>
        <p className="text-center mb-12 max-w-2xl mx-auto">
        </p>
      </div>
    </section>
    <section id="segundo-ano" className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">desenvolvimento de projeto</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Na segunda fase, os alunos terão a oportunidade de mergulhar em um projeto inovador de IA, culminando em uma
            apresentação estilo Shark Tank para especialistas, investidores e entusiastas.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border p-6 rounded-lg bg-gray-100 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">4-6 meses de Projeto</h3>
              <p>Tempo dedicado para desenvolver um projeto de IA inovador e impactante.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border p-6 rounded-lg bg-gray-100 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Acompanhamento dos Projetos</h3>
              <p>Encontros regulares para orientação, feedback e suporte no desenvolvimento dos projetos.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border p-6 rounded-lg bg-gray-100 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Workshops com Especialistas</h3>
              <p>Sessões exclusivas com profissionais da indústria para aprofundar conhecimentos e insights.</p>
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold">
              Prepare-se para apresentar seu projeto inovador de IA para especialistas, investidores e entusiastas!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="liderança" className="py-20 bg-[#1f1f1f]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">quem somos?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border p-6 rounded-lg border border-white border-opacity-10 transition-all duration-300 flex flex-col items-center"
            >
              <div className="mb-6 overflow-hidden rounded-lg transition-all duration-300 flex flex-col items-center shadow-lg text-center transform">

                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={192}
                  height={192}
                  className="w-48 h-48 object-cover transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{leader.name}</h3>
              <p className="text-white text-opacity-70 mb-4 text-center">{leader.role}</p>
              <p className="text-sm text-white text-opacity-90 text-center">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">manifestar interesse</h2>
            <p className="text-center mb-8 max-w-2xl mx-auto text-black">
              Caso tenha interesse em participar da inteli.ai, clique no botão abaixo para preencher o formulário.
            </p>
            <Link href="https://forms.gle/nDG7LbCF5occkfeE9" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#1f1f1f] text-white hover:bg-zinc-700">
                preencher formulário
              </Button>
            </Link>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="#" className="text-zinc-400 hover:text-black hover:scale-110">
                <Mail className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-black hover:scale-110">
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>    
      {/* Footer */}
      <footer className="py-8 bg-[#1f1f1f] border-t border-zinc-900">
        <div className="container mx-auto px-4 text-center text-zinc-200">
          <p>© 2024 inteli.ai. Todos direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
