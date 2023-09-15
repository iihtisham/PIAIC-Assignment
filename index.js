console.log(`This is PIAIC's latest Assignment`);
//Q2
console.log(`Q-2`);
var personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
//Q3
console.log(`Q-3`);
var personName = "John Doe";
console.log(personName.toLowerCase()); // Lowercase
console.log(personName.toUpperCase()); // Uppercase
console.log(personName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() +
    txt.substr(1).toLowerCase())); // Titlecase
//Q4
console.log(`Q-4`);
const famousQuote = 'A person who never made a mistake never tried anything new.';
const author = 'Albert Einstein';
console.log(`${author} once said, "${famousQuote}"`);
//Q5
console.log(`Q-5`);
const famousPerson = 'Albert Einstein';
const message = `${famousPerson} once said, "${famousQuote}"`;
console.log(message);
//Q6
console.log(`Q-6`);
const nameWithWhitespace = " John Doe \t\n";
console.log(`Name with whitespace: "${nameWithWhitespace}"`);
const strippedName = nameWithWhitespace.trim();
console.log(`Stripped name: "${strippedName}"`);
//Q7
console.log(`Q-7`);
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division
//Q8
console.log(`Q-8`);
console.log(5 + 3); // Result: 8
console.log(9 - 1); // Result: 6
console.log(4 * 2); // Result: 8
console.log(16 / 2); // Result: 8
//Q9
console.log(`Q-9`);
const favoriteNumber = 42;
console.log(`My favorite number is ${favoriteNumber}.`);
//Q10
console.log(`Q-10, Add commenting`);
// Exercise 2 - Personal Message for Ahmad
const CpersonName = "Ahmad";
console.log(`Hello ${CpersonName}, would you like to learn some Python today?`);
//Exercise 3 - Name Cases, which will be in lower case,uppar case and title case
const DpersonName = "John Doe";
console.log(DpersonName.toLowerCase()); // Convert to lowercase
console.log(DpersonName.toUpperCase()); // Convert to uppercase
console.log(DpersonName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())); // Convert to titlecase
// Exercise 4 - Famous Quote from a famous person for life
const AfamousQuote = 'If people think you are stupid, Dont open your mouth and convience them';
const Eauthor = 'English Proverb';
console.log(`${Eauthor} is, "${AfamousQuote}"`);
// Exercise 5 - Famous Quote 2 
const AfamousPerson = 'Albert Einstein';
const Emessage = `${AfamousPerson} once said, "${AfamousQuote}"`;
console.log(Emessage);
//Q11
console.log(`Q-11`);
const names = ["Alice", "Bob", "Charlie", "David"];
for (const name of names) {
    console.log(name);
}
//Q12
console.log(`Q-12`);
const array = ["Alice", "Bob", "Charlie", "David"];
const greeting = "Hello,";
for (const name of array) {
    console.log(`${greeting} ${name}!`);
}
///Q13
console.log(`Q-13`);
const transportationModes = ["motorcycle", "car", "bicycle", "train"];
for (const mode of transportationModes) {
    console.log(`I would like to own a ${mode}.`);
}
//Q14
console.log(`Q-14`);
const guestarray = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
for (const guest of guestarray) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
//Q15
console.log(`Q-15`);
const dinnerGuests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
const guestWhoCantMakeIt = dinnerGuests.pop() || ""; // Remove last guest
const newGuest = "Nikola Tesla"; // New guest
dinnerGuests.push(newGuest); // Add new guest to the list
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it.`);
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
//Q16
console.log(`Q-16`);
console.log("Good news! We found a bigger dinner table.");
dinnerGuests.unshift("Isaac Newton"); // Add new guest to the beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Galileo Galilei"); // Add new guest to the middle
dinnerGuests.push("Charles Darwin"); // Add new guest to the end
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
//Q17
console.log(`Q-17`);
console.log("Oops, the new dinner table won't arrive in time. We can only invite two people for dinner.");
while (dinnerGuests.length > 2) {
    const removedGuest = dinnerGuests.pop() || "";
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
//Q18
console.log(`Q-18`);
const placesToVisit = ["Paris", "Tokyo", "Venice", "New York", "Sydney"];
console.log("Original order:");
console.log(placesToVisit.join(", "));
console.log("Alphabetical order:");
console.log(placesToVisit.slice().sort().join(", ")); // Sorting doesn't modify the original array
console.log("Original order after sorting:");
console.log(placesToVisit.join(", "));
console.log("Reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse().join(", "));
console.log("Original order after reverse sorting:");
console.log(placesToVisit.join(", "));
console.log("Reverse the order:");
placesToVisit.reverse();
console.log(placesToVisit.join(", "));
console.log("Reverse the order again:");
placesToVisit.reverse();
console.log(placesToVisit.join(", "));
console.log("Sort in alphabetical order:");
placesToVisit.sort();
console.log(placesToVisit.join(", "));
console.log("Sort in reverse alphabetical order:");
placesToVisit.sort().reverse();
console.log(placesToVisit.join(", "));
//Q19 
console.log(`Q-19`);
console.log(`We are inviting ${dinnerGuests.length} people to dinner.`);
//Q20
console.log(`Q-20`);
const favoriteItems = ["Mountains", "Rivers", "Countries", "Cities", "Languages"];
console.log(favoriteItems);
//Q21
console.log(`Q-21`);
const favoriteThings = {
    mountains: "Mount Everest",
    rivers: "Nile",
    countries: "Japan",
    cities: "Paris",
    languages: "Spanish",
};
console.log(favoriteThings);
//Q22  International error
console.log(`Q-22, International error`);
const colors = ["red", "blue", "green"];
console.log(colors[5]); // This will produce an index error.
//Q23 Conditional tests
console.log(`Q-23, Conditional tests`);
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford'); // True
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False
console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford'); // True
console.log("Is 5 > 3? I predict True.");
console.log(5 > 3); // True
console.log("Is 10 < 2? I predict False.");
console.log(10 < 2); // False
//Q24 More conditional tests
console.log(`Q-24, More conditional tests`);
// Tests for equality and inequality with strings
console.log("apple" == "apple"); // True
console.log("banana" == "banana"); // True
// Tests using the lower case function
console.log("Hello".toLowerCase() === "hello"); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(10 === 10); // True
console.log(5 == 5); // True
console.log(8 > 6); // True
console.log(3 < 1); // False
console.log(7 >= 7); // True
console.log(4 <= 3); // False
// Tests using "and" and "or" operators
console.log(true && true); // True
console.log(true || false); // True
// Test whether an item is in an array
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // True
// Test whether an item is not in an array
console.log(!fruits.includes("orange")); // True
//Q25 Alien color#1
console.log(`Q-25- Alien color1`);
const alienColor1 = 'green';
if (alienColor1 === 'green') {
    console.log('The player just earned 5 points.');
}
// The above code will pass the if test and print the message.
//Q26 Alien color#2
console.log(`Q-26, Alien color2`);
const alienColor2 = 'red';
if (alienColor2 === 'green') {
    console.log('The player just earned 5 points for shooting the alien.');
}
else {
    console.log('The player just earned 10 points.');
}
//Q27 Alien color#3
console.log(`Q-27, Alien color3`);
const alienColor = 'yellow';
if (alienColor === 'green') {
    console.log('The player earned 5 points.');
}
else if (alienColor === 'yellow') {
    console.log('The player earned 10 points.');
}
else if (alienColor === 'red') {
    console.log('The player earned 15 points.');
}
//Q28 Stages of life
console.log(`Q-28, Stages of life`);
const age = 25;
if (age < 2) {
    console.log('The person is a baby.');
}
else if (age >= 2 && age < 4) {
    console.log('The person is a toddler.');
}
else if (age >= 4 && age < 13) {
    console.log('The person is a kid.');
}
else if (age >= 13 && age < 20) {
    console.log('The person is a teenager.');
}
else if (age >= 20 && age < 65) {
    console.log('The person is an adult.');
}
else {
    console.log('The person is an elder.');
}
//Q29 Favorite Fruits:
console.log(`Q-29, Favorite fruits`);
const favorite_fruits = ["banana", "apple", "mango", "orange", "strawberry"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
//Q30  Hello Admin:
console.log(`Q-30`);
const usernames = ["admin", "eric", "john", "alice", "bob"];
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Q31 No Users:
console.log(`Q-31, No Username`);
const Cusernames = []; // Empty array
if (Cusernames.length === 0) {
    console.log("We need to find some users!");
}
Cusernames.push("admin"); // Adding "admin" back to the array
for (const username of Cusernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Q32 Checking Usernames:
console.log(`Q-32`);
const current_users = ["John", "Alice", "Bob", "Eric", "Megan"];
const new_users = ["Alice", "Tom", "Sara", "John", "Chris"];
for (const new_user of new_users) {
    const usernameExists = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());
    if (usernameExists) {
        console.log(`Sorry, ${new_user} is not available. Please choose a different username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
}
//Q33 Ordinal Numbers:
console.log(`Q-33, Ordinal Numbers`);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let ordinal = "";
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
//Q34  Pizzas:
console.log(`Q-34, Pizzas`);
const favorite_pizzas = ["pepperoni", "margherita", "hawaiian"];
for (const pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
//Q35 Animals:
console.log(`Q-35, Animals`);
const animals = ["dog", "cat", "rabbit"];
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
//Q36 T-Shirt
console.log(`Q-36, T-Shirts`);
function make_shirt(size, message) {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}
// Calling make_shirt function
make_shirt("Medium", "Hello, World!");
make_shirt("Large", "I love JavaScript");
//Q37 Large Shirts with Defaults
console.log(`Q-37, L Shirts with defaults`);
function make_shirt_default(size = "Large", message = "I love TypeScript") {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}
// Calling make_shirt_default function
make_shirt_default(); // Large shirt with default message
make_shirt_default("Medium"); // Medium shirt with default message
make_shirt_default("Small", "Custom message"); // Small shirt with custom message
//Q38 Cities
console.log(`Q-38, Cities`);
function describe_city(city, country = "Default Country") {
    console.log(`${city} is in ${country}`);
}
// Calling describe_city function
describe_city("Karachi", "Pakistan");
describe_city("London"); // Uses default country
describe_city("New York", "USA");
// Q39 City Names
console.log(`Q-39, City Names`);
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Calling city_country function
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Sydney", "Australia"));
//Q40 Album
console.log(`Q-40, Album`);
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album dictionaries
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 12));
console.log(make_album("Artist 3", "Album 3"));
// Q41 Magicians
console.log(`Q-41, Magicians`);
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Creating an array of magician's names
const magician_names = ["Magician 1", "Magician 2", "Magician 3"];
// Calling show_magicians function
show_magicians(magician_names);
// Q42 Great Magicians
console.log(`Q-42, Great Magicians`);
function make_great(magicians) {
    const great_magicians = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
// Calling make_great and show_magicians functions
const great_magician_names = make_great(magician_names);
show_magicians(great_magician_names);
//Q43 Unchanged Magicians
console.log(`Q-43, Unchanged Magicians`);
const magician_names_copy = magician_names.slice(); // Create a copy of the original array
// Calling make_great with a copy of the array
const great_magician_names_copy = make_great(magician_names_copy);
// Verify that the original array is unchanged
show_magicians(magician_names);
show_magicians(great_magician_names_copy);
//Q44 Sandwiches
console.log(`Q-44, Sandwiches`);
function order_sandwich(...items) {
    console.log("Sandwich order:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
}
// Calling order_sandwich function
order_sandwich("Ham", "Lettuce", "Tomato");
order_sandwich("Turkey", "Swiss Cheese");
order_sandwich("Peanut Butter", "Jelly", "Banana");
//Q45 Cars
console.log(`Q-45, Cars`);
function car_info(manufacturer, model, ...features) {
    const car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (const feature of features) {
        const [key, value] = feature.split(":");
        car[key] = value;
    }
    return car;
}
// Calling car_info function
const car1 = car_info("Toyota", "Camry", "Color: Red", "Year: 2023");
const car2 = car_info("Honda", "Civic", "Color: Blue", "Year: 2022", "Sunroof: Yes");
console.log(car1);
console.log(car2);
export {};
