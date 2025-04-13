import Hero from '../sections/Hero';
import { customFetch } from '../utils';
import FeaturedProducts from '../sections/FeaturedProducts';

const featuredProductsPath = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => {
    return customFetch(featuredProductsPath);
  },
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
