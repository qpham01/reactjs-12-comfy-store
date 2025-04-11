import { Filters, PaginationContainer, ProductContainer } from '../sections';
import { customFetch } from '../utils';

const productsPath = '/products';

export const loader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const entries = [...searchParams.entries()];
  const params = Object.fromEntries(entries);
  console.log(params);
  const response = await customFetch(productsPath, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
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
