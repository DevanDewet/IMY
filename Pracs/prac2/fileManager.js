//u05169098 Devan Dewet
const fs = require('fs');

function fileRead(filePath = 'events.json') 
{
    try 
    {
        const data = fs.readFileSync(filePath, 'utf8'); 
        const jsonData = JSON.parse(data); 
        return jsonData; 
    }
     catch (err) 
     {
        console.error('Error reading or parsing file:', err);
        return null; 
    }
}

function fileWrite(content, filePath = 'newEvents.json') 
{
    try 
    {
        const jsonData = JSON.stringify(content, null, 4); 
        fs.writeFileSync(filePath, jsonData, 'utf8'); 
        console.log(`Content successfully written to ${filePath}`);
    } 
    catch (err) 
    {
        console.error('Error writing to file:', err);
    }
}

module.exports = { fileRead, fileWrite };