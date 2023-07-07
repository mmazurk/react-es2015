import { remove, choice } from "./helpers";
import foods from "./foods";

let randomFruit = choice(foods);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
remove(foods, randomFruit);
let fruitsLeft = foods.length;
console.log(`I'm sorry we're all out. We have ${fruitsLeft} left.`);
