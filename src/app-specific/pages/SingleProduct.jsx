import { useLoaderData, Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../features/cart/cartSlice';
import { formatPrice, generateIntegerOptions } from '../../reusable/utils';
import { customFetch } from '../utils';

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data, productId: params.id };
  };

const SingleProduct = () => {
  const { product, productId } = useLoaderData();
  const { title, price, image, description, colors, company } =
    product.attributes;
  const formattedPrice = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    const value = parseInt(e.target.value);
    setAmount(value);
  };

  const cartProduct = {
    cartId: product.id + productColor,
    productId: product.id,
    title,
    price,
    image,
    company,
    amount,
    productColor,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  const amountOptions = generateIntegerOptions(1, 5);

  return (
    <>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to={`/product/${productId}`}>{title}</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCTS */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>
          <p className='mt-3 text-xl'>{formattedPrice}</p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* COLORS */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              Colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => (
                <button
                  key={color}
                  type='button'
                  className={`badge h-6 w-6 mr-2 ${
                    color === productColor && 'border-2 border-secondary'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              ))}
            </div>
          </div>
          {/* AMOUNT */}
          <div className='mt-6 first-line:form-control w-full max-w-xs'>
            <label htmlFor='amount' className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize mb-2'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              id='amount'
              value={amount}
              onChange={handleAmount}
            >
              {amountOptions}
            </select>
          </div>
          {/* CART BUTTON */}
          <div className='mt-10'>
            <button className='btn btn-secondary btn-md' onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
