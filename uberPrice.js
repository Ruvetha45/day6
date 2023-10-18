

class UberPriceCalculator {
  calculatePrice(distanceInKm) {
    // logic is calculate the price based on the distance in km
    if (distanceInKm <= 5) {
      return 10; // 10rupees for the first 5 kilometers
    } else {
      return 10 + (distanceInKm - 5) * 2; // 2rupees for each additional kilometer after the first 5 kilometers
    }// 10 + [(8-5) * 2 ] => 10+6=16
  }
}

const calculator = new UberPriceCalculator();
const distance = 8; 
const price = calculator.calculatePrice(distance);
console.log(`The Uber price for a ${distance} km ride is ${price} Rupees.`);