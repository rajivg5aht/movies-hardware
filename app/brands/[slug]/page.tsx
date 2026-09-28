"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { getBrandBySlug } from "@/data/brands";
import { products } from "@/data/products";
import { siteConfig, whatsappLink } from "@/data/site";

export default function BrandDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const brandProducts = products.filter(
    (p) => p.brand && p.brand.toLowerCase().includes(brand.name.toLowerCase())
  );

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: t.brands, href: "/brands" },
              { label: brand.name },
            ]}
          />
          <div className="brand-detail-header">
            <div className="brand-detail-logo">
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
            <div>
              <h1>{brand.name}</h1>
              <p className="brand-detail-area">{brand.productArea}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="brand-detail-content">
            <div className="brand-detail-about">
              <h2>About {brand.name}</h2>
              <p>{brand.description}</p>
              <div className="brand-detail-actions">
                <a
                  className="button button-copper"
                  href={whatsappLink(
                    `Hello, I am interested in ${brand.name} products. Please share available options.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="message" size={18} /> {t.enquire}
                </a>
                <a
                  className="button button-outline-dark"
                  href={`tel:${siteConfig.phones.primary}`}
                >
                  <Icon name="phone" size={18} /> {t.callUs}
                </a>
              </div>
            </div>
          </div>

          {/* Brand products */}
          {brandProducts.length > 0 && (
            <div className="brand-products">
              <h2>Products from {brand.name}</h2>
              <div className="product-grid">
                {brandProducts.map((product) => (
                  <article className="product-card" key={product.id}>
                    <Link
                      href={`/product/${product.slug}`}
                      className="product-image"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                      <span>{product.tag}</span>
                    </Link>
                    <div className="product-card-body">
                      <div className="product-meta">
                        <small>{product.category}</small>
                      </div>
                      <h3>
                        <Link href={`/product/${product.slug}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <p>{product.description}</p>
                      <a
                        href={whatsappLink(
                          `Hello, I am interested in ${product.name} from ${brand.name}. Please provide the price and availability.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="product-enquire-link"
                      >
                        {t.enquire} <Icon name="arrow" size={17} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="back-link-section">
            <Link href="/brands" className="text-link">
              <Icon name="arrow" size={17} /> {t.backToBrands}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
