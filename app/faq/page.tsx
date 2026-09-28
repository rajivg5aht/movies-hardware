"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { faqs } from "@/data/faqs";
import { whatsappLink } from "@/data/site";
import { FaqItem } from "@/components/ui/FaqItem";

export default function FAQPage() {
  const { t, isNepali } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact">
        <div className="shell">
          <Breadcrumbs items={[{ label: t.faq }]} />
          <h1>{t.faqTitle}</h1>
          <p>{t.faqBody}</p>
        </div>
      </section>

      <section className="section faq-page-section">
        <div className="shell faq-page-layout">
          <div className="faq-list faq-full-list">
            {faqs.map((faq, index) => {
              const question =
                isNepali && faq.questionNe ? faq.questionNe : faq.question;
              const answer =
                isNepali && faq.answerNe ? faq.answerNe : faq.answer;
              return (
                <FaqItem
                  key={index}
                  question={question}
                  answer={answer}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              );
            })}
          </div>

          <div className="faq-sidebar">
            <div className="faq-sidebar-card">
              <h3>Have another question?</h3>
              <p>
                A call or WhatsApp message is the fastest way to reach us.
              </p>
              <a
                className="button button-copper"
                href={whatsappLink("Hello, I have a question.")}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="message" size={18} /> {t.chatOnWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
