 import { useState } from "react";
import "./Navbar.css";

function Navbar({
  lang,
  setLang,
  setSelectedCategory,
  setShowProducts,
  brand,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const labels = {
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      reviews: "الآراء",
      all: "الكل",
      jeans: "جينز",
      shoes: "أحذية",
      accessories: "إكسسوارات",
      clothes: "ملابس",
      sac: "حقائب",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      reviews: "Avis",
      all: "Tous",
      jeans: "Jeans",
      shoes: "Chaussures",
      accessories: "Accessoires",
      clothes: "Vêtements",
      sac: "Sacs",
    },
    en: {
      home: "Home",
      about: "About",
      reviews: "Reviews",
      all: "All",
      jeans: "Jeans",
      shoes: "Shoes",
      accessories: "Accessories",
      clothes: "Clothes",
      sac: "Bags",
    },
  };

  const t = labels[lang];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowProducts(true);
    setTimeout(() => {
      const section = document.getElementById("products-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 120);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-brand">{brand}</div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          {t.home}
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          {t.about}
        </a>
        <a href="#reviews" onClick={() => setMenuOpen(false)}>
          {t.reviews}
        </a>
      </nav>

      <div className="nav-actions">
        <select
          className="nav-select"
          onChange={(e) => handleCategoryClick(e.target.value)}
          defaultValue="all"
        >
          <option value="all">{t.all}</option>
          <option value="jeans">{t.jeans}</option>
          <option value="shoes">{t.shoes}</option>
          <option value="accessories">{t.accessories}</option>
          <option value="clothes">{t.clothes}</option>
          <option value="sac">{t.sac}</option>
        </select>

        <select
          className="nav-select"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="ar">AR</option>
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
      </div>
    </header>
  );
}

export default Navbar;