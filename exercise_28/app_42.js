// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicianName2 = ["Ayaz", "Fayaz", "Tariq", "Madad"];
function show_magicians(greet) {
    for (var _i = 0, magicianName2_1 = magicianName2; _i < magicianName2_1.length; _i++) {
        var item = magicianName2_1[_i];
        console.log(greet, item);
    }
}
show_magicians("Hello, how are you Mr."); //calling the function
show_magicians("Hello"); //2nd time calling the function
