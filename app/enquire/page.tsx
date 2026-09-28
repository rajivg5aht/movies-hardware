"use client";


import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { siteConfig, whatsappLink } from "@/data/site";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";

export default function EnquirePage() {
  const { t } = useLanguage();

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact">
        <div className="shell">
          <Breadcrumbs items={[{ label: t.sendEnquiry }]} />
          <h1>{t.enquirePageTitle}</h1>
          <p>{t.enquirePageBody}</p>
        </div>
      </section>

      <section className="section enquire-page-section">
        <div className="shell enquire-page-layout">
          <EnquiryForm className="enquire-page-form" />

          <div className="enquire-page-side">
            <div className="enquire-alt-card">
              <h3>Prefer WhatsApp?</h3>
              <p>
                Send us a message directly and tell us what you need.
              </p>
              <a
                className="button button-copper"
                href={whatsappLink(
                  "Hello, I have a requirement. Can you help?"
                )}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="message" size={18} /> {t.chatOnWhatsapp}
              </a>
            </div>

            <div className="enquire-alt-card">
              <h3>{t.preferCall}</h3>
              <p>Call us directly to discuss your requirement.</p>
              <div className="enquire-phones">
                <a href={`tel:${siteConfig.phones.primary}`} className="button button-outline-dark">
                  <Icon name="phone" size={18} /> {siteConfig.phones.primary}
                </a>
                <a href={`tel:${siteConfig.phones.secondary}`} className="button button-outline-dark">
                  <Icon name="phone" size={18} /> {siteConfig.phones.secondary}
                </a>
              </div>
            </div>

            <div className="enquire-alt-card">
              <h3>{t.visitStore}</h3>
              <p>{siteConfig.location}</p>
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
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
