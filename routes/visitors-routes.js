const router = require("express").Router();
module.exports = router;

const Kennels = require("../modules/kennels-module.js")
router.get('/kennels', (req, res) => {
  Kennels.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Kennels", error: err });
    });
});

router.get('/kennels/:id', (req, res) => {
  Kennels.findById(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Kennel", error: err });
    });
});

const Dogs = require("../modules/dogs-module.js");
router.get('/dogs', (req, res) => {
  Dogs.find()
   .then(data => {
     res.status(200).json(data);
   })
   .catch(err => {
     res.status(500).json({ message: "Failed to get Dogs", error: err });
   });
});

router.get('/dogs/:id', (req, res) => {
  Dogs.findById(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json({ message: "Failed to get Dog", error: err });
  });
});

const Breeds = require("../modules/breeds-module.js");
router.get('/breeds/:id', (req, res) => {
  Breeds.findBreeds(req.params.id)
   .then(data=>{
     res.status(200).json(data)
   })
   .catch( err=> {
     res.status(500).json({ message: "Failed to get Breed", error: err});
  })
});

const Notifications = require("../modules/notifications-module.js");
router.post('/notifications', (req, res) => {
  const date_sent = Date.now()
  const notification = {...req.body, date_sent}
  Notifications.add(notification)
   .then(data=>
     res.status(200).json(...data)
   )
   .catch(err =>
     res.status(500).json(error: err, message: "Unable to post notification. Please make sure to include your admin_id and dog_id"))
});
