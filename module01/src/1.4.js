"use strict";
// spread operatior 
{
    const names1 = ["mir", "zerin", "jaba"];
    const names2 = ["prr", "jerin", "saba"];
    names1.push(...names2);
    console.log(names1); // Output: ["mir", "zerin", "jaba", "prr", "jerin", "saba"]
}
// rest operator 
const greetFriend = (...friends) => {
    const [friend01, friend02] = friends;
    console.log(`Hi ${friend01}, ${friend02}`);
};
greetFriend("abul", "kabul", "babul");
// 
