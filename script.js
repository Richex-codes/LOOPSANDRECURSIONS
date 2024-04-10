function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function clothingAdviser() {
  // Ask the user for the current temperature
  const temperature = parseFloat(
    prompt("What is the current temperature in Celsius?")
  );

  // Ask the user if it's raining
  const isRaining = prompt("Is it raining? (yes/no)").toLowerCase();

  // Check temperature and raining status to provide clothing advice
  if (temperature >= 25) {
    if (isRaining === "yes") {
      console.log("It's hot and raining. Wear a light rain jacket and shorts.");
    } else {
      console.log(
        "It's hot. Wear light and breathable clothing such as shorts and a t-shirt."
      );
    }
  } else if (temperature >= 15) {
    if (isRaining === "yes") {
      console.log("It's cool and raining. Wear a rain jacket and jeans.");
    } else {
      console.log(
        "It's cool. Wear jeans and a long-sleeve shirt or light jacket."
      );
    }
  } else {
    if (isRaining === "yes") {
      console.log(
        "It's cold and raining. Wear a waterproof jacket, jeans, and a sweater."
      );
    } else {
      console.log(
        "It's cold. Wear warm clothing such as a sweater, jacket, and long pants."
      );
    }
  }
}

// RECURSIONS

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return base;
  } else {
    return base * power(base, exponent - 1);
  }
}
