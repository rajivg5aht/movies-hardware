"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { useLanguage } from "@/lib/language-context";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main>
      <SiteHeader />

      <section className="not-found-section">
        <div className="shell not-found-content">
          <div className="not-found-icon">
            <span>404</span>
          </div>
          <h1>{t.notFoundTitle}</h1>
          <p>{t.notFoundBody}</p>
          <div className="not-found-actions">
            <Link href="/" className="button button-copper">
              <Icon name="home" size={18} /> {t.backToHome}
            </Link>
            <Link href="/products" className="button button-outline-dark">
              {t.explore} <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
