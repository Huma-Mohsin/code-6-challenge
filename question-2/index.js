// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
var guest_list = ["Aliza", "Raina", "Saira", "Waniya"];
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var item = guest_list_1[_i];
    console.log("Dear ".concat(item, ", I invite only two people for dinner."));
    console.log("\n");
}
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop(); //// Pop a name from the end of the array
    // Print a message to the removed guest
    console.log("Sorry, " + remove_guest + ", we can't invite you to dinner.");
}
// Print the final list of invited guests
console.log("Final List of Invited Guests:", guest_list);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
guest_list.forEach(function (element) {
    console.log("Dear ".concat(element, ",you are still invited. "));
    console.log("\n");
});
//
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest_list.splice(0, guest_list.length);
console.log(guest_list); // Shows an empty list
