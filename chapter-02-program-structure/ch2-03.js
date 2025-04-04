/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline 
characters to separate lines. At each position of the grid there is either a 
space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 
and change the program so that it works for any size, outputting a grid of the 
given width and height.
*/

/*
// version-01:
let string = "";
for (let n = 1; n <= 8; n++){
    if (!(n % 2 === 0)) {
        for (let i = 1; i <= 8; i++){
            if (i % 2 === 0) {
                string += "#";
            } else {
                string += " ";
            }
        }
    } else {
        for (let i = 1; i <= 8; i++){
            if (!(i % 2 === 0)) {
                string += "#";
            } else {
                string += " ";
            }
    }
}
string += "\n";
}
console.log(string);
*/

// version-02:
let size = 8;
let string = "";
for (let i = 1; i <= size; i ++) {
    for (let j = 1; j <= size; j++) {
        if ((i + j) % 2 === 0){
            string += " ";
        } else {
            string += "#";
        }
    }
    string += "\n";
}
console.log(string);