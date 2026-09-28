"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { siteConfig, whatsappLink } from "@/data/site";

export function SiteFooter() {
  const { t, isNepali, toggleLanguage } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span className="brand-mark">M</span>
            <span className="brand-copy">
              <strong>MOVIES</strong>
              <small>Sanitary &amp; Tiles Trade Link</small>
            </span>
          </Link>
          <p>{t.footerDesc}</p>
          <button
            className="language-switch footer-language"
            onClick={toggleLanguage}
          >
            <span className={!isNepali ? "active" : ""}>EN</span>
            <i>/</i>
            <span className={isNepali ? "active nepali" : ""}>नेपाली</span>
          </button>
        </div>
        <div>
          <h4>{t.navigate}</h4>
          <Link href="/">{t.home}</Link>
          <Link href="/products">{t.products}</Link>
          <Link href="/brands">{t.brands}</Link>
          <Link href="/about">{t.about}</Link>
          <Link href="/professionals">{t.professionals}</Link>
          <Link href="/contact">{t.contact}</Link>
          <Link href="/faq">{t.faq}</Link>
        </div>
        <div>
          <h4>{t.productCategories}</h4>
          <Link href="/products/plumbing">Plumbing</Link>
          <Link href="/products/sanitaryware">Sanitaryware</Link>
          <Link href="/products/bathroom-fittings">Bathroom Fittings</Link>
          <Link href="/products/tiles">Tiles</Link>
          <Link href="/products/water-pumps">Water Pumps</Link>
          <Link href="/products/machinery">Machinery</Link>
        </div>
        <div>
          <h4>{t.contactInfo}</h4>
          <a href={`tel:${siteConfig.phones.primary}`}>
            {siteConfig.phones.primary}
          </a>
          <a href={`tel:${siteConfig.phones.secondary}`}>
            {siteConfig.phones.secondary}
          </a>
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
            {siteConfig.location}
          </a>
          <a
            href={whatsappLink(
              "Hello, I would like to enquire about a product."
            )}
            target="_blank"
            rel="noreferrer"
          >
            {t.chatOnWhatsapp}
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>{t.copyright}</span>
        <span>Built for clarity, trust &amp; easy enquiries.</span>
      </div>
    </footer>
  );
}
