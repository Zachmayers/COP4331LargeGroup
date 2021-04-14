const express  = require('express')
const mongoose = require('mongoose');
const router = require('./routes/index');
const path = require('path');
//const {MONGOURI} = require('./keys')
const PORT = process.env.PORT || 3000;
const MONGOURI = "mongodb+srv://Server2:2NtM2Q58wQ0K19Rw@largeproject.grhmk.mongodb.net/LargeProject?retryWrites=true&w=majority";
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes/index'))
app.use('/api', router);
app.use('/signup', router);
//allows the use of the user schema for sign up.
require('./models/user')
mongoose.model("User")

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect(, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', err => {
  console.log('Mongoose Connection Error : ' + err);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
