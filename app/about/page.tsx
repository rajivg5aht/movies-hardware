"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { siteConfig, whatsappLink } from "@/data/site";
import { categories } from "@/data/categories";

export default function AboutPage() {
  const { t, isNepali } = useLanguage();

  return (
    <main>
      <SiteHeader />

      <section className="page-hero-compact">
        <div className="shell">
          <Breadcrumbs items={[{ label: t.about }]} />
          <h1>{t.aboutTitle}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section about-intro-section">
        <div className="shell about-intro-layout">
          <div className="about-intro-content">
            <p className="eyebrow">OUR STORY</p>
            <h2>{t.journeyTitle}</h2>
            <p className="about-lead">{t.aboutIntro}</p>
            <p className="about-body">{t.aboutGrowth}</p>
            <p className="about-body">
              Today, Movies Sanitary and Tiles Trade Link provides products
              across plumbing, sanitary, bathroom fittings, tiles, water pumps,
              machinery, pipes, fittings and other construction-related areas
              for homeowners, contractors, plumbers, builders and construction
              professionals.
            </p>
          </div>
          <div className="about-intro-visual">
            <div className="about-visual-panel">
              <p>
                STARTED SMALL.
                <br />
                <span>BUILT THROUGH TRUST.</span>
              </p>
              <div className="about-visual-years">
                2060<small>B.S.</small>
              </div>
            </div>
            <div className="about-photo">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=950&q=85"
                alt="A bright product showroom interior"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="journey-section">
        <div className="shell">
          <div className="journey-heading">
            <p className="eyebrow light-eyebrow">
              <span /> OUR JOURNEY
            </p>
            <h2>{t.journeyTitle}</h2>
          </div>
          <div className="timeline">
            <article>
              <span>01</span>
              <small>2060 B.S.</small>
              <h3>Business established</h3>
              <p>
                A small store began with a focus on plumbing products in Jagati,
                Bhaktapur.
              </p>
            </article>
            <article>
              <span>02</span>
              <small>THE START</small>
              <h3>NPR 50,000 initial capital</h3>
              <p>
                Built with a modest beginning and a focus on serving customers
                well.
              </p>
            </article>
            <article>
              <span>03</span>
              <small>GROWING WITH NEEDS</small>
              <h3>More for every project</h3>
              <p>
                The product range grew naturally as customer requirements
                expanded.
              </p>
            </article>
            <article>
              <span>04</span>
              <small>TODAY</small>
              <h3>A broader supplier</h3>
              <p>
                Plumbing, sanitary, fittings, tiles, pumps, machinery and more —
                all in one store.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* What we sell */}
      <section className="section about-products-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE OFFER</p>
            <h2>Our product range</h2>
            <p>
              Products for homes, construction projects, plumbing work and
              professional requirements.
            </p>
          </div>
          <div className="about-products-grid">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className="about-product-item"
              >
                <Icon name="check" size={16} />
                <span>{isNepali ? cat.nepali : cat.name}</span>
                <Icon name="arrow" size={14} />
              </Link>
            ))}
          </div>
          <Link href="/products" className="text-link" style={{ marginTop: 28 }}>
            {t.viewAllProducts} <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section about-why-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">WHY MOVIES</p>
            <h2>{t.whyTitle}</h2>
            <p>{t.whyBody}</p>
          </div>
          <div className="about-reasons-grid">
            <div className="about-reason-card">
              <span className="about-reason-icon">
                <Icon name="shield" size={24} />
              </span>
              <h3>Established since 2060 B.S.</h3>
              <p>
                A long-running local business serving growing customer needs
                over many years.
              </p>
            </div>
            <div className="about-reason-card">
              <span className="about-reason-icon">
                <Icon name="layers" size={24} />
              </span>
              <h3>Wide, practical product range</h3>
              <p>
                From plumbing essentials to sanitaryware, tiles, fittings, pumps
                and machinery.
              </p>
            </div>
            <div className="about-reason-card">
              <span className="about-reason-icon">
                <Icon name="building" size={24} />
              </span>
              <h3>For homes and project sites</h3>
              <p>
                Useful for homeowners, plumbers, contractors and construction
                professionals.
              </p>
            </div>
            <div className="about-reason-card">
              <span className="about-reason-icon">
                <Icon name="message" size={24} />
              </span>
              <h3>Easy enquiry</h3>
              <p>
                Contact us directly by phone or WhatsApp to ask about products,
                pricing and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer types */}
      <section className="section about-customers-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">WHO WE SERVE</p>
            <h2>Products for everyone</h2>
            <p>
              Whether you are building your first home or managing a
              construction project, we are here to help.
            </p>
          </div>
          <div className="about-customer-grid">
            <div className="about-customer-card">
              <Icon name="home" size={22} />
              <h3>Homeowners</h3>
              <p>
                Building or renovating a house? Find bathroom fittings,
                sanitaryware, tiles and plumbing products easily.
              </p>
            </div>
            <div className="about-customer-card">
              <Icon name="building" size={22} />
              <h3>Contractors &amp; Builders</h3>
              <p>
                Need materials for a project? Send your requirement and we can
                help check options and availability.
              </p>
            </div>
            <div className="about-customer-card">
              <Icon name="pipe" size={22} />
              <h3>Plumbers</h3>
              <p>
                Looking for pipes, fittings, valves or pumps? Browse our
                plumbing categories or ask us directly.
              </p>
            </div>
            <div className="about-customer-card">
              <Icon name="users" size={22} />
              <h3>General Customers</h3>
              <p>
                Anyone looking for construction, plumbing, sanitary or related
                products is welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section about-location-section">
        <div className="shell about-location-layout">
          <div>
            <p className="eyebrow">FIND US</p>
            <h2>{t.visitStore}</h2>
            <h3>
              Movies Sanitary and Tiles
              <br />
              Trade Link
            </h3>
            <p className="address">
              <Icon name="pin" size={19} /> {siteConfig.location}
            </p>
            <div className="location-actions">
              <a
                className="button button-copper"
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="pin" size={18} /> {t.getDirections}
              </a>
              <a
                className="button button-outline-dark"
                href={`tel:${siteConfig.phones.primary}`}
              >
                <Icon name="phone" size={18} /> {t.callUs}
              </a>
            </div>
          </div>
          <div className="about-location-numbers">
            <a href={`tel:${siteConfig.phones.primary}`}>
              <small>CALL</small>
              {siteConfig.phones.primary}
            </a>
            <a href={`tel:${siteConfig.phones.secondary}`}>
              <small>CALL</small>
              {siteConfig.phones.secondary}
            </a>
            <a
              href={whatsappLink("Hello, I have a question.")}
              target="_blank"
              rel="noreferrer"
            >
              <small>WHATSAPP</small>
              {t.chatOnWhatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <a
              className="button button-outline-light"
              href={`tel:${siteConfig.phones.primary}`}
            >
              <Icon name="phone" size={19} /> {siteConfig.phones.primary}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
