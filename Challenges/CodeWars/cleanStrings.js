/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

function cleanString(s) {
    let newString = []

    for (const str of s) {
        if (str === '#') {
            newString.pop()
        } else {
            newString.push(str)
        }
    }
    return newString.join('')
};


console.log(cleanString("abc#d##c")) // ac