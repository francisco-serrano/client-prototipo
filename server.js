//Install express server
const express = require('express');
const path = require('path');

const app = express();

const testFolder = './';
const fs = require('fs');



// Serve only the static files form the dist directory
app.use(express.static('/dist/client-prototipo'));

app.get('/*', function(req, res) {
    console.log('QUE ONDA BIGOTE')
    console.log(__dirname);
    fs.readdirSync(testFolder).forEach(file => {
        console.log(file);
    });
    res.sendFile(path.join('/dist/client-prototipo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);