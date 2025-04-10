import { Filters, PaginationContainer, ProductContainer } from '../sections';
import { customFetch } from '../utils';

const productsPath = '/products';

export const loader = async ({ request }) => {
  const response = await customFetch(productsPath);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
