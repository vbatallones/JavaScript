/* 
    Escape HTML

    Escape a string for use in HTML.
    Use string.prototype.replace() with a regex.
    that matches the character that needs to be escaped.
    Using a callback function to replace each character instance
    with its associated escaped character using a dictionary ({}).
 */

const escapeHTML = str => 
    str.replace(
        /[&<>'"$]/g,
        tag =>
        ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;',
            '$': '&#36;'
        }[tag] || tag)
    );
    console.log(escapeHTML('<h1>$ & me</h1>'));
    
    // OUTPUT
    // &lt;h1&gt;&#36; &amp; me&lt;/h1&gt;