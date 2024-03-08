// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let guest_list:string[]=["Aliza","Raina","Saira","Waniya"]

for (const item of guest_list) {
    console.log(`Dear ${item}, I invite only two people for dinner.`)
    console.log("\n")
}
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guest_list.length>2){
    let remove_guest=guest_list.pop()//// Pop a name from the end of the array
    // Print a message to the removed guest
    console.log("Sorry, " + remove_guest + ", we can't invite you to dinner.");
}

// Print the final list of invited guests
console.log("Final List of Invited Guests:", guest_list);

//Print a message to each of the two people still on your list, letting them know they’re still invited.
guest_list.forEach(element => {
    
console.log(`Dear ${element},you are still invited. `)
console.log("\n")
});

//
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guest_list.splice(0, guest_list.length);
console.log(guest_list); // Shows an empty list
//detail:-
// The code guest_list.splice(0, guest_list.length); is another way to empty the guest_list array. It uses the splice() method to remove elements from the array starting from index 0 (the beginning) and removing elements up to the length of the array.

// Here's how it works:

// The first parameter (0) is the starting index from where elements will be removed.
// The second parameter (guest_list.length) specifies the number of elements to remove, starting from the specified index.
// In this case, it removes all elements from index 0 to the end of the array, effectively emptying the array.