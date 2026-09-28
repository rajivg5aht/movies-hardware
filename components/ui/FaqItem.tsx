"use client";

import { Icon } from "@/components/ui/Icon";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <article className={isOpen ? "faq-item open" : "faq-item"}>
      <button onClick={onToggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <Icon name={isOpen ? "close" : "plus"} size={18} />
      </button>
      <div>
        <p>{answer}</p>
      </div>
    </article>
  );
}
