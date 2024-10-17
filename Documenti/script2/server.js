const express = require('express');
const path = require('path');
const app = express();

// Serve file statici dalla directory 'public'
app.use(express.static(path.join(__dirname)));

// Avvia il server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

