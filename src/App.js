 import { useEffect, useState } from "react";
import Papa from "papaparse";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import "./App.css";
import brand1 from "./assets/brand-1.png";
import brand2 from "./assets/brand-2.png";
import brand3 from "./assets/brand-3.png";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEo0-ZO_afveBtcmj5sC9yBqP3ParQotRqmpnfhoOyjOpmKgMbT9kXxYpblzk-5wyhax8wXECQtFJi/pub?gid=0&single=true&output=csv";

const WHATSAPP_LINK = "https://wa.me/212760959506";

function App() {
  const [products, setProducts] = useState([]);
  const [lang, setLang] = useState("ar");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      complete: (results) => {
        const clean = results.data
          .filter((item) => {
            const visible = (item.visible || "").toLowerCase().trim();
            return item.image && item.price && visible === "yes";
          })
          .map((item) => ({
            image: item.image || "",
            price: item.price || "",
            category: (item.category || "").toLowerCase().trim(),
            colors: item.colors
              ? item.colors.split(",").map((c) => c.trim()).filter(Boolean)
              : [],
            sizes: item.sizes
              ? item.sizes.split(",").map((s) => s.trim()).filter(Boolean)
              : [],
          }));

        setProducts(clean);
      },
    });
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const openShop = () => {
    setShowProducts(true);
    setTimeout(() => {
      const section = document.getElementById("products-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
  };

  const content = {
    ar: {
      brand: "Pink Boutique",
      navShop: "تسوق الآن",
      heroMini: "Pink Boutique",
      heroTitle1: "PINK",
      heroTitle2: "BOUTIQUE",
      heroText:
        "اكتشفي أناقة ناعمة بلمسة عصرية، مع تشكيلة راقية من الملابس، الأحذية، الإكسسوارات والحقائب.",
      explore: "تسوقي الآن",
      whatsapp: "واتساب",
      galleryTitle: "هوية العلامة",
      galleryText:
        "تصميم أنثوي ناعم يعكس روحكي كانثى Pink Boutique بأسلوب راقٍ واحترافي.",
      aboutTitle: "عن المتجر",
      aboutText:
        "Pink Boutique مساحة أنيقة تهتم بالتفاصيل وتقدم اختيارات نسائية راقية تجمع بين البساطة والأنوثة واللمسة العصرية.",
      whyTitle: "لماذا Pink Boutique؟",
      why1Title: "اختيارات راقية",
      why1Text: "كل قطعة يتم اختيارها بعناية لتناسب الذوق الأنثوي الراقي.",
      why2Title: "طلب سهل",
      why2Text: "الطلب متاح بسرعة عبر الفورم أو الواتساب.",
      why3Title: "ستايل مميز",
      why3Text: "تشكيلة ناعمة وعصرية تمنحك إطلالة أنيقة ومختلفة.",
      arrivalsTitle: "التشكيلة الجديدة",
      arrivalsText:
        "اختاري القطعة المناسبة لك بكل سهولة عبر عرض واضح وأنيق.",
      reviewTitle: "آراء الزبونات",
      review1: "عجبني بزاف الستايل ديال الموقع والتنظيم باين احترافي.",
      review2: "الطلب عبر واتساب ساهل والتصميم ديال البراند زوين بزاف.",
      review3: "الإحساس premium حاضر فالهوية والتنسيق كامل.",
      footerText: "متجر نسائي راقٍ للأزياء والإكسسوارات والحقائب.",
      rights: "جميع الحقوق محفوظة",
      revealButton: "عرض المنتجات",
    },
    fr: {
      brand: "Pink Boutique",
      navShop: "Acheter",
      heroMini: "Pink Boutique",
      heroTitle1: "PINK",
      heroTitle2: "BOUTIQUE",
      heroText:
        "Découvrez une élégance douce et moderne avec une sélection raffinée de vêtements, chaussures, accessoires et sacs.",
      explore: "Acheter maintenant",
      whatsapp: "WhatsApp",
      galleryTitle: "Identité de la marque",
      galleryText:
        "Un univers féminin et premium qui reflète l’esprit raffiné de Pink Boutique.",
      aboutTitle: "À propos de la boutique",
      aboutText:
        "Pink Boutique est un espace élégant qui soigne chaque détail et propose des choix féminins raffinés entre simplicité, modernité et élégance.",
      whyTitle: "Pourquoi Pink Boutique ?",
      why1Title: "Sélection raffinée",
      why1Text: "Chaque pièce est choisie avec soin pour un style féminin élégant.",
      why2Title: "Commande facile",
      why2Text: "Passez commande facilement via formulaire ou WhatsApp.",
      why3Title: "Style unique",
      why3Text: "Une collection douce et moderne pour une allure distinguée.",
      arrivalsTitle: "Nouvelle collection",
      arrivalsText:
        "Choisissez facilement vos pièces grâce à une présentation claire et élégante.",
      reviewTitle: "Avis clientes",
      review1: "Le style du site est magnifique et très bien organisé.",
      review2: "Commander via WhatsApp est simple et pratique.",
      review3: "L’identité visuelle donne vraiment une image premium.",
      footerText: "Boutique féminine premium pour vêtements, accessoires et sacs.",
      rights: "Tous droits réservés",
      revealButton: "Voir les produits",
    },
    en: {
      brand: "Pink Boutique",
      navShop: "Shop Now",
      heroMini: "Pink Boutique",
      heroTitle1: "PINK",
      heroTitle2: "BOUTIQUE",
      heroText:
        "Discover soft elegance with a modern touch through a refined selection of clothes, shoes, accessories, and bags.",
      explore: "Shop Now",
      whatsapp: "WhatsApp",
      galleryTitle: "Brand Identity",
      galleryText:
        "A soft feminine premium universe reflecting the refined spirit of Pink Boutique.",
      aboutTitle: "About the Store",
      aboutText:
        "Pink Boutique is an elegant fashion space focused on detail, offering refined feminine choices that blend simplicity, modernity, and style.",
      whyTitle: "Why Pink Boutique?",
      why1Title: "Refined Selection",
      why1Text: "Every piece is chosen carefully for an elegant feminine style.",
      why2Title: "Easy Ordering",
      why2Text: "Order quickly through the form or WhatsApp.",
      why3Title: "Unique Style",
      why3Text: "A soft modern collection for a distinctive look.",
      arrivalsTitle: "New Collection",
      arrivalsText:
        "Choose your favorite pieces easily through a clean and elegant presentation.",
      reviewTitle: "Customer Reviews",
      review1: "The website style looks beautiful and very well organized.",
      review2: "Ordering through WhatsApp is simple and convenient.",
      review3: "The visual identity truly feels premium.",
      footerText: "Premium feminine boutique for clothes, accessories, and bags.",
      rights: "All rights reserved",
      revealButton: "Show Products",
    },
  };

  const t = content[lang];

  return (
    <>
      <Navbar
        lang={lang}
        setLang={setLang}
        setSelectedCategory={setSelectedCategory}
        setShowProducts={setShowProducts}
        brand={t.brand}
      />

      <main className="app">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
        <div className="bg-grid"></div>

        <section className="hero-hush" id="home">
          <div className="hero-text fade-up">
            <span className="hero-mini">{t.heroMini}</span>
            <h1>{t.heroTitle1}</h1>
            <h1>{t.heroTitle2}</h1>
            <p>{t.heroText}</p>

            <div className="hero-buttons">
              <button onClick={openShop}>{t.explore}</button>

              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <button className="outline">{t.whatsapp}</button>
              </a>
            </div>
          </div>

          
         <div className="hero-image float-soft fade-in">
  <div className="butterflies-layer">
    <span className="butterfly butterfly-1">🦋</span>
    <span className="butterfly butterfly-2">🦋</span>
    <span className="butterfly butterfly-3">🦋</span>
    <span className="butterfly butterfly-4">🦋</span>
    <span className="butterfly butterfly-5">🦋</span>
  </div>

  <img src={brand1} alt="Pink Boutique visual" />
</div>
        </section>

        <section className="showcase-strip">
          <div className="showcase-text fade-up">
            <span className="section-tag">{t.galleryTitle}</span>
            <h2>{t.galleryText}</h2>
          </div>

          <div className="showcase-grid">
            <div className="showcase-card fade-up hover-float">
              <img src={brand1} alt="Brand visual 1" />
            </div>
            <div className="showcase-card fade-up delay-1 hover-float">
              <img src={brand2} alt="Brand visual 2" />
            </div>
            <div className="showcase-card fade-up delay-2 hover-float">
              <img src={brand3} alt="Brand visual 3" />
            </div>
          </div>
        </section>

        <section className="about-founder" id="about">
          <div className="about-text fade-up">
            <span className="section-tag">About Brand</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </div>

          <div className="about-img fade-in hover-float">
            <img src={brand2} alt="Brand visual" />
          </div>
        </section>

        <section className="why-us" id="services">
          <div className="section-intro fade-up">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">{t.whyTitle}</h2>
          </div>

          <div className="why-grid">
            <div className="why-card fade-up glow-card">
              <h3>{t.why1Title}</h3>
              <p>{t.why1Text}</p>
            </div>

            <div className="why-card fade-up delay-1 glow-card">
              <h3>{t.why2Title}</h3>
              <p>{t.why2Text}</p>
            </div>

            <div className="why-card fade-up delay-2 glow-card">
              <h3>{t.why3Title}</h3>
              <p>{t.why3Text}</p>
            </div>
          </div>
        </section>

        {!showProducts && (
          <section className="shop-reveal fade-up" id="shop-gate">
            <div className="shop-reveal-box glow-card">
              <span className="section-tag">{t.arrivalsTitle}</span>
              <h2>{t.arrivalsText}</h2>
              <button className="reveal-btn" onClick={openShop}>
                {t.revealButton}
              </button>
            </div>
          </section>
        )}

        {showProducts && (
          <section className="products-section reveal-section" id="products-section">
            <div className="section-intro fade-up">
              <span className="section-tag">New Arrivals</span>
              <h2 className="section-title">{t.arrivalsTitle}</h2>
              <p>{t.arrivalsText}</p>
            </div>

            <div className="products">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} lang={lang} />
              ))}
            </div>
          </section>
        )}

        <section className="testimonials" id="reviews">
          <div className="section-intro fade-up">
            <span className="section-tag">Reviews</span>
            <h2 className="section-title">{t.reviewTitle}</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card fade-up glow-card">
              <p>“{t.review1}”</p>
              <span>— Client 01</span>
            </div>

            <div className="testimonial-card fade-up delay-1 glow-card">
              <p>“{t.review2}”</p>
              <span>— Client 02</span>
            </div>

            <div className="testimonial-card fade-up delay-2 glow-card">
              <p>“{t.review3}”</p>
              <span>— Client 03</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-brand">
            <h3>{t.brand}</h3>
            <p>{t.footerText}</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
          </div>

          <div className="footer-contact">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} {t.brand} — {t.rights}
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;