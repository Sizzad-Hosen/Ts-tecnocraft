"use strict";
// non premitive type 
var friend01 = ["rasel", 'rana'];
var friend02 = ["moasel", 'tana'];
friend01.push.apply(friend01, friend02);
console.log(friend01);
// tuple array 
var coordinates = [1, 5];
var ageName = [50, 'sizzad', 6];
// refreance type
var user = {
    firstName: "sizzad",
    lastName: "hosen",
    midName: "ul",
    isMarried: true,
};
// acess the element 
console.log(user.midName);
