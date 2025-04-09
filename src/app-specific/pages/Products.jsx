import { Filters, PaginationContainer, ProductContainer } from '../sections';

export const loader = ({ request }) => {
  return null;
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
