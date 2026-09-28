"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { brands } from "@/data/brands";
import { whatsappLink } from "@/data/site";

export default function BrandsPage() {
  const { t } = useLanguage();

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact">
        <div className="shell">
          <Breadcrumbs items={[{ label: t.brands }]} />
          <h1>{t.brandsTitle}</h1>
          <p>{t.brandsBody}</p>
        </div>
      </section>

      <section className="section brands-page-section">
        <div className="shell">
          <div className="brands-page-grid">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.slug}`}
                className="brand-page-card"
              >
                <div className="brand-page-card-header">
                  <strong
                    className={brand.id === "tata-water-pumps" ? "tata" : ""}
                  >
                    {brand.id === "nepatop" ? (
                      <>
                        nepa<span>top</span>
                      </>
                    ) : (
                      brand.displayName
                    )}
                  </strong>
                </div>
                <div className="brand-page-card-body">
                  <small className="brand-area">{brand.productArea}</small>
                  <p>{brand.description}</p>
                  <span className="text-link">
                    {t.viewDetails} <Icon name="arrow" size={16} />
                  </span>
                </div>
              </Link>
            ))}

            {/* Placeholder for upcoming brands */}
            <div className="brand-page-placeholder">
              <Icon name="plus" size={24} />
              <strong>More brands</strong>
              <p>
                Additional brands and product lines will be added as they are
                confirmed. Contact us if you are looking for a specific brand.
              </p>
              <a
                className="text-link"
                href={whatsappLink(
                  "Hello, I am looking for a specific brand. Can you help?"
                )}
                target="_blank"
                rel="noreferrer"
              >
                Ask about a brand <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="shell contact-strip-inner">
          <div>
            <p>Looking for a specific brand?</p>
            <strong>{t.contactBody}</strong>
          </div>
          <div>
            <a
              className="button button-copper"
              href={whatsappLink(
                "Hello, I would like to enquire about available brands."
              )}
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
