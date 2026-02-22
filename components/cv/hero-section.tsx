"use client"

import { useEffect, useState } from "react"
import { Shield, Linkedin, Mail, MapPin, Coffee } from "lucide-react"
import { useCVData } from "./cv-data-context"
import { EditableText } from "./editable-text"

export function HeroSection() {
  const { data } = useCVData()
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const text = data.hero.typingText
    let index = 0
    setDisplayText("")
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [mounted, data.hero.typingText])

  useEffect(() => {
    if (!mounted) return
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [mounted])

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

        <EditableText
          fieldPath="hero.name"
          as="h1"
          className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-2"
        />

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
          <EditableText
            fieldPath="hero.badge1"
            as="span"
            className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
          />
          <EditableText
            fieldPath="hero.badge2"
            as="span"
            className="px-2.5 py-0.5 rounded-full bg-secondary border border-border"
          />
          <EditableText
            fieldPath="hero.badge3"
            as="span"
            className="px-2.5 py-0.5 rounded-full bg-secondary border border-border"
          />
        </div>

        <div className="font-mono text-muted-foreground text-sm md:text-base mb-8 h-6">
          <span className="text-primary/60">{">"} </span>
          {displayText}
          <span
            className={`inline-block w-2 h-4 bg-primary ml-0.5 translate-y-0.5 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <EditableText
          fieldPath="hero.description"
          as="p"
          className="text-muted-foreground leading-relaxed max-w-2xl mb-8"
        />

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary/70" />
            <EditableText fieldPath="hero.location" as="span" />
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:nehal@email.com"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all text-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <Coffee className="w-4 h-4" />
            {"Let's Talk"}
          </a>
        </div>
      </div>
    </header>
  )
}
