import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../reusable/components/ProductCard';
import { formatPrice } from '../../reusable/utils';
const ProductGrid = () => {
  const products = useLoaderData();
  return (
    <div className='pt=12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const formattedPrice = formatPrice(price);
        return (
          <ProductCard
            link={`/products/${product.id}`}
            key={product.id}
            title={title}
            price={formattedPrice}
            image={image}
          />
        );
      })}
    </div>
  );
};
export default ProductGrid;
