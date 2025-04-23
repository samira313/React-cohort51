import '../styles/ProductList.css';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id} product={product} />

        ))}  
    </div>
  );
}

export default ProductList;
