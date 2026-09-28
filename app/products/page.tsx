"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { categories } from "@/data/categories";
import { products, searchProducts } from "@/data/products";
import { whatsappLink } from "@/data/site";
import { ProductCard } from "@/components/products/ProductCard";
import { CategoryCard } from "@/components/products/CategoryCard";

export default function ProductsPage() {
  const { t, isNepali } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    let result = search ? searchProducts(search) : products;
    if (activeCategory !== "all") {
      result = result.filter((p) => p.categoryId === activeCategory);
    }
    return result;
  }, [search, activeCategory]);

  const clearAll = () => {
    setSearch("");
    setActiveCategory("all");
  };

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact">
        <div className="shell">
          <Breadcrumbs items={[{ label: t.products }]} />
          <h1>{t.productsPageTitle}</h1>
          <p>{t.productsPageBody}</p>
        </div>
      </section>

      <section className="section products-page-section">
        <div className="shell">
          <div className="products-page-layout">
            {/* Sidebar filters */}
            <aside className="products-sidebar">
              <div className="sidebar-section">
                <h3>{t.allCategories}</h3>
                <div className="sidebar-filters">
                  <button
                    className={activeCategory === "all" ? "filter-active" : ""}
                    onClick={() => setActiveCategory("all")}
                  >
                    {isNepali ? "सबै उत्पादन" : "All products"}
                    <span className="filter-count">{products.length}</span>
                  </button>
                  {categories.map((cat) => {
                    const count = products.filter(
                      (p) => p.categoryId === cat.id
                    ).length;
                    return (
                      <button
                        key={cat.id}
                        className={
                          activeCategory === cat.id ? "filter-active" : ""
                        }
                        onClick={() => setActiveCategory(cat.id)}
                      >
                        {isNepali ? cat.nepali : cat.name}
                        {count > 0 && (
                          <span className="filter-count">{count}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Main product area */}
            <div className="products-main">
              <div className="products-toolbar">
                <div className="search-box">
                  <Icon name="search" size={18} />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    aria-label="Search products"
                  />
                  <button
                    aria-label="Clear search"
                    className={search ? "clear-search visible" : "clear-search"}
                    onClick={() => setSearch("")}
                  >
                    ×
                  </button>
                </div>
                <div className="products-meta-bar">
                  <span className="results-count">
                    {filteredProducts.length}{" "}
                    {filteredProducts.length === 1 ? "product" : "products"}
                  </span>
                  {(activeCategory !== "all" || search) && (
                    <button className="text-link" onClick={clearAll}>
                      {t.clearFilters}
                    </button>
                  )}
                </div>
              </div>

              {/* Mobile filter pills */}
              <div className="filter-pills mobile-filter-pills">
                <button
                  className={activeCategory === "all" ? "selected" : ""}
                  onClick={() => setActiveCategory("all")}
                >
                  All
                </button>
                {categories.slice(0, 6).map((cat) => (
                  <button
                    key={cat.id}
                    className={activeCategory === cat.id ? "selected" : ""}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {filteredProducts.length > 0 ? (
                <div className="product-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <Icon name="search" size={25} />
                  <strong>{t.noResults}</strong>
                  <p>{t.noResultsBody}</p>
                  <button className="button button-blue" onClick={clearAll}>
                    {t.viewAllProducts}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Category cards below */}
          <div className="products-categories-section">
            <h2>{t.categoriesTitle}</h2>
            <div className="products-category-grid">
              {categories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA before footer */}
      <section className="contact-strip">
        <div className="shell contact-strip-inner">
          <div>
            <p>{t.contactTitle}</p>
            <strong>{t.contactBody}</strong>
          </div>
          <div>
            <a
              className="button button-copper"
              href={whatsappLink(
                "Hello, I would like to enquire about a product."
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
