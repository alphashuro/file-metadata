const app = require('express')();
const path = require('path');
const multer = require('multer');
const files = multer()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/api/fileanalyse', files.single('file'), (req, res) => {
  res.send({
    size: req.file.size
  });
});

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log(`app is listening at ${port}`);
})
