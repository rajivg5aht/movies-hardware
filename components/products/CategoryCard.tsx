"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import type { Category } from "@/data/categories";

export function CategoryCard({
  category,
  small = false,
}: {
  category: Category;
  small?: boolean;
}) {
  const { t, isNepali } = useLanguage();

  return (
    <Link
      href={`/products/${category.slug}`}
      className={`products-category-card ${small ? "small-cat-card" : ""}`}
    >
      <img src={category.image} alt={category.name} loading="lazy" />
      <span className="card-overlay" />
      <span className="category-copy">
        <small>{isNepali ? category.nepali : category.name}</small>
        {!small && <strong>{category.description}</strong>}
        <em>
          {t.viewCategory} <Icon name="arrow" size={small ? 14 : 16} />
        </em>
      </span>
    </Link>
  );
}
