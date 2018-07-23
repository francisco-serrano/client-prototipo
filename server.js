// Express Server
import express from 'express';
import path from 'path';

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/client-prototipo'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/client-prototipo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

