
const app = require('express')(require('http').createServer());
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening on port ${port}!`));