// question no 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guest_list1 = ["Ali", "Farhan", "Raza", "Sara"];
// for(let i=0; i<guest_list.length; i++){
//     console.log("Respected Sir/Madam " + guest_list[i] + "\nWe invited you on dinner tommorrow.\nThankyou\n")
// }
var not_present1 = "Raza";
var new_guest1 = "Babar Azam";
guest_list1[2] = new_guest1;
// for(let i=0; i<guest_list.length; i++){
//   console.log("Respected Sir/Madam " + guest_list1[i] + ",\nWe invited you on dinner tommorrow.\nThankyou\n")
// }
guest_list1.unshift("Batool", "Hajra", "Farheen");
// for(let i=0; i<guest_list.length; i++){
//   console.log("Respected Sir/Madam " + guest_list1[i] + ",\nWe found a bigger dinner table so we decide tp invite 3 new guest.\nThankyou\n")
// }
console.log("\nUnfortunately we cannot arrange big table . Only two people allow.");
while (guest_list1.length > 2) {
    var remove_guest = guest_list1.pop();
    console.log("Sorry Sir/Madam. ".concat(remove_guest, " you are not inivited for dinner."));
}
for (var i = 0; i < guest_list1.length; i++) {
    console.log("Respected Sir/Madam " + guest_list1[i] + ",\nYes we still inivited on tommorrow dinner.\nThankyou\n");
}
guest_list1.splice(0, 3);
console.log(guest_list1);
