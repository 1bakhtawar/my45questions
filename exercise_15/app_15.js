//question  15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guest_list = ["Ali", "Farhan", "Raza", "Sara"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[i] + "\nWe invited you on dinner tommorrow.\nThankyou\n");
}
var not_present = "Raza";
var new_guest = "Babar Azam";
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[i] + "\nWe invited you on dinner tommorrow.\nThankyou\n");
}
console.log("Mr.".concat(not_present, " will not coming tommorrow dinner. "));
