"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { siteConfig, whatsappLink } from "@/data/site";
import { MapCard } from "@/components/contact/MapCard";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact">
        <div className="shell">
          <Breadcrumbs items={[{ label: t.contact }]} />
          <h1>{t.contactPageTitle}</h1>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="shell contact-page-layout">
          <div className="contact-page-info">
            <h2>
              Movies Sanitary and Tiles
              <br />
              Trade Link
            </h2>

            <div className="contact-detail-card">
              <div className="contact-detail-item">
                <span className="contact-detail-icon">
                  <Icon name="pin" size={20} />
                </span>
                <div>
                  <strong>Location</strong>
                  <p>{siteConfig.location}</p>
                  <a
                    className="text-link"
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.getDirections} <Icon name="arrow" size={15} />
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-icon">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <strong>Phone</strong>
                  <div className="contact-phones">
                    <a href={`tel:${siteConfig.phones.primary}`}>
                      {siteConfig.phones.primary}
                    </a>
                    <a href={`tel:${siteConfig.phones.secondary}`}>
                      {siteConfig.phones.secondary}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-icon">
                  <Icon name="message" size={20} />
                </span>
                <div>
                  <strong>WhatsApp</strong>
                  <a
                    className="text-link"
                    href={whatsappLink(
                      "Hello, I would like to enquire about a product."
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.chatOnWhatsapp} <Icon name="arrow" size={15} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-action-buttons">
              <a
                className="button button-copper"
                href={`tel:${siteConfig.phones.primary}`}
              >
                <Icon name="phone" size={18} /> Call{" "}
                {siteConfig.phones.primary}
              </a>
              <a
                className="button button-copper"
                href={`tel:${siteConfig.phones.secondary}`}
              >
                <Icon name="phone" size={18} /> Call{" "}
                {siteConfig.phones.secondary}
              </a>
              <a
                className="button button-outline-dark"
                href={whatsappLink(
                  "Hello, I would like to enquire about a product."
                )}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="message" size={18} /> {t.chatOnWhatsapp}
              </a>
              <a
                className="button button-outline-dark"
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="pin" size={18} /> {t.getDirections}
              </a>
            </div>
          </div>

          {/* Map section */}
          <MapCard className="contact-map" />
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
