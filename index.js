// Create variable of your choice and add values inside.

let animals = "Go to the Zoo!";

// Create an array and add 10 values

let arr = ["hippo", "giraffe", "chicken", "monkey", "elephant"];

// Create an object and add a few values

let zooAnimals = {
  animal: "Hippo",
  name: "Lucy",
  age: 67,
  color: "grey"
};

// In a variable, like the rest of them. Create an array of objects.

let housePets = [
  {
    aniaml: "Cat",
    name: "Sutty",
    age: 11,
    color: "black"
  },
  {
    aniaml: "Dog",
    name: "Chunky",
    age: 5,
    color: "brown"
  }
];

// console.log(housePets);
// console.log(housePets);
//console.log("---------------------------------------------");

housePets.forEach(pets => {
  if (pets.age < 7) {
    //console.log((pets.name += " je"));
  }
});

housePets.map(i => {
  //   console.log(i);
});

let filteredItems = housePets.filter(pet => {
  if (pet.age < 7) {
    return pet.name;
  }
});

//console.log("filteredItems: ", filteredItems);

// Remove item from array
//console.log(animals, arr, zooAnimals);

// Array

let myArray = [];

// Object

let myObject = {};

//////////////////////////////////
/////////// DAY TWO //////////////
//////////////////////////////////

let weather = "Today the weather is";
//console.log(weather);

let weatherTypes = ["sunny", "windy", "rainy"];
//console.log(weatherTypes);

let weatherObject = {
  type: "Sunny",
  temp: "hot",
  place: "Spain"
}

weatherTypes.forEach((i) => {
  let anwers = i;
  anwers += " day";
  // console.log(anwers);
});

let typeOfWeather = [
  {
    name: "hot",
    items: ["sunglasses", "suncream", "ice"],
    month: "July"
  },
  {
    name: "cold",
    items: ["hat", "gloves", "scarf"],
    month: "January"
  }
];

typeOfWeather.forEach((i) => {
  console.log(i.items[2]);
})



