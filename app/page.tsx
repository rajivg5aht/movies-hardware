"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Icon } from "@/components/ui/Icon";
import { categories } from "@/data/categories";
import { products, getFeaturedProducts } from "@/data/products";
import { faqs } from "@/data/faqs";
import { siteConfig, whatsappLink } from "@/data/site";
import { ProductCard } from "@/components/products/ProductCard";
import { CategoryCard } from "@/components/products/CategoryCard";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All products");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [requestSent, setRequestSent] = useState(false);
  
  const { isNepali } = useLanguage();
  
  const t = isNepali ? {
    home: "होम", products: "उत्पादन", brands: "ब्रान्ड", about: "हाम्रो बारेमा", why: "हामीलाई किन रोज्ने", contact: "सम्पर्क", enquire: "सोधपुछ गर्नुहोस्", explore: "उत्पादन हेर्नुहोस्", heroEyebrow: "जगाती, भक्तपुरमा विश्वसनीय स्थानीय आपूर्तिकर्ता", hero: "प्लम्बिङ, सेनिटरी र निर्माणका लागि आवश्यक सबै सामग्री", heroBody: "पाइप र फिटिङदेखि सेनिटरीवेयर, बाथरुम फिटिङ, टायल्स, वाटर पम्प र मेसिनरीसम्म — आवश्यक उत्पादनहरू एकै ठाउँमा खोज्नुहोस्।", location: "जगाती, भक्तपुर", categories: "हाम्रा उत्पादनहरू हेर्नुहोस्", categoryBody: "घर, निर्माण परियोजना, प्लम्बिङ कार्य र पेशागत आवश्यकताका लागि गुणस्तरीय सामग्री।", view: "वर्ग हेर्नुहोस्", featured: "छनोटका उत्पादनहरू", featuredBody: "घर होस् वा साइट — आफ्नो आवश्यकताको लागि सामग्री पत्ता लगाउनुहोस्।", help: "सही उत्पादन खोज्न सहयोग चाहिन्छ?", helpBody: "तपाईंको कामबारे केही जानकारी दिनुहोस्। हामीलाई तपाईंको लागि सही दिशामा लैजान চিহ্নিত गर्नुहोस्।", know: "मलाई के चाहिन्छ थाहा छ", find: "उत्पादन खोज्न सहयोग चाहिन्छ", trust: "स्थानीय अनुभव, स्पष्ट सहयोग", trustBody: "हामीले चाहिने सामग्री र सम्बन्धित सहयोग सजिलै पाउन सकियोस् भन्नेमा ध्यान दिन्छौँ।", journey: "सानो प्लम्बिङ पसलदेखि पूर्ण निर्माण तथा प्लम्बिङ आपूर्तिकर्तासम्म", pros: "ठेकेदार, प्लम्बर र निर्माण पेशेवरका लागि", prosBody: "आफ्नो परियोजनाको आवश्यकता पठाउनुहोस्। हामी सामग्री विकल्प, मात्रा र उपलब्धता जाँच्न सहयोग गर्छौँ।", send: "आवश्यकता पठाउनुहोस्", large: "ठूलो आवश्यकताका लागि?", largeBody: "आफ्नो परियोजनाको विवरण दिनुहोस् र हामीसँग कुरा सुरु गर्नुहोस्।", formName: "तपाईंको नाम", formPhone: "फोन / ह्वाट्सएप", formNeed: "तपाईंलाई के चाहिन्छ?", formQty: "अनुमानित मात्रा", formMessage: "थप विवरण", submit: "ह्वाट्सएपमा सोधपुछ पठाउनुहोस्", faq: "सोधिने प्रश्नहरू", visit: "हाम्रो स्टोरमा आउनुहोस्", directions: "बाटो पत्ता लगाउनुहोस्", call: "फोन गर्नुहोस्", chat: "ह्वाट्सएपमा कुरा गर्नुहोस्", footer: "प्लम्बिङ, सेनिटरी, बाथरुम फिटिङ, टायल्स, पम्प, मेसिनरी र निर्माण-सम्बन्धित उत्पादनहरू।"
  } : {
    home: "Home", products: "Products", brands: "Brands", about: "About Us", why: "Why Choose Us", contact: "Contact", enquire: "Enquire now", explore: "Explore products", heroEyebrow: "A trusted local supplier in Jagati, Bhaktapur", hero: "Everything you need for plumbing, sanitary & construction", heroBody: "From pipes and fittings to sanitaryware, bathroom fittings, tiles, water pumps and machinery — find the products your project needs in one helpful place.", location: "Jagati, Bhaktapur", categories: "Explore our products", categoryBody: "Quality products for homes, construction projects, plumbing work and professional requirements.", view: "View category", featured: "Featured for your project", featuredBody: "Find considered product ranges for the home, workshop or site.", help: "Need help finding the right product?", helpBody: "Tell us a little about the job. We’ll help point you in the right direction.", know: "I know what I need", find: "Help me find a product", trust: "Local knowledge, helpful service", trustBody: "We focus on making it simpler to find what you need and get practical guidance when you need it.", journey: "From a small plumbing store to a complete construction & plumbing supplier", pros: "For contractors, plumbers & construction professionals", prosBody: "Send your project requirement. We can help you check material options, quantities and availability.", send: "Send your requirement", large: "Have a large requirement?", largeBody: "Share a few project details and start a conversation with our team.", formName: "Your name", formPhone: "Phone / WhatsApp", formNeed: "What do you need?", formQty: "Approximate quantity", formMessage: "Anything else we should know?", submit: "Send enquiry on WhatsApp", faq: "Frequently asked questions", visit: "Visit our store", directions: "Get directions", call: "Call us", chat: "Chat on WhatsApp", footer: "Plumbing, sanitary, bathroom fittings, tiles, pumps, machinery and construction-related products."
  };

  const visibleCategories = showAll ? categories : categories.slice(0, 6);
  const featuredProds = getFeaturedProducts().slice(0, 4);

  const submitRequirement = (event: FormEvent<HTMLFormElement>) => { 
    event.preventDefault(); 
    const fields = new FormData(event.currentTarget); 
    const message = `Hello, I have a project requirement.\n\nName: ${fields.get("name")}\nPhone: ${fields.get("phone")}\nNeed: ${fields.get("need")}\nQuantity: ${fields.get("quantity")}\nDetails: ${fields.get("message")}`;
    setRequestSent(true); 
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer"); 
  };

  return <main>
    <SiteHeader />
    
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="shell hero-content">
        <div className="hero-copy">
          <p className="eyebrow light-eyebrow"><span /> {t.heroEyebrow}</p>
          <h1>{t.hero}</h1>
          <p className="hero-text">{t.heroBody}</p>
          <div className="hero-actions">
            <Link href="/products" className="button button-copper">{t.explore} <Icon name="arrow" size={18} /></Link>
            <a className="button button-outline-light" href={whatsappLink("Hello, I would like to enquire about a product.")} target="_blank" rel="noreferrer"><Icon name="message" size={19} /> {t.enquire}</a>
          </div>
          <a className="hero-location" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer"><span><Icon name="pin" size={17} /></span>{siteConfig.location}<Icon name="arrow" size={16} /></a>
        </div>
        <div className="hero-media" aria-label="Modern sanitaryware and fittings collection">
          <div className="hero-image-main" />
          <div className="hero-image-detail" />
          <div className="hero-label"><span>Since</span><strong>2060 <small>B.S.</small></strong><p>Built through trust</p></div>
          <div className="hero-products-note"><Icon name="layers" size={19} /><span>Bathroom fittings<br /><strong>• Pipes • Tiles • Pumps</strong></span></div>
        </div>
      </div>
    </section>
    
    <section className="quick-find shell" aria-label="Product finder">
      <div className="quick-find-intro">
        <span className="finder-icon"><Icon name="search" size={22} /></span>
        <div><strong>{t.help}</strong><p>{t.helpBody}</p></div>
      </div>
      <div className="quick-find-actions">
        <Link href="/products" className="quick-button active"><Icon name="layers" size={19} /> {t.know}<Icon name="arrow" size={17} /></Link>
        <Link href="/enquire" className="quick-button"><Icon name="message" size={19} /> {t.find}<Icon name="arrow" size={17} /></Link>
      </div>
    </section>

    <section className="section categories-section" id="products">
      <div className="shell">
        <div className="section-heading heading-row">
          <div><p className="eyebrow">PRODUCT RANGE</p><h2>{t.categories}</h2><p>{t.categoryBody}</p></div>
          <Link href="/products" className="text-link desktop-only">View all categories <Icon name="arrow" size={18} /></Link>
        </div>
        <div className="category-grid">
          {visibleCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <Link href="/products" className="text-link mobile-only show-categories">View all categories <Icon name="arrow" size={18} /></Link>
      </div>
    </section>

    <section className="section featured-section" id="featured">
      <div className="shell">
        <div className="featured-top">
          <div className="section-heading compact"><p className="eyebrow">READY TO EXPLORE</p><h2>{t.featured}</h2><p>{t.featuredBody}</p></div>
        </div>
        <div className="product-grid">
          {featuredProds.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="catalogue-foot">
          <p><span><Icon name="check" size={15} /></span> Product availability and pricing can vary by size, specification and quantity.</p>
          <a className="text-link" href={whatsappLink("Hello, I would like to see more product options.")} target="_blank" rel="noreferrer">Ask for more options <Icon name="arrow" size={17} /></a>
        </div>
      </div>
    </section>

    <section className="brands-section" id="brands">
      <div className="shell brands-layout">
        <div className="section-heading compact"><p className="eyebrow">OUR PRODUCT NETWORK</p><h2>Brands we work with</h2><p>Recognisable product ranges from brands available through our store.</p></div>
        <div className="brand-cards">
          <div className="brand-card"><strong>nepa<span>top</span></strong><small>Pipes &amp; fittings</small></div>
          <div className="brand-card tata"><strong>TATA</strong><small>Water Pumps</small></div>
          <Link href="/brands" className="brand-placeholder"><Icon name="plus" size={19} /><span>View all<br />brands</span></Link>
        </div>
      </div>
    </section>

    <section className="trust-section section" id="why">
      <div className="shell trust-layout">
        <div className="trust-visual">
          <div className="visual-panel"><p>STARTED SMALL.<br /><span>BUILT THROUGH TRUST.</span></p><div className="visual-years">2060<small>B.S.</small></div></div>
          <div className="trust-photo"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=950&q=85" alt="A bright product showroom interior" loading="lazy" /></div>
        </div>
        <div className="trust-copy">
          <p className="eyebrow">WHY MOVIES</p><h2>{t.trust}</h2><p className="large-body">{t.trustBody}</p>
          <div className="reason-list">
            <div><span><Icon name="shield" size={22} /></span><p><strong>Established since 2060 B.S.</strong><small>A long-running local business serving growing customer needs.</small></p></div>
            <div><span><Icon name="layers" size={22} /></span><p><strong>Wide, practical product range</strong><small>From plumbing essentials to finishes, fittings, pumps and machinery.</small></p></div>
            <div><span><Icon name="building" size={22} /></span><p><strong>For homes and project sites</strong><small>Useful for homeowners, plumbers, contractors and construction professionals.</small></p></div>
          </div>
          <Link href="/about" className="text-link">Read our story <Icon name="arrow" size={18} /></Link>
        </div>
      </div>
    </section>

    <section className="journey-section" id="about">
      <div className="shell">
        <div className="journey-heading"><p className="eyebrow light-eyebrow"><span /> OUR JOURNEY</p><h2>{t.journey}</h2></div>
        <div className="timeline">
          <article><span>01</span><small>2060 B.S.</small><h3>Business established</h3><p>A small store began with a focus on plumbing products.</p></article>
          <article><span>02</span><small>THE START</small><h3>NPR 50,000 initial capital</h3><p>Built with a modest beginning and a focus on serving customers well.</p></article>
          <article><span>03</span><small>GROWING WITH NEEDS</small><h3>More for every project</h3><p>The product range grew naturally as customer requirements expanded.</p></article>
          <article><span>04</span><small>TODAY</small><h3>A broader supplier</h3><p>Plumbing, sanitary, fittings, tiles, pumps, machinery and more.</p></article>
        </div>
      </div>
    </section>

    <section className="professional-section">
      <div className="shell professional-inner">
        <div>
          <p className="eyebrow">PROJECT SUPPORT</p><h2>{t.pros}</h2><p>{t.prosBody}</p>
          <div className="professional-list">
            <span><Icon name="check" size={16} /> Product options</span>
            <span><Icon name="check" size={16} /> Quantity checks</span>
            <span><Icon name="check" size={16} /> Availability enquiries</span>
          </div>
        </div>
        <div className="professional-actions">
          <a className="button button-copper" href={whatsappLink("Hello, I have a project requirement. Please help me check materials and quantities.")} target="_blank" rel="noreferrer">{t.send} <Icon name="arrow" size={18} /></a>
          <a className="button button-outline-dark" href={whatsappLink("Hello, I would like to discuss my requirement.")} target="_blank" rel="noreferrer"><Icon name="message" size={19} /> {t.chat}</a>
        </div>
      </div>
    </section>

    <section className="enquiry-section section" id="project-enquiry">
      <div className="shell enquiry-layout">
        <div className="enquiry-copy">
          <p className="eyebrow">BULK &amp; PROJECT ENQUIRY</p><h2>{t.large}</h2><p>{t.largeBody}</p>
          <div className="enquiry-contact">
            <span><Icon name="message" size={22} /></span>
            <div><strong>Prefer WhatsApp?</strong><a href={whatsappLink("Hello, I have a bulk or project requirement.")} target="_blank" rel="noreferrer">Chat with us now <Icon name="arrow" size={15} /></a></div>
          </div>
          <div className="enquiry-image"><img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=85" alt="Materials arranged for a construction project" loading="lazy" /></div>
        </div>
        <form className="enquiry-form" onSubmit={submitRequirement}>
          <div className="form-head"><h3>Tell us what you need</h3><p>Short and simple — we’ll take it from there.</p></div>
          <label>{t.formName}<input required name="name" placeholder="Your name" /></label>
          <label>{t.formPhone}<input required name="phone" type="tel" placeholder="98XXXXXXXX" /></label>
          <label>{t.formNeed}
            <select required name="need" defaultValue="">
              <option value="" disabled>Select a category</option>
              {categories.map((category) => <option key={category.name}>{category.name}</option>)}
            </select>
          </label>
          <label>{t.formQty}<input name="quantity" placeholder="e.g. 50 pieces / 300 ft" /></label>
          <label className="full">{t.formMessage}<textarea name="message" rows={3} placeholder="Product type, preferred brand, project details..." /></label>
          <button className="button button-copper full" type="submit"><Icon name="message" size={19} /> {t.submit}</button>
          {requestSent && <p className="form-success full"><Icon name="check" size={16} /> WhatsApp has opened with your enquiry.</p>}
        </form>
      </div>
    </section>

    <section className="faq-section section">
      <div className="shell faq-layout">
        <div className="section-heading compact">
          <p className="eyebrow">HELPFUL INFORMATION</p><h2>{t.faq}</h2>
          <p>Have another question? A call or WhatsApp message is the fastest way to reach us.</p>
          <Link className="text-link" href="/faq">View all FAQs <Icon name="arrow" size={18} /></Link>
        </div>
        <div className="faq-list">
          {faqs.slice(0, 4).map((faq, index) => (
            <article key={index} className={openFaq === index ? "faq-item open" : "faq-item"}>
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                <span>{faq.question}</span><Icon name={openFaq === index ? "close" : "plus"} size={18} />
              </button>
              <div><p>{faq.answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="location-section" id="contact">
      <div className="shell location-layout">
        <div className="location-copy">
          <p className="eyebrow">FIND US EASILY</p><h2>{t.visit}</h2>
          <h3>Movies Sanitary and Tiles<br />Trade Link</h3>
          <p className="address"><Icon name="pin" size={19} /> {siteConfig.location}</p>
          <div className="location-actions">
            <a className="button button-copper" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer"><Icon name="pin" size={18} /> {t.directions}</a>
            <a className="button button-outline-dark" href={`tel:${siteConfig.phones.primary}`}><Icon name="phone" size={18} /> {t.call}</a>
          </div>
          <div className="number-list">
            <a href={`tel:${siteConfig.phones.primary}`}><small>CALL</small>{siteConfig.phones.primary}</a>
            <a href={`tel:${siteConfig.phones.secondary}`}><small>CALL</small>{siteConfig.phones.secondary}</a>
          </div>
        </div>
        <a className="map-card" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" aria-label="Get directions to Jagati, Bhaktapur">
          <div className="map-grid" /><div className="map-roads road-one" /><div className="map-roads road-two" />
          <div className="map-marker"><span><Icon name="pin" size={24} /></span><strong>Movies Sanitary<br />&amp; Tiles Trade Link</strong><small>Jagati, Bhaktapur</small></div>
          <div className="map-direction">Open in Google Maps <Icon name="arrow" size={17} /></div>
        </a>
      </div>
    </section>

    <section className="contact-strip">
      <div className="shell contact-strip-inner">
        <div><p>Need a product or have a question?</p><strong>Talk to our team today.</strong></div>
        <div>
          <a className="button button-copper" href={whatsappLink("Hello, I would like to enquire about a product.")} target="_blank" rel="noreferrer"><Icon name="message" size={19} /> {t.chat}</a>
          <a className="button button-outline-light" href={`tel:${siteConfig.phones.primary}`}><Icon name="phone" size={19} /> {siteConfig.phones.primary}</a>
        </div>
      </div>
    </section>

    <SiteFooter />
    <FloatingActions />
  </main>;
}
