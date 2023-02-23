var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Betty",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charlie",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res) {
  res.render('form')
})

router.post('/new', function(req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;
