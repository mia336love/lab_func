const cartAmount = 56000;
const numOfItems = 12;
const promoCode = null;

function calculate(cartAmount, numOfItems, promoCode) {
  discountCartAmount = cartAmount;
  if (promoCode === "ДАРИМ300") {
    discountCartAmount = discountCartAmount - 300;
  } else if (promoCode === "ДАРИМ300" && cartAmount < 300) {
    discountCartAmount = 0;
  }
  if (numOfItems >= 10) {
    discountCartAmount = cartAmount - (cartAmount / 100) * 5;
  }
  if (cartAmount > 50000) {
    const difference = discountCartAmount - 50000;
    const discount = (difference / 100) * 20;
    discountCartAmount = difference - discount;
  }
  if (promoCode === "СКИДКА15" && discountCartAmount >= 20000) {
    discountCartAmount = discountCartAmount - (discountCartAmount / 100) * 15;
  }
  console.log("Стоимость: ", discountCartAmount);
}
calculate(cartAmount, numOfItems, promoCode);
