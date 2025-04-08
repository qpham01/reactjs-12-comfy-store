import { SectionTitle } from '../../reusable/components';
import { ProductGrid } from '../components';

const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
      <SectionTitle title='featured products' />
      <ProductGrid />
    </div>
  );
};
export default FeaturedProducts;
