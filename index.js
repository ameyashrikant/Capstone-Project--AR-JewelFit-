const express = require('express');
const path = require('path');//this
const {exec} = require('child_process');
const app = express();

const port = 3000; 
app.use(express.static(path.join(__dirname, 'public')));//this

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/runcode', (req, res) => {
  exec('main.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
  res.send('Application started!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
