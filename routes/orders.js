var express = require('express');
var router = express.Router();
var orderModel = require('../schemas/order')

<<<<<<< HEAD:routes/categorys.js

router.get('/', async (req, res, next) => {
  try {
      const categories = await categoryModel.find({}, 'name'); // Chỉ lấy trường 'name' của danh mục
      res.status(200).send(categories);
  } catch (error) {
      console.error('Lỗi khi lấy danh sách thể loại sản phẩm:', error);
      res.status(500).send('Đã xảy ra lỗi khi lấy danh sách thể loại sản phẩm.');
  }
=======
router.get('/', async function (req, res, next) {
  var orders = await orderModel.find({})
  .populate('published').exec();
  res.status(200).send(orders);
>>>>>>> 342d329f1f4cacc50fa3c1afe35dd1dbad437083:routes/orders.js
});




router.post('/', async function (req, res, next) {
  try {
    let newOrder = new orderModel({
      user: req.body.name,
      product: req.body.product
    });
    await newOrder.save();
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(404).send(error);
  }
});
router.put('/:id', async function (req, res, next) {
  try {
    var categories = await categoryModel.findByIdAndUpdate(req.params.id, req.body,
      {
        new: true
      }).exec();
    res.status(200).send(categories);
  } catch (error) {
    res.status(404).send(error);
  }
});
router.delete('/:id', async function (req, res, next) {
  try {
    var categories = await categoryModel.findByIdAndUpdate(req.params.id, {
      isDeleted: true
    },
      {
        new: true
      }).exec();
    res.status(200).send(categories);
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = router;
