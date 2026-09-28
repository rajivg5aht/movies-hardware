"use client";

import { FormEvent, useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { siteConfig, whatsappLink } from "@/data/site";
import { categories } from "@/data/categories";

export default function EnquirePage() {
  const { t } = useLanguage();
  const [requestSent, setRequestSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (fields: FormData) => {
    const errs: Record<string, string> = {};
    if (!fields.get("name")?.toString().trim()) errs.name = "Please enter your name.";
    if (!fields.get("phone")?.toString().trim()) errs.phone = "Please enter a valid phone number.";
    if (!fields.get("need")?.toString().trim()) errs.need = "Please tell us what you need.";
    return errs;
  };

  const submitRequirement = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const message = `Hello, I have a project requirement.\n\nName: ${fields.get("name")}\nPhone: ${fields.get("phone")}\nNeed: ${fields.get("need")}\nQuantity: ${fields.get("quantity") || "Not specified"}\nDetails: ${fields.get("message") || "None"}`;

    setRequestSent(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

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
          <form className="enquiry-form enquire-page-form" onSubmit={submitRequirement}>
            <div className="form-head">
              <h3>Tell us what you need</h3>
              <p>Short and simple — we&apos;ll take it from there.</p>
            </div>

            <label>
              {t.formName} <span className="required">*</span>
              <input
                required
                name="name"
                placeholder="Your name"
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </label>

            <label>
              {t.formPhone} <span className="required">*</span>
              <input
                required
                name="phone"
                type="tel"
                placeholder="98XXXXXXXX"
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </label>

            <label>
              {t.formNeed} <span className="required">*</span>
              <select
                required
                name="need"
                defaultValue=""
                className={errors.need ? "input-error" : ""}
              >
                <option value="" disabled>
                  {t.selectCategory}
                </option>
                {categories.map((category) => (
                  <option key={category.name}>{category.name}</option>
                ))}
                <option value="Other">Other</option>
              </select>
              {errors.need && <span className="field-error">{errors.need}</span>}
            </label>

            <label>
              {t.formQty}
              <input name="quantity" placeholder="e.g. 50 pieces / 300 ft" />
            </label>

            <label className="full">
              {t.formMessage}
              <textarea
                name="message"
                rows={4}
                placeholder="Product type, preferred brand, project details..."
              />
            </label>

            <button className="button button-copper full" type="submit">
              <Icon name="message" size={19} /> {t.formSubmit}
            </button>

            {requestSent && (
              <p className="form-success full">
                <Icon name="check" size={16} /> {t.formSuccess}
              </p>
            )}
          </form>

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
