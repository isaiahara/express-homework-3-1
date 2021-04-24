const express = require('express');
const app = express();
const PORT = 5001;

app.get('*', (req, res) => {
    res.send('listening on port 5001@gmail.c')
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`)
});