import { SectionTitle } from '../reactjs-controls/components';
import { ProductGrid } from '../reactjs-controls/components';

const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
      <SectionTitle title='featured products' />
      <ProductGrid />
    </div>
  );
};
export default FeaturedProducts;
