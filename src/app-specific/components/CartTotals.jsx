import { useSelector } from 'react-redux';
import { formatPrice } from '../../reusable/utils';

const CartTotals = () => {
  const { itemCost, shippingCost, taxCost, totalCost } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        <p className='flex justify-between text-xs border-b border-base-400 pb-2'>
          <span>Item Cost</span>
          <span className='font-medium'>{formatPrice(itemCost)}</span>
        </p>
        <p className='flex justify-between text-xs border-b border-base-400 pb-2'>
          <span>Shipping</span>
          <span>{formatPrice(shippingCost)}</span>
        </p>
        <p className='flex justify-between text-xs border-b border-base-400 pb-2'>
          <span>Tax</span>
          <span>{formatPrice(taxCost)}</span>
        </p>
        <p className='flex justify-between text-sm pb-2 mt-2'>
          <span>Total</span>
          <span>{formatPrice(totalCost)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
