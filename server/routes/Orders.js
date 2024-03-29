const express = require("express");
const router = express.Router();

const {
    createOrder,
    updateOrderStatus,
    getOrderDetails,
    showAllOrdersofUser,
    showAllOrders
} = require("../controllers/Orders");
const { auth, isCustomer, isAdmin } = require("../middlewares/auth");

router.post('/creatOrder', auth, isCustomer, createOrder);
router.put('/updateOrderStatus', auth, isAdmin, updateOrderStatus);
router.post('/getOrder', auth, getOrderDetails);
router.get('/getAllOrders', auth, isCustomer, showAllOrdersofUser);
router.get('/admin/Orders', auth, isAdmin, showAllOrders);

module.exports = router;
