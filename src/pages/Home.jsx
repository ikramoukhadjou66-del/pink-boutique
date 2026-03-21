import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Pyjama Rose",
    price: 199,
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Lingerie Set",
    price: 149,
    image: "https://via.placeholder.com/300",
  },
];

function Home() {
  return (
    <div>
      <h1>Welcome to Pink Fashion 💖</h1>

      <div className="products">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;