/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

const dog = {
    petName:"Bobby"
}

// Task 1: Add code here
dog.breed = "poodle";
console.log(dog);
// Task 2: Add code here

for (let doggo in dog){
    if (dog.hasOwnProperty(doggo)){
        console.log(doggo + ':'+ dog[doggo])
    };
};