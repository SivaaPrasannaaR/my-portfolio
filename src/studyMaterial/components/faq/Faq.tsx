import React, { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism" // Import the desired style
import styles from "./Faq.module.scss"
import hljs from "highlight.js"
type FaqProps = {}

const Faq: React.FC<FaqProps> = () => {
  const [faqs, setFaqs] = useState<any[]>([
    {
      question: "How do I write a basic JavaScript function?",
      answer: `You can write a basic JavaScript function like this:

\`\`\`javascript
function myFunction(parameter) {
  // Function logic here
  return result;
}
\`\`\`
`,
    },
    // Add more FAQ items as needed
  ])

  const toggleFAQ = (index: number) => {
    const updatedFaqs = [...faqs]
    updatedFaqs[index].open = !updatedFaqs[index].open
    setFaqs(updatedFaqs)
  }

  // Highlight code blocks when the component mounts or updates
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      if (block instanceof HTMLElement) {
        hljs.highlightBlock(block)
      }
    })
  }, [faqs])

  return (
    <div className={styles.faq_container}>
      {faqs.map((faq: any, index: number) => (
        <div
          className={`${styles.faq_item} ${faq.open ? styles.open : ""}`}
          key={index}
        >
          <div className={styles.faq_question} onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          {faq.open && (
            <div className={styles.faq_answer}>
              <ReactMarkdown
                components={{
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "")
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={atomDark as any} // Use the imported style
                        language={match[1]}
                        PreTag="div"
                        children={String(children).replace(/\n$/, "")}
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {faq.answer}
              </ReactMarkdown>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Faq
