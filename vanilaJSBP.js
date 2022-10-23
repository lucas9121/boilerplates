const fs = require('fs')
const folderName = process.argv[2] || 'Project'

const indexBP = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script defer src="js/script.js"></script>
    <title>Document</title>
</head>
<body>
    
</body>
</html>`

const cssBP = `
* {
    box-sizing: border-box;
}`

try {
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`, indexBP)
    fs.mkdirSync(`${folderName}/css`)
    fs.mkdirSync(`${folderName}/js`)
    fs.writeFileSync(`${folderName}/css/style.css`, cssBP)
    fs.writeFileSync(`${folderName}/js/script.js`, 'Console.log("Hello World")')
} catch(err) {
    console.log('Something Went Wrong')
    console.log(err)
}

