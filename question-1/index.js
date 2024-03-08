// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var invited_guest = ["kate", "Rainaha", "Marie", "Tom Cruise", "salena"];
invited_guest.forEach(function (element) {
    console.log("Dear ".concat(element, ", I just found a bigger dinner table, so now more space is available."));
    console.log("\n");
});
var new_guests_tobe_invited = ["Monica", "Meldon", "Alexa"];
invited_guest.push(new_guests_tobe_invited[2]); //insert at new guest at the end of invited guest .
console.log(invited_guest);
invited_guest.unshift(new_guests_tobe_invited[1]); //insert new guest at begining of an array of invited guest.
console.log(invited_guest);
// Add one new guest to the middle of your array. 
invited_guest.splice(invited_guest.length / 2, 0, new_guests_tobe_invited[0]);
console.log(invited_guest);
//here its explaination.
// guests.length / 2: 
//This calculates the middle index of the guests array. guests.length gives you the total number of elements in the array, and dividing it by 2 gives you the middle. However, note that this might result in a fractional index if the array length is odd.
// 0: This is the delete count, indicating how many elements should be removed from the array. In this case, we don't want to remove any elements; we're inserting a new guest at the calculated middle index.
// "anyname" or new_guests_tobe_invited[0] : This is the new element to be inserted into the array. In this case, it's the string i.e "Huma mohsin".
// So, altogether, this line of code is saying: "Starting from the middle index of the guests array, don't remove any elements (0), but insert the string 'Huma mohsin'." This effectively adds "Huma mohsin" to the middle of the array without removing any existing elements.
