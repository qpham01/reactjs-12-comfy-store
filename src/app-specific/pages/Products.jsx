import { Filters, PaginationContainer, ProductContainer } from '../sections';
import { customFetch } from '../utils';

const productsPath = '/products';

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? '',
      company ?? '',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(productsPath, { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    const entries = [...searchParams.entries()];
    const params = Object.fromEntries(entries);
    console.log(params);
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
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
