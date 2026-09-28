"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { siteConfig, whatsappLink } from "@/data/site";
import { categories } from "@/data/categories";

export function SiteHeader() {
  const { t, isNepali, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Announcement bar */}
      <div className="utility-bar">
        <div className="shell utility-inner">
          <p>
            <Icon name="pin" size={15} /> {siteConfig.location}
          </p>
          <div className="utility-actions">
            <a href={`tel:${siteConfig.phones.primary}`}>
              <Icon name="phone" size={15} /> {siteConfig.phones.primary}
            </a>
            <a
              href={whatsappLink(
                "Hello Movies Sanitary and Tiles Trade Link, I would like to enquire about a product."
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="message" size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link href="/" className="brand" aria-label="Go to home">
            <span className="brand-mark">M</span>
            <span className="brand-copy">
              <strong>MOVIES</strong>
              <small>Sanitary &amp; Tiles Trade Link</small>
            </span>
          </Link>

          <nav
            className={`desktop-nav ${menuOpen ? "open" : ""}`}
            aria-label="Primary navigation"
          >
            <Link href="/" className={isActive("/") ? "nav-active" : ""}>
              {t.home}
            </Link>

            {/* Products with dropdown */}
            <div className="nav-dropdown-wrapper">
              <button
                className={`nav-dropdown-trigger ${pathname.startsWith("/products") ? "nav-active" : ""}`}
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                aria-expanded={productsOpen}
              >
                {t.products} <Icon name="chevron" size={16} />
              </button>
              {productsOpen && (
                <div
                  className="nav-dropdown-menu"
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <div className="nav-dropdown-grid">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/products/${cat.slug}`}
                        className="nav-dropdown-item"
                        onClick={() => setProductsOpen(false)}
                      >
                        <span className="nav-dropdown-name">
                          {isNepali ? cat.nepali : cat.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="nav-dropdown-footer">
                    <Link
                      href="/products"
                      className="text-link"
                      onClick={() => setProductsOpen(false)}
                    >
                      {t.viewAllProducts} <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile products expand */}
            <div className="mobile-products-expand">
              <Link href="/products" className={pathname.startsWith("/products") ? "nav-active" : ""}>
                {t.products}
              </Link>
            </div>

            <Link
              href="/brands"
              className={isActive("/brands") ? "nav-active" : ""}
            >
              {t.brands}
            </Link>
            <Link
              href="/about"
              className={isActive("/about") ? "nav-active" : ""}
            >
              {t.about}
            </Link>
            <Link
              href="/professionals"
              className={isActive("/professionals") ? "nav-active" : ""}
            >
              {t.professionals}
            </Link>
            <Link
              href="/contact"
              className={isActive("/contact") ? "nav-active" : ""}
            >
              {t.contact}
            </Link>

            <div className="mobile-menu-actions">
              <Link href="/faq" className="mobile-menu-faq">
                {t.faq}
              </Link>
              <a
                className="button button-copper"
                href={whatsappLink(
                  "Hello, I would like to enquire about a product."
                )}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="message" size={18} /> {t.enquire}
              </a>
            </div>
          </nav>

          <div className="nav-actions">
            <button
              className="language-switch"
              onClick={toggleLanguage}
              aria-label="Switch language"
            >
              <span className={!isNepali ? "active" : ""}>EN</span>
              <i>/</i>
              <span className={isNepali ? "active nepali" : ""}>नेपाली</span>
            </button>
            <a
              className="button button-copper header-enquire"
              href={whatsappLink(
                "Hello, I would like to enquire about a product."
              )}
              target="_blank"
              rel="noreferrer"
            >
              {t.enquire} <Icon name="arrow" size={17} />
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <Icon name="close" /> : <Icon name="menu" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
