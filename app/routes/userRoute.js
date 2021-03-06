'use strict';
const express = require('express');
// const express = require('../../config/express');
const userController = require('../controllers/userController');
const router = express.Router({mergeParams: true});

// '/user'
router.route('/')
	.get(userController.ListUsers)
	.post(userController.CreateUser);
	
router.route('/:userId(\d+)')
	.get(userController.SingleUser)
	.put(userController.UpdateUser)
 	.delete(userController.DeleteUser);

// '/user/5-2'
router.route('/:follow_id-:followed_id')
	.get(userController.FollowUser)
	.delete(userController.UnFollowUser)

router.route('/following')
  .get(userController.ListAllFollowing);


router.route('/:userId/following')
	.get(userController.ListUserFollowing)

router.route('/:userId/following/post')
	.get(userController.FollowerPost);



router.route('/:userId/post/favourite/')
	.get(userController.ListLikedPost)
	.post(userController.LikePost)

module.exports = router;
