// // //Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // // let members: string[] = ["Ali", "Muhammad", "Fatima" , "Hassan" , "Hussain"];
// // // for(let i=0; i<members.length; i++){
// // //     console.log(members[i]);
// // // }
// // //question 12
// // //Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// // // let members: string[] = ["Ali", "Muhammad", "Fatima" , "Hassan" , "Hussain"];
// // // let message: string="kal birthday hai kis ki: "
// // // for(let i=0; i<members.length; i++){
// // //     console.log(message + members[i]);
// // // }
// // //question 13
// // // Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// // //let transportation : string [] = ["civic", "bike", "suzuki jis me cow ho"];
// // //for(let i=0; i<transportation.length; i++){
// //   //  console.log("I would like to own a " + transportation[i]);
// // //}
// // //question 14
// // //Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// // // let guest_list : string[] = ["Ali", "Farhan","Raza", "Sara"];
// // // for(let i=0; i<guest_list.length; i++){
// // //     console.log("Respected Sir/Madam " + guest_list[i] + "\nWe invited you on dinner tommorrow.\n\nThankyou")
// // // }
// // //question  15
// // //Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// // //• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// // //• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// // //• Print a second set of invitation messages, one for each person who is still in your list.
// // let guest_list : string[] = ["Ali", "Farhan","Raza", "Sara"];
// // for(let i=0; i<guest_list.length; i++){
// //     console.log("Respected Sir/Madam " + guest_list[i] + "\nWe invited you on dinner tommorrow.\nThankyou\n")
// // }
// // let not_present : string = "Raza";
// // let new_guest : string = "Babar Azam";
// // guest_list[2] = new_guest;
// // for(let i=0; i<guest_list.length; i++){
// //   console.log("Respected Sir/Madam " + guest_list[i] + "\nWe invited you on dinner tommorrow.\nThankyou\n")
// // }
// // console.log(`Mr.${not_present} will not coming tommorrow dinner. `)
// // //question 16
// // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// let guest_list : string[] = ["Ali", "Farhan","Raza", "Sara"];
// let not_present : string = "Raza";
// let new_guest : string = "Babar Azam";
// guest_list[2] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//   console.log("Respected Sir/Madam " + guest_list[i] + ",\nWe invited you on dinner tommorrow.\nThankyou\n")
// }
// guest_list.unshift("Batool" ,"Hajra" ,"Farheen" )
// for(let i=0; i<guest_list.length; i++){
//   console.log("Respected Sir/Madam " + guest_list[i] + ",\nWe found a bigger dinner table so we decide tp invite 3 new guest.\nThankyou\n")
// }
//question no 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// let guest_list : string[] = ["Ali", "Farhan","Raza", "Sara"];
// // for(let i=0; i<guest_list.length; i++){
// //     console.log("Respected Sir/Madam " + guest_list[i] + "\nWe invited you on dinner tommorrow.\nThankyou\n")
// // }
// let not_present : string = "Raza";
// let new_guest : string = "Babar Azam";
// guest_list[2] = new_guest;
// // for(let i=0; i<guest_list.length; i++){
// //   console.log("Respected Sir/Madam " + guest_list[i] + ",\nWe invited you on dinner tommorrow.\nThankyou\n")
// // }
// guest_list.unshift("Batool" ,"Hajra" ,"Farheen" );
// // for(let i=0; i<guest_list.length; i++){
// //   console.log("Respected Sir/Madam " + guest_list[i] + ",\nWe found a bigger dinner table so we decide tp invite 3 new guest.\nThankyou\n")
// // }
// console.log("\nUnfortunately we cannot arrange big table . Only two people allow.")
// while(guest_list.length>2){
//   let remove_guest = guest_list.pop();
//   console.log(`Sorry Sir/Madam. ${remove_guest} you are not inivited for dinner.`);
// }
// for(let i=0; i<guest_list.length; i++){
//   console.log("Respected Sir/Madam " + guest_list[i] + ",\nYes we still inivited on tommorrow dinner.\nThankyou\n")
// }
// guest_list.splice(0,3);
// console.log(guest_list);
//question 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
var places = ["Capr town", "Delhi", "Lahore", "Karachi", "Multan"];
console.log("original : " + places);
//• Print your array in alphabetical order without modifying the actual list.
console.log("copy " + __spreadArray([], places, true).sort());
//• Show that your array is still in its original order by printing it.
console.log("original : " + places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("copy " + __spreadArray([], places, true).sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("copy " + __spreadArray([], places, true).sort().reverse());
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("original : " + places.sort());
