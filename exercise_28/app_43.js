// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianName3 = ["Ayaz", "Fayaz", "Tariq", "Madad"];
//making a copy of an array
var magicianNameCopy = __spreadArray([], magicianName3, true);
function show_magicians(greet) {
    var withGreetings = "";
    for (var _i = 0, magicianNameCopy_1 = magicianNameCopy; _i < magicianNameCopy_1.length; _i++) {
        var item = magicianNameCopy_1[_i];
        withGreetings += "".concat(greet, " ").concat(item, "\n");
    }
    ;
    return withGreetings;
}
;
var myGreetings = show_magicians("Hello");
var makeArray = myGreetings.split("\n");
console.log(makeArray);
//original array
console.log(magicianName3);
