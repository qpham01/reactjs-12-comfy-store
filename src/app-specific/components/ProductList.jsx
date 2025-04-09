import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../reusable/components/ProductCard';
import { formatPrice } from '../../reusable/utils';

const ProductList = () => {
  const { products } = useLoaderData();
  return (
    <div className='mt=12 grid gap-y-8'>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const formattedPrice = formatPrice(price);
        return (
          <ProductCard
            link={`/product/${product.id}`}
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
export default ProductList;
