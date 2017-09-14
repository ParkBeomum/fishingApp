const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/*
// Get all posts
router.get('/board', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  // 몽고DB로 대체해야함...
  /
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});
*/

/* mongoDB connect */
mongoose.connect('mongodb://localhost/test');

/* 모델정의 */
/* CRUD 를 위해서는 몽구스 모델이 필요하다 */
var Book = mongoose.model('Book',{ name: String });
/* document 생성 */
var practicalNodeBook = new Book({ name: 'Practical Node.js' });

router.get('/board', (req, res) => {
  
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


module.exports = router;
