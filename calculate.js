const cartAmount = 16554;
const numOfItems = 5;
const promoCode = null;

discountCartAmount = cartAmount;

function calculate(cartAmount, numOfItems, promoCode) {
  if (promoCode === "ДАРИМ300") {
    discountCartAmount = cartAmount - 300;
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
    //discountCartAmount = cartAmount - ((cartAmount - 50000) / 100) * 20;
  }
  if (promoCode === "СКИДКА15" && discountCartAmount >= 20000) {
    discountCartAmount = discountCartAmount - (discountCartAmount / 100) * 15;
  }
}

/*
function calculate(cartAmount, numOfItems, promoCode) {
    for (const discountCartAmount = 0; discountCartAmount++) {
        if (promoCode === "ДАРИМ300") {
            cartAmount - 300; //прописать ограничение для 0
            discountCartAmount++
        }
        if (numOfItems >= 10) {
            cartAmount = cartAmount - (cartAmount / 100) * 5;
            discountCartAmount++
        }
        if (cartAmount > 50000) {
            cartAmount = cartAmount - ((cartAmount - 50000) / 100) * 20;
            discountCartAmount++
        }
    }
}
*/
