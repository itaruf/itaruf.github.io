const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./')); // 'public' is the directory where your files are located

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
