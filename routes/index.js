var express = require('express');
var router = express.Router();


router.use('/users',require('./users'));
router.use('/products',require('./products'));
router.use('/nsxs',require('./nsxs'));
router.use('/shop',require('./shop'));
router.use('/',require('./home'));
router.use('/auth',require('./auth'));
<<<<<<< HEAD
//router.use('/admin',require('./admin'));
 
router.use('/order',require('./order'));
router.use('/orderdetails',require('./orderdetails'));
=======
router.use('/contact',require('./contact'));
router.use('/orders',require('./orders'));
router.use('/quanli',require('./quanli'));


>>>>>>> 342d329f1f4cacc50fa3c1afe35dd1dbad437083
module.exports = router;