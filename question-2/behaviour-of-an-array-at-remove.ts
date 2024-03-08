//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

// //
// Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.

let guest_list:string[]=["Mandilla","Jennifer","Maria","Isabell","Hanna"]

//METHODS TO REMOVE SOMETHING OR ITEM FROM AN ARRAY.
//-------------------------------------------------

//1- splice
let new_list=[...guest_list].splice(3)//[Removes an item from starting i.e 0 index to index 2 ]and [from index 3 , it display remaining items in an array],Here i make a copy of guest list and then i apply splice method such that original array does not effected & it remains same.
console.log(new_list)

console.log("\n")

for(let i=0;i<new_list.length;i++){


console.log(`Dear ${new_list[i]},Due to some reasons, I invited only 2 person in my home,so your presence is very valuable for me.`)
}
console.log("\n")

console.log(guest_list);//check the original array. 
//------------------------------------------------

//2- slice:-//keep the elements from --- to----

let new_list_1=[...guest_list].slice(0,3)//this keeps the element of an array from 0 to 2.
console.log("\n")
console.log(new_list_1);

new_list_1.forEach(element => {

    console.log(`Dear ${element} , you are also invited for today's Kitty party.`)

    
});

console.log("\n")

console.log(guest_list);//check the original array. 

//-------------------------------------------------------

//3- pop method

// let guest:string[]=["Jasmine","Alexander","William Shakespear","Zinish"]
// console.log("\n")
// guest.pop()
// console.log(guest) 

console.log("\n")
let new_guest=[...guest_list].pop();//  // Remove the last element
console.log(new_guest)// this shows hanna is pop from list

console.log("\n")

// and for after pop out an array
guest_list.pop()  // Remove the last element
console.log(guest_list)

//4-Using length property:-

// You can directly manipulate the length property of the array to truncate it.

console.log(guest_list);//checking for an array's items.
 console.log("\n")

 //for understanding purpose.

//  let myArray: number[] = [1, 2, 3, 4, 5];
// myArray.length = 2; // Set the length to 2(from 0 index to index 1 =becomes length 2 )
// console.log(myArray); // Output: [1, 2]

guest_list.length=3;//set the length of an array from index0 to index 2, it becomes length =3 (i.e index0,index1,index2)
console.log(guest_list)
//-------------------------------------------------------------------------------------------

//5-  Using filter method:
// The filter method can be used to create a new array containing only the elements that meet a certain condition, effectively removing unwanted elements.

let guest_list1: string[] = ["BillGates", "MarkZuckerberg", "SteveJobs", "Eric S. Raymond", "Bruce Perens"];
guest_list1 = guest_list1.filter((str => str.length >14 )); // Keep elements with a string character length greater than  14.
console.log("filter:", guest_list1);

//here o/p i got as: 
//filter: [ 'Eric S. Raymond' ]

//The filter method is being used to keep elements whose CHARACTER LENGTH IS less than  or greater than desired given value etc but you're working with strings, and comparing strings with numbers might not produce the expected result. If you want to keep elements with a length less than 2 (number of characters less than 2), you should use the length property of strings.


//reference work for understanding about filter method in numbered array.
let myArray: number[] = [1, 2, 3, 4, 5];//working with numbers so donot need to use length property.
myArray = myArray.filter(item => item < 4); // Keep elements less than 4
console.log(myArray); // Output: [1, 2, 3]
//-----------------------------------------------------
