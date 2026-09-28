"use client";

import { Icon } from "@/components/ui/Icon";
import { siteConfig, whatsappLink } from "@/data/site";

export function FloatingActions() {
  return (
    <>
      {/* Desktop floating WhatsApp */}
      <div className="floating-whatsapp">
        <a
          href={whatsappLink(
            "Hello, I would like to enquire about a product."
          )}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <Icon name="message" size={23} />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="mobile-contact-bar">
        <a href={`tel:${siteConfig.phones.primary}`}>
          <Icon name="phone" size={18} />
          Call
        </a>
        <a
          href={whatsappLink(
            "Hello, I would like to enquire about a product."
          )}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="message" size={18} />
          WhatsApp
        </a>
        <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
          <Icon name="pin" size={18} />
          Directions
        </a>
      </div>
    </>
  );
}
