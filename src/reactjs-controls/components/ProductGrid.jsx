import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = useLoaderData();
  return (
    <div className='pt=12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <ProductCard
            link={`/products/${product.id}`}
            key={product.id}
            title={title}
            price={price}
            image={image}
          />
        );
      })}
    </div>
  );
};
export default ProductGrid;
