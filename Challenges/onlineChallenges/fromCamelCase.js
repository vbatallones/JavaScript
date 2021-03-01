// Converts a string from camelcase.

// Use String.prototype.replace() to remove underscores, hyphens,
//  and spaces and convert words to camelcase. 
// Omit the second argument to use a default separator of _.



const upperToLower = (str, separator) =>
    str
        .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
        .toLowerCase();


console.log(upperToLower('iLoveYou', '*')); // i*love*you
console.log(upperToLower('foreverAndEver', '-')); // forever-and-ever
console.log(upperToLower('iLoveCoding', '_')); // i_love_coding