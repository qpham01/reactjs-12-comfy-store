export const formatPrice = (price) => {
  const dollarsAmount = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateIntegerOptions = (start, number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + start;
    return (
      <option amount={amount} key={amount}>
        {amount}
      </option>
    );
  });
};
