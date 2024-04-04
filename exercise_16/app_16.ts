 //question 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let guest_list2 : string[] = ["Ali", "Farhan","Raza", "Sara"];
let not_present2 : string = "Raza";
let new_guest2 : string = "Babar Azam";
guest_list2[2] = new_guest2;
for(let i=0; i<guest_list2.length; i++){
  console.log("Respected Sir/Madam " + guest_list2[i] + ",\nWe invited you on dinner tommorrow.\nThankyou\n")
}
guest_list2.unshift("Batool" ,"Hajra" ,"Farheen" )
for(let i=0; i<guest_list2.length; i++){
  console.log("Respected Sir/Madam " + guest_list2[i] + ",\nWe found a bigger dinner table so we decide tp invite 3 new guest.\nThankyou\n")
}
