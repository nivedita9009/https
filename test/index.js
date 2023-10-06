const express = require('express');
const app = express();
const fs = require('fs');
// const path = require('path'); 
const file = fs.readFileSync('./58B76DE0BBB2BAE33297B5E1EA739B9F.txt')

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var cors = require("cors");
app.use(cors());

app.use("/api/get", (req, res) => {
  res.json({ message: "nivedita1234" });
});


// const cred = {
//     key: 'nivedita',
//     cart
// }


app.get('/.well-known/pki-validation/58B76DE0BBB2BAE33297B5E1EA739B9F.txt', (req, res) => {
 res.sendFile('/home/ec2-user/https/test/58B76DE0BBB2BAE33297B5E1EA739B9F.txt')
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// const httpsServer = https.createServer(cred, app)
// httpsServer.listen(8443)

