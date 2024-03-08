// // //  Question 18: Seeing the World: Think of at least five places you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// // Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.
//solution.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var seeing_the_world = ["Switzerland", "Canada", "Germany", "Australia", "Turkey", "America", "Dubai"];
// Print your array in its original order.
console.log("array in its original order.", seeing_the_world);
console.log("\n");
//• Print your array in alphabetical order without modifying the actual list.
//sorted method is used for this task.
var b = __spreadArray([], seeing_the_world, true).sort();
console.log("array in alphabetical order without modifying the actual list.", b);
// Print your array in its original order.
console.log("array in its original order.", seeing_the_world);
console.log("\n");
//Print your array in reverse alphabetical order without changing the order of the original list.
var reverse_alphabetical_order = b.reverse();
console.log(reverse_alphabetical_order);
console.log("\n");
// Print your array in its original order.
console.log("array in its original order.", seeing_the_world);
console.log("\n");
// • Reverse the order of your list. Print the array to show that its order has changed.
var a = __spreadArray([], seeing_the_world, true).reverse();
console.log("reverse of array", a);
console.log("\n");
// Print your array in its original order.
console.log("array in its original order.", seeing_the_world);
//
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
var c = a.reverse();
console.log("The array is back to its original order", c);
console.log("\n");
// Print your array in its original order.
console.log("array in its original order.", seeing_the_world);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var original_array_becomes_after_sortiing = seeing_the_world.sort();
console.log("order has been changed.", original_array_becomes_after_sortiing);
//now 
// Print your array in its original existence .
console.log("array in its original order.", seeing_the_world);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var reverse_of_original_array = seeing_the_world.reverse();
console.log("reverse of original array:", reverse_of_original_array);
////now again
// Print your array in its original existence finally.
console.log("array in its original order.", seeing_the_world);
