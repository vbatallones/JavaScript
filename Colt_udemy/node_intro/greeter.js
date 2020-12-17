const args = process.argv.slice(2);
const folderName = process.argv[2] || 'Project'
const fs = require('fs')
for (let arg of args) {
    console.log(`Hello Mr. ${args}`)
}


fs.mkdirSync(folderName)
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/style.css`)
fs.writeFileSync(`${folderName}/app.js`)

