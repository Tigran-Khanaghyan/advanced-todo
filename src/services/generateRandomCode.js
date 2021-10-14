export function generateRandomCode() {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min + 1);
  };
  const capcha = [];
  const alphabet = "ABCDEFGHIJKLMNOP";
  const numbers = "0123456789";
  for (let i = 0; i < 2; ++i) {
    let randomIndex = randomNumber(0, alphabet.length - 1);
    capcha.push(alphabet[randomIndex]);
  }
  for (let i = 0; i < 4; ++i) {
    let randomIndex = randomNumber(0, numbers.length - 1);
    capcha.push(numbers[randomIndex]);
  }
  return capcha;
}