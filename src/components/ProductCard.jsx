 import { useState } from "react";

const GOOGLE_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSfjE2tQgNEtxdamGxaJ_zLyCQhLiGjh_KxGMemR4yMK2dJbhA/viewform";

const WHATSAPP_NUMBER = "212760959506";

function ProductCard({ product, lang }) {
  const colors = Array.isArray(product.colors) ? product.colors : [];
  const sizes = Array.isArray(product.sizes) ? product.sizes : [];

  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  const [selectedCity, setSelectedCity] = useState("meknes");

  const rawPrice =
    parseInt(String(product.price).replace(/[^\d]/g, ""), 10) || 0;

  const labels = {
    ar: {
      chooseColor: "اختار اللون",
      chooseSize: "اختار المقاس",
      insideMeknes: "داخل مكناس",
      outsideMeknes: "خارج مكناس",
      price: "الثمن:",
      deliveryTime: "مدة التوصيل:",
      orderForm: "طلب عبر الفورم 📝",
      category: "الفئة",
      color: "اللون",
      size: "المقاس",
      city: "المدينة",
      cityMeknes: "مكناس",
      cityOutside: "خارج مكناس",
      whatsappMessage: "سلام، بغيت نطلب هاد المنتوج 💖",
      productAlt: "product",
    },
    fr: {
      chooseColor: "Choisir la couleur",
      chooseSize: "Choisir la taille",
      insideMeknes: "À Meknès",
      outsideMeknes: "Hors Meknès",
      price: "Prix :",
      deliveryTime: "Délai :",
      orderForm: "Commander via formulaire 📝",
      category: "Catégorie",
      color: "Couleur",
      size: "Taille",
      city: "Ville",
      cityMeknes: "Meknès",
      cityOutside: "Hors Meknès",
      whatsappMessage: "Bonjour, je veux commander ce produit 💖",
      productAlt: "produit",
    },
    en: {
      chooseColor: "Choose color",
      chooseSize: "Choose size",
      insideMeknes: "Inside Meknes",
      outsideMeknes: "Outside Meknes",
      price: "Price:",
      deliveryTime: "Delivery time:",
      orderForm: "Order with form 📝",
      category: "Category",
      color: "Color",
      size: "Size",
      city: "City",
      cityMeknes: "Meknes",
      cityOutside: "Outside Meknes",
      whatsappMessage: "Hello, I want to order this product 💖",
      productAlt: "product",
    },
  };

  const t = labels[lang] || labels.ar;

  const cityLabel =
    selectedCity === "meknes" ? t.cityMeknes : t.cityOutside;

  const message = `${t.whatsappMessage}
${t.category}: ${product.category || ""}
${t.price} ${rawPrice} dh
${t.color}: ${selectedColor || "-"}
${t.size}: ${selectedSize || "-"}
${t.city}: ${cityLabel}
${t.deliveryTime} 48h - 4 days`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="card card-animated">
      <div className="card-image-wrap">
        <img src={product.image} alt={t.productAlt} />
      </div>

      <div className="card-body">
        <span className="product-category">{product.category}</span>

        <p className="price">{rawPrice}dh</p>

        <div className="selectors">
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="">{t.chooseColor}</option>
            {colors.map((color, i) => (
              <option key={i} value={color}>
                {color}
              </option>
            ))}
          </select>

          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">{t.chooseSize}</option>
            {sizes.map((size, i) => (
              <option key={i} value={size}>
                {size}
              </option>
            ))}
          </select>

          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="meknes">{t.insideMeknes}</option>
            <option value="outside">{t.outsideMeknes}</option>
          </select>
        </div>

        <div className="delivery-info">
          <p>
            <strong>{t.price}</strong> {rawPrice}dh
          </p>

          <p>
            <strong>{t.deliveryTime}</strong> 48h - 4 days
          </p>
        </div>

        <div className="card-buttons">
          <a href={GOOGLE_FORM_LINK} target="_blank" rel="noreferrer">
            <button className="secondary-btn">{t.orderForm}</button>
          </a>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button className="primary-btn">WhatsApp 💬</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;