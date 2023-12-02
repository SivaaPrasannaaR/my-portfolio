import React, { ReactNode, useEffect, useRef } from "react"
import styles from "./dialog.module.scss"

interface DialogProps {
  children: ReactNode
  onClose: () => void
}

const Dialog: React.FC<DialogProps> = ({ children, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        onClose() // Close the dialog when clicking outside
      }
    }

    // Add event listener to handle clicks outside the dialog content
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  return (
    <div className={styles.dialog}>
      <div ref={dialogRef} className={styles.dialog_content}>
        {children}
      </div>
    </div>
  )
}

export default Dialog
