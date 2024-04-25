const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/categories', adminController.createCategorie);
router.post('/products', adminController.createProduct);
router.post('/colours',adminController.createColour);
router.post('/banners',adminController.createBanner);
router.put('/categories/:id', adminController.updateCategorie);
router.put('/products/:id', adminController.updateProduct);
router.put('/banners/:id', adminController.updateBanner);
router.delete('/products/:id', adminController.deleteProduct);
router.delete('/categories/:id', adminController.deleteCategorie);
router.delete('/banners/:id', adminController.deleteBanner);
router.get('/getAll', adminController.getAllDetails);
router.get('/search', adminController.search);

// const userController = require('../controllers/userController');

// router.use('/tmp', express.static('tmp'));

// router.post('/packages', adminController.createPackage);
// router.post('/locations', adminController.createLocation);
// router.post('/hotels', adminController.createHotel);
// router.put('/packages/:id', adminController.updateCategorie);
// router.put('/locations/:id', adminController.updateLocation);
// router.put('/hotels/:id', adminController.updateHotel);
// router.delete('/packages/:id', adminController.deletePackage);
// router.delete('/locations/:id', adminController.deleteLocation);
// // router.delete('/hotels/:id', adminController.getHotel);
// router.get('/get/', adminController.getHotel);

// router.get('/search', userController.searchPackages)

module.exports = router;

