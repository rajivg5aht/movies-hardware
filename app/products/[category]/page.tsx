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
import { getCategoryBySlug, categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { whatsappLink } from "@/data/site";
import { ProductCard } from "@/components/products/ProductCard";
import { CategoryCard } from "@/components/products/CategoryCard";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = use(params);
  const { t, isNepali } = useLanguage();
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact category-hero">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: t.products, href: "/products" },
              { label: isNepali ? category.nepali : category.name },
            ]}
          />
          <h1>{isNepali ? category.nepali : category.name}</h1>
          <p>{category.longDescription}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          {categoryProducts.length > 0 ? (
            <div className="product-grid">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Icon name="layers" size={30} />
              <h3>Products coming soon</h3>
              <p>
                We have {isNepali ? category.nepali : category.name} products
                available in our store. Contact us to enquire about specific
                products, pricing and availability.
              </p>
              <a
                className="button button-copper"
                href={whatsappLink(
                  `Hello, I am interested in ${category.name} products. Please provide the available options.`
                )}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="message" size={18} />
                {t.enquire}
              </a>
            </div>
          )}

          {/* Related categories */}
          <div className="related-categories">
            <h2>Explore other categories</h2>
            <div className="related-categories-grid">
              {categories
                .filter((c) => c.id !== category.id)
                .slice(0, 6)
                .map((cat) => (
                  <CategoryCard key={cat.id} category={cat} small />
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="shell contact-strip-inner">
          <div>
            <p>
              Looking for {isNepali ? category.nepali : category.name}{" "}
              products?
            </p>
            <strong>{t.contactBody}</strong>
          </div>
          <div>
            <a
              className="button button-copper"
              href={whatsappLink(
                `Hello, I am looking for ${category.name} products. Please help me with available options.`
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="message" size={19} /> {t.enquire}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
