import { useState } from 'react';

interface FaqItemProps {
  q: string;
  a: string;
}

export default function FaqItem({ q, a }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}
