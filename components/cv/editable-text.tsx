"use client"

import { useRef, useCallback, type KeyboardEvent } from "react"
import { useCVData } from "./cv-data-context"

interface EditableTextProps {
  fieldPath: string
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div"
  className?: string
  multiline?: boolean
}

export function EditableText({
  fieldPath,
  as: Tag = "span",
  className = "",
  multiline = false,
}: EditableTextProps) {
  const { isEditMode, getField, updateField } = useCVData()
  const ref = useRef<HTMLElement>(null)
  const value = (getField(fieldPath) as string) ?? ""

  const handleBlur = useCallback(() => {
    if (!ref.current) return
    const newValue = ref.current.innerText.trim()
    if (newValue !== value) {
      updateField(fieldPath, newValue)
    }
  }, [fieldPath, value, updateField])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!multiline && e.key === "Enter") {
        e.preventDefault()
        ref.current?.blur()
      }
    },
    [multiline]
  )

  if (!isEditMode) {
    return <Tag className={className}>{value}</Tag>
  }

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement & HTMLDivElement>}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`${className} outline-dashed outline-1 outline-primary/40 rounded-sm px-1 -mx-1 focus:outline-primary/70 focus:bg-primary/5 transition-all cursor-text`}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  )
}
