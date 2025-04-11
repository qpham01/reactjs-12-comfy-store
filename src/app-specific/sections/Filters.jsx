import { Form, useLoaderData, Link } from 'react-router-dom';
import { FormInput } from '../../reusable/components';
import FormSelect from '../../reusable/components/FormSelect';
import FormRange from '../../reusable/components/FormRange';
import FormCheckbox from '../../reusable/components/FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, category, company, order, price, shipping } = params;
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        defaultValue={search}
        size='input-sm'
      />
      {/* CATEGORIES */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        defaultValue={category}
        size='select-sm'
      />
      {/* COMPANIES */}
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        defaultValue={company}
        size='select-sm'
      />
      {/* SORT ORDER */}
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        size='select-sm'
      />
      {/* PRICE */}
      <FormRange
        label='select price'
        name='price'
        size='range-sm'
        price={price}
      />
      {/* FREE SHIPPING */}
      <FormCheckbox
        label='free shipping'
        name='shipping'
        size='checkbox-sm'
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};

export default Filters;
