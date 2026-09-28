"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { siteConfig, whatsappLink } from "@/data/site";

export default function ProfessionalsPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: "For Contractors",
      icon: "building" as const,
      description:
        "Managing a construction project? Send us your material list or project requirements. We can help check available products, quantities and pricing.",
      points: [
        "Bulk material enquiries",
        "Multiple product categories in one place",
        "Quantity-based discussions",
      ],
    },
    {
      title: "For Plumbers",
      icon: "pipe" as const,
      description:
        "Looking for pipes, fittings, valves, pumps or plumbing accessories? Browse our plumbing categories or contact us directly with your requirement.",
      points: [
        "PPR, uPVC, CPVC, HDPE, GI, SS pipes",
        "Fittings, valves and clamps",
        "Water pumps and accessories",
      ],
    },
    {
      title: "For Builders & Developers",
      icon: "layers" as const,
      description:
        "Need construction materials for a residential or commercial project? Share your requirement and we can discuss product options and availability.",
      points: [
        "Project-level requirements",
        "Multiple product categories",
        "Construction and plumbing materials",
      ],
    },
    {
      title: "For Project Requirements",
      icon: "truck" as const,
      description:
        "Have a specific project requirement? Tell us what you need — product type, approximate quantity and project details — and our team can help.",
      points: [
        "Custom project enquiries",
        "Availability checks",
        "Direct team communication",
      ],
    },
  ];

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact pro-hero">
        <div className="shell">
          <Breadcrumbs items={[{ label: t.professionals }]} />
          <h1>{t.proPageTitle}</h1>
          <p>{t.proPageBody}</p>
          <div className="pro-hero-actions">
            <a
              className="button button-copper"
              href={whatsappLink(
                "Hello, I have a project requirement. Please help me check materials and quantities."
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="message" size={18} /> {t.sendRequirement}
            </a>
            <a
              className="button button-outline-light"
              href={`tel:${siteConfig.phones.primary}`}
            >
              <Icon name="phone" size={18} /> {t.callUs}
            </a>
          </div>
        </div>
      </section>

      <section className="section pro-sections">
        <div className="shell">
          <div className="pro-grid">
            {sections.map((section) => (
              <div key={section.title} className="pro-card">
                <div className="pro-card-icon">
                  <Icon name={section.icon} size={26} />
                </div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <ul className="pro-card-list">
                  {section.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={14} /> {point}
                    </li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={whatsappLink(
                    `Hello, I am a professional looking for construction materials. ${section.title} — please help me with my requirements.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.enquire} <Icon name="arrow" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry section */}
      <section className="section pro-enquiry-section">
        <div className="shell pro-enquiry-layout">
          <div className="pro-enquiry-content">
            <p className="eyebrow">PROJECT SUPPORT</p>
            <h2>{t.largeTitle}</h2>
            <p>{t.largeBody}</p>
            <div className="pro-checklist">
              <span>
                <Icon name="check" size={16} /> Product options
              </span>
              <span>
                <Icon name="check" size={16} /> Quantity checks
              </span>
              <span>
                <Icon name="check" size={16} /> Availability enquiries
              </span>
            </div>
            <div className="pro-enquiry-actions">
              <Link href="/enquire" className="button button-copper">
                {t.sendEnquiry} <Icon name="arrow" size={18} />
              </Link>
              <a
                className="button button-outline-dark"
                href={whatsappLink(
                  "Hello, I have a project requirement. Can you help?"
                )}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="message" size={18} /> {t.whatsappUs}
              </a>
            </div>
          </div>
          <div className="pro-enquiry-contact">
            <h3>Contact our team directly</h3>
            <a href={`tel:${siteConfig.phones.primary}`} className="pro-phone">
              <Icon name="phone" size={18} />
              <div>
                <small>CALL</small>
                <strong>{siteConfig.phones.primary}</strong>
              </div>
            </a>
            <a
              href={`tel:${siteConfig.phones.secondary}`}
              className="pro-phone"
            >
              <Icon name="phone" size={18} />
              <div>
                <small>CALL</small>
                <strong>{siteConfig.phones.secondary}</strong>
              </div>
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="pro-phone"
            >
              <Icon name="pin" size={18} />
              <div>
                <small>VISIT</small>
                <strong>{siteConfig.location}</strong>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="shell contact-strip-inner">
          <div>
            <p>{t.contactTitle}</p>
            <strong>{t.contactBody}</strong>
          </div>
          <div>
            <a
              className="button button-copper"
              href={whatsappLink("Hello, I have a project requirement.")}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="message" size={19} /> {t.chatOnWhatsapp}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
