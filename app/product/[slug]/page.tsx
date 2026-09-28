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
import { getProductBySlug, getProductsByCategory } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { siteConfig, whatsappLink } from "@/data/site";
import { ProductCard } from "@/components/products/ProductCard";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categoryId);
  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const enquiryMessage = `Hello, I am interested in ${product.name}. Please provide the price and availability.`;

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: t.products, href: "/products" },
              {
                label: category?.name || product.category,
                href: `/products/${product.categoryId}`,
              },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="shell">
          <div className="product-detail-layout">
            {/* Product image */}
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
              <span className="product-detail-tag">{product.tag}</span>
            </div>

            {/* Product info */}
            <div className="product-detail-info">
              <div className="product-detail-meta">
                <Link
                  href={`/products/${product.categoryId}`}
                  className="meta-category"
                >
                  {product.category}
                </Link>
                {product.brand && (
                  <span className="meta-brand">{product.brand}</span>
                )}
              </div>

              <h1>{product.name}</h1>

              <p className="product-detail-desc">
                {product.longDescription || product.description}
              </p>

              <div className="product-detail-price">
                <Icon name="check" size={16} />
                <span>{t.priceAndAvailability}</span>
              </div>

              <div className="product-detail-actions">
                <a
                  className="button button-copper"
                  href={whatsappLink(enquiryMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="message" size={19} /> {t.enquire}
                </a>
                <a
                  className="button button-outline-dark"
                  href={`tel:${siteConfig.phones.primary}`}
                >
                  <Icon name="phone" size={18} /> {t.callUs}
                </a>
              </div>

              <div className="product-detail-contact">
                <div className="detail-contact-item">
                  <Icon name="phone" size={16} />
                  <div>
                    <strong>{t.preferCall}</strong>
                    <a href={`tel:${siteConfig.phones.primary}`}>
                      {siteConfig.phones.primary}
                    </a>
                    <a href={`tel:${siteConfig.phones.secondary}`}>
                      {siteConfig.phones.secondary}
                    </a>
                  </div>
                </div>
                <div className="detail-contact-item">
                  <Icon name="pin" size={16} />
                  <div>
                    <strong>{t.visitStore}</strong>
                    <a
                      href={siteConfig.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {siteConfig.location}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h2>{t.relatedProducts}</h2>
              <div className="product-grid">
                {relatedProducts.map((rp) => (
                  <ProductCard key={rp.id} product={rp} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
