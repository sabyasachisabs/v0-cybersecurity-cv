"use client"

import { useEffect, useState } from "react"
import { Shield, Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"

const TYPING_TEXT = "Securing digital frontiers, one vulnerability at a time."

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= TYPING_TEXT.length) {
        setDisplayText(TYPING_TEXT.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <header className="relative pb-12 pt-16 md:pt-24 md:pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-2">
          Alex Chen
        </h1>
        <p className="text-lg md:text-xl text-primary font-mono mb-6">
          Cybersecurity Analyst
        </p>

        <div className="font-mono text-muted-foreground text-sm md:text-base mb-8 h-6">
          <span className="text-primary/60">{">"} </span>
          {displayText}
          <span
            className={`inline-block w-2 h-4 bg-primary ml-0.5 translate-y-0.5 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
          Aspiring cybersecurity professional with a strong foundation in network security,
          penetration testing, and threat analysis. Passionate about protecting organizations
          from evolving cyber threats through proactive security measures and continuous learning.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary/70" />
            San Francisco, CA
          </span>
          <span className="hidden md:inline text-border">|</span>
          <a
            href="mailto:alex.chen@email.com"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary/70" />
            alex.chen@email.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all text-sm"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all text-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
