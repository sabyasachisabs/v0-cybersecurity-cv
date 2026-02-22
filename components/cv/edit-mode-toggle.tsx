"use client"

import { Pencil, Eye, RotateCcw } from "lucide-react"
import { useCVData } from "./cv-data-context"

export function EditModeToggle() {
  const { isEditMode, toggleEditMode, resetToDefaults } = useCVData()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {isEditMode && (
        <button
          onClick={resetToDefaults}
          className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-medium text-muted-foreground shadow-lg hover:text-foreground hover:border-primary/40 transition-all"
          title="Reset all content to defaults"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      )}

      <button
        onClick={toggleEditMode}
        className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shadow-lg transition-all ${
          isEditMode
            ? "bg-primary text-primary-foreground ring-2 ring-primary/30 ring-offset-2 ring-offset-background"
            : "bg-card border border-border text-foreground hover:border-primary/40"
        }`}
        title={isEditMode ? "Switch to view mode" : "Edit content inline"}
      >
        {isEditMode ? (
          <>
            <Eye className="w-4 h-4" />
            Viewing
          </>
        ) : (
          <>
            <Pencil className="w-4 h-4" />
            Edit
          </>
        )}
      </button>
    </div>
  )
}
