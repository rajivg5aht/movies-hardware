"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { whatsappLink } from "@/data/site";
import { categories } from "@/data/categories";

export function EnquiryForm({ className = "" }: { className?: string }) {
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
    <form className={`enquiry-form ${className}`} onSubmit={submitRequirement}>
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
            Select a category
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
        <Icon name="message" size={19} /> {t.submit || "Send enquiry on WhatsApp"}
      </button>

      {requestSent && (
        <p className="form-success full">
          <Icon name="check" size={16} /> WhatsApp has opened with your enquiry.
        </p>
      )}
    </form>
  );
}
