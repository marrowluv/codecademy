const kelvin = 293;
// The forecast today is 293 Kelvin

const celsius = kelvin - 273;
// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

let newton = celsius * (33 / 100);

let fahrenheit = celsius * (9 / 5) + 32;
// Calculating celsius to fahrenheit

fahrenheit = Math.floor(fahrenheit);
// Rounding the result

newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);
