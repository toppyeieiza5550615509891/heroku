const express = require('express')
const app = express()

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/renderHTML', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})


const port = process.env.port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))