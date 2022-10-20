const fs = require("fs")
const inquirer = require("inquirer")


inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Enter a short bio'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your linkedin profile name'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username'
    }
    ])
    .then((response)=>{
        const htmlResults = htmlPage(response)
        fs.writeFile('index.html', htmlResults, ()=>
            console.log("HTML Page Generated"));
    });




const htmlPage = (response) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${response.name}</h1>
    <h2> I'm from ${response.location}</h2>
    <p> ${response.bio}</p>
    <h2>Contact</h2>
    <ul>
        <li>LinkedIn: ${response.linkedin}</li>
        <li>GitHub: ${response.github}</li>
    </ul>
        
</body>
</html>`;