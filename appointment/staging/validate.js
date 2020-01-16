function validateCard(cardNumber) {
    // remove any spaces between numbers
    cardNumber = cardNumber.replace(/ /g, '');
    validateCardType(cardNumber);
    validateCardNumber(cardNumber);
}
  
  // validates the card type
function validateCardType(cardNumber) {
    var isAmex = cardNumber.startsWith("34") ||
            cardNumber.startsWith("37");
    var isDiscover = cardNumber.startsWith("6011");
    var isMasterCard = cardNumber.startsWith("51") ||
            cardNumber.startsWith("52") ||
            cardNumber.startsWith("53") ||
            cardNumber.startsWith("54") ||
            cardNumber.startsWith("55");
    var isVisa = cardNumber.startsWith("4");

    if (isAmex === true) {
        cardType.innerText = "Amex";
    } else if (isDiscover === true) {
        cardType.innerText = "Discover";
    } else if (isMasterCard === true) {
        cardType.innerText = "Master Card";
    } else if (isVisa === true) {
        cardType.innerText = "Visa";
    } else {
        cardType.innerText = "Unknown";
    }
}
  
  // validates the card number using the luhn algorithm
  function validateCardNumber(cardNumber) {
    // adjust for zero-based array
    var lastNumber = cardNumber.length - 1;
    
    // store each number independently
    var cardNumbers = [];
    for (var i = 0; i < cardNumber.length; i++) {
      cardNumbers[i] = cardNumber[i];
    }
    
    // loop backward through the number and double
    // every other number
    for (var j = lastNumber - 1; j >= 0; j = j - 2) {
      // double the number and check to see if the number
      // is a double digit
      var newNumber = cardNumbers[j] * 2;
      if (newNumber > 9) {
        // in this case the first number is always 1
        var firstNumber = 1;
        var secondNumber = newNumber % 10;
        
        // add the 2 numbers together
        newNumber = firstNumber + secondNumber;
      }
      
      // put the new number back into the numbers array
      cardNumbers[j] = newNumber;
    }
    
    // add all of the numbers together
    var numbersTotal = 0;
    for (var k = 0; k < cardNumbers.length; k++) {
      numbersTotal += parseInt(cardNumbers[k]);
    }
    
    // check to see if the number is valid
    if (numbersTotal % 10 === 0) {
      cardValid.innerText = "Valid Card";
    } else {
      cardValid.innerText = "Invalid Card";
    }
  }

// run function to test if card is valid when user leaves the credit card field 

// submit button doesn't appear until credit card is proven to be valid
//or 
//form doesn't submit until card is proven to be valid
