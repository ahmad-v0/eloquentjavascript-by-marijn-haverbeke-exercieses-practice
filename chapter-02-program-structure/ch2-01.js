/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following 
triangle:

#
##
###
####
#####
######
#######
*/

/*
//version-01: uaing for loop
let string = "";
for (let i = 0; i < 7; i++) {
    string += "#";
    console.log(string);
}
*/

// version-02: solution using while
let string = "";
while (string.length < 7) {
    string += "#";
    console.log(string);
}