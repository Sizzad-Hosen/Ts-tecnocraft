"use strict";
// spread operatior 
{
    var names1 = ["mir", "zerin", "jaba"];
    var names2 = ["prr", "jerin", "saba"];
    names1.push.apply(names1, names2);
    console.log(names1); // Output: ["mir", "zerin", "jaba", "prr", "jerin", "saba"]
}
// rest operator 
var greetFriend = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    var friend01 = friends[0], friend02 = friends[1];
    console.log("Hi ".concat(friend01, ", ").concat(friend02));
};
greetFriend("abul", "kabul", "babul");
// 
