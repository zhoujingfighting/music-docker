const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
app.get('/music', (req,res) => {
    const musicListsPath = path.join(__dirname, '..', 'src');
    console.log(musicListsPath);
    const musicLists = fs.readdirSync(musicListsPath, {encoding:"utf-8"})
    res.send(JSON.stringify(musicLists.map(item => path.join(musicListsPath, item))))
})
app.listen(3050,()=>{
    console.log('Port 3050 is running !!!!');
})