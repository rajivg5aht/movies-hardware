"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { whatsappLink } from "@/data/site";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useLanguage();

  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}`} className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span>{product.tag}</span>
      </Link>
      <div className="product-card-body">
        <div className="product-meta">
          <small>{product.category}</small>
          {product.brand && <small>{product.brand}</small>}
        </div>
        <h3>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{product.description}</p>
        <div className="product-card-actions">
          <a
            href={whatsappLink(
              `Hello, I am interested in ${product.name}. Please provide the price and availability.`
            )}
            target="_blank"
            rel="noreferrer"
            className="product-enquire-link"
          >
            {t.enquire} <Icon name="arrow" size={17} />
          </a>
          <Link
            href={`/product/${product.slug}`}
            className="product-view-link"
          >
            {t.viewDetails}
          </Link>
        </div>
      </div>
    </article>
  );
}
