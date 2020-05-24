const monthlyRent = 500;

yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const firstName = "Rich";
const lastName = "Brian";

const sentence = "Hello " + firstName + " " + lastName + "! How are you?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you?`;

console.log(sentence);
console.log(sentenceWithTemplate);

const skyIsBlue = false;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}

const char = "f";
const timesToRepeat = 5;
let answer = "";

for (let i = 1; i <= timesToRepeat; i++) {
  answer += char;
}
console.log(answer);
