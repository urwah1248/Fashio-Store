export const subTotalPrice = (cartItems: any) => {
  let total = 0;

  for (const product of cartItems) {
    total += product.price;
  }

  return total;
};
