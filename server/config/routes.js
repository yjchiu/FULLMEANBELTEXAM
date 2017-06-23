var users = require('../controllers/users.js');
module.exports = function(app) {
   // Routes
   // Root Request
   app.get('/users', users.index);
   app.post('/new', (req, res)=>{
       users.new(req, res);
       console.log("parse new to routes success", req.body);
   });

   app.all('*', (req, res) => {
       res.sendFile(path.resolve('public/dist/index.html'));
   });
}