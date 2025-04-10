import { useLoaderData } from 'react-router-dom';
import ProductRow from '../../reusable/components/ProductRow';
import { formatPrice } from '../../reusable/utils';

const ProductList = () => {
  const { products } = useLoaderData();
  return (
    <div className='mt=12 grid gap-y-8'>
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const formattedPrice = formatPrice(price);
        return (
          <ProductRow
            to={`/product/${product.id}`}
            key={product.id}
            title={title}
            company={company}
            price={formattedPrice}
            image={image}
          />
        );
      })}
    </div>
  );
};
export default ProductList;
