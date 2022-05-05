// Print out into the console the entire SOCBook object
console.log(SOCBook);
// let mangoLovers = [];
let mangoLoversAddress = [];
let userEmail;

// Take a look at it in the console
// Notice the shape of the data, and all of the different information contained in it
// Try and play to print out the different parts of the data into the console

// For all the following tasks, access/select the data required through the SOCBook object

// Task 1
// Complete the function so it returns Liz Rios' favourite fruit

function lizRiosFavFruit() {
  let lizFavFruit = SOCBook.data.people['10'].favoriteFruit;
  
  return lizFavFruit;

}

console.log("Liz Rios' favourite fruit is:", lizRiosFavFruit());

// Task 2
// Complete the function so it returns Marie David's 2nd friend's name

function marieDavid2ndFriend() {
  // Your code goes here...
  let maria2ndFriend = SOCBook.data.people['15'].friends[1].name
return maria2ndFriend;
}

console.log("Marie David's 2nd friend is:", marieDavid2ndFriend());

// Task 3
// Complete the function so it Cooper Brady's greeting message is shown in the p tag with the id of "message"
// We've helped start breaking down the plan!

function cooperBradyGreeting() {
  //add message <p> </p> tag to a variable
  
  // Your code goes here...
  // Select Cooper Brady's greeting message from the object
  let greeting = SOCBook.data.people['18'].greeting;
  // Select the p tag with the id of message
  let message = document.querySelector('#message');
  // Set the text of the p tag to be the greeting message
  message.innerText = greeting;  //is innerText a method or property
}

cooperBradyGreeting();

// Task 4
// Complete the following function
// In it, we want to take in an email as a parameter, and loop through search for the person who has that email
// If we find them, return the person
// If we don't, return null




function findPersonByEmail(emailAddress) {
  // Your code goes in here...

  for (i=0; i < SOCBook.data.people.length; i++)
  {
    // Using Includes Method:
    // if (SOCBook.data.people[i].email.includes(emailAddress)) {
    //   console.log (' Name of email address holder ');
    //   console.log(SOCBook.data.people[i].name);
    //   userEmail = SOCBook.data.people[i].name;
    //   return userEmail;
    // }
  // Same thing WITHOUT includes method:
      if (SOCBook.data.people[i].email === emailAddress) {
        userEmail = SOCBook.data.people[i].email
      console.log (' ****** Name of email address holder ********* ');
      console.log(SOCBook.data.people[i].name); 
      userEmail = SOCBook.data.people[i].name;
      return userEmail; 
    }
    
     
     
  
    }
    // END OF FOR LOOP Bracket
    return null;
}

// console.log("************ EMAIL " + userEmail);

// findPersonByEmail('wandaandrews@filodyne.com');

const found = findPersonByEmail("carversalinas@comtent.com");
console.log("What I found:", found);

// Task 5
// Make a list containing only the people's names who's favourite fruit is a mango

function getMangoLovers() {
  let mangoLovers = [];
  let fruit = 'mango';
// Using Includes Method:
for (i=0; i < SOCBook.data.people.length; i++) {
  if (SOCBook.data.people[i].favoriteFruit === fruit){
    mangoLovers.push(SOCBook.data.people[i].name)
    
  }
  
// if (SOCBook.data.people[i].favoriteFruit.includes(fruit)) {
//       console.log (' Name of fruit  ');
//       mangoLovers.push(SOCBook.data.people[i].name)
//       console.log('mango lovers are: ' + mangoLovers)
//     } 
}
return mangoLovers;
}

console.log("Who loves mango?", getMangoLovers());

// Task 6
// Complete the function. Try and return the address of 
//the person in the position in the array we've been handed

// list


// for (i=0; i<mangoLovers.length; i++){
//   getAddress(mangoLovers[i])
// }

// mangoLovers = [name1, name2, name3] The people that love mango  

// Task 6
// Complete the function. Try and return the address of the person 
//in the position in the array we’ve been handed
function getAddress(positionInArray) {
  // Your code goes here...
  // first assign a variable SOCBook.data.people[i]
  //
  let personsAddress =  SOCBook.data.people[positionInArray]['full address'];
  return personsAddress;

}
console.log(getAddress(7));


// Task 7
// Show a profile for each person in the ul with id "profiles"
// A profile should include their name, age, and their image
// Remember, break this down and tackle it step by step
// Lets give a profile to EVERYONE because we are fair like that 
//pull name, age and 
// create a funtion profile that takes in index and creates a profile

for(i=0; i<SOCBook.data.people.length; i++){
  createProfile(i);
}



function createProfile (index) {
  let name = SOCBook.data.people[index].name;
  let age = SOCBook.data.people[index].age;
  let image = SOCBook.data.people[index].picture;
  let personUl = document.querySelector('#profiles');
  let newLi = document.createElement('li');
  personUl.appendChild(newLi);
  newLi.innerText = name;
  let ageElement = document.createElement('p');
  personUl.appendChild(ageElement);
  ageElement.innerText = age;

  let imageElement = document.createElement('img');
  personUl.appendChild(imageElement);
  imageElement.src = image;  //`<image>src="${image}"</image>`;
  

}


