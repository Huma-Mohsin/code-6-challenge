
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let invited_guest_list:string[]=["Sara","Bina","Alishba"];
let  invited_more_guest:string[]=["zarnish","Yumna","kainat","sabheeha"]

//-------------------------------------------------------------------------------------------------------

//ways to merge 2 or more arrays.
//1-concat method.
let new_list1=invited_guest_list.concat(invited_more_guest)//used to merge 2 arrays

console.log(new_list1);

new_list1.forEach(item => {
    console.log(`Dear ${item}, Good news, i have a bigger dinner. `)
});

console.log("\n")
//----------------------------------------------------------------------------------------------------------------
//2-spread message
let new_list2:string[]= [...invited_guest_list, ...invited_more_guest];
console.log(new_list2);
for (const iterator of new_list2) {

    console.log(`Dear ${iterator}, I have a bigger dinner, please join us tomorrow.`)
    
}

//---------------------------------------------------------------------------------------------------------------

//3-splice method

//// Use the splice method to merge array2 into array1 at index 3
invited_guest_list.splice(invited_guest_list.length,0, ...invited_more_guest);
//Explaination of this line of code is that:-

// invited_guest_list i.e (array 1): The target array into which you want to merge elements from (array2) i.e invited_more_guest..

// .splice(: The splice method is used to modify an array by adding or removing elements.


// array1.length: This is the index at which the insertion will begin. In this case, it's array1.length, meaning the insertion will start at the end of array1 i.e invited_guest_list.

// , 0,: The second argument 0 specifies that no elements from array1 should be removed before the insertion.

// ...array2): The spread operator (...) is used to spread the elements of array2 into the splice method. It essentially adds each element of array2 to array1 at the specified index.

// So, the corrected explanation is: "Starting from the end of array1, insert all elements from array2 without removing any elements from array1."


// The merged array is now stored in array1
let new_list3: string[] = [...invited_guest_list];

console.log("List 3 :",new_list3);
//------------------------------------------------------------------------------------------------------------------

 console.log("\n")

//4- push method:-
let guest1:string[]=["Ali","Azhar","Hasan"]
let guest2:string[]=["zahid","yasir","kamran"]
// guest1.push(...guest2)
// let new_list_by_push=guest1
// console.log(new_list_by_push);


//push by using for of loop.
for (const element of guest2) {
    guest1.push(element)
    
}
let new_array_becomes=guest1;
console.log(new_array_becomes);
//----------------------------------------------------------------------------------------------------------

//5- Array.from with concat:-
//error due to library isssue & highlighted error as below, otherwise code is right.


//  let new_list5=Array.from(invited_guest_list).concat(invited_more_guest);
//  console.log(new_list5);


 //index.ts:73:22 - error TS2550: Property 'from' does not exist on type 'ArrayConstructor'. Do you need to change your target library? Try 
// changing the 'lib' compiler option to 'es2015' or later.

// 73  let new_list5=Array.from(invited_guest_list).concat(invited_more_guest);
//                         ~~~~


// Found 1 error in index.
//-----------------------------------------------------------------------------------------------------------