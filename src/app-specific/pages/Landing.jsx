import Hero from '../sections/Hero';
import { customFetch } from '../utils';
import FeaturedProducts from '../sections/FeaturedProducts';

const featuredProductsPath = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(featuredProductsPath);
  const products = response.data.data;
  return products;
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
