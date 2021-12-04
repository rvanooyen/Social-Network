const { Friend } = require('../models');

const friendController = {
  // createFriend
  createFriend({ body }, res) {
    Friend.create(body)
      .then(dbFriendData => res.json(dbFriendData))
      .catch(err => res.json(err));
  },

  // delete friend
  deleteFriend({ params }, res) {
    Friend.findOneAndDelete({ _id: params.id })
      .then(dbFriendData => res.json(dbFriendData))
      .catch(err => res.json(err));
  }
};

module.exports = friendController;
