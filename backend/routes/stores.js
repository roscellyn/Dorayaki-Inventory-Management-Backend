const router = require('express').Router();
let Store = require('../models/store.model');

router.route('/').get((req, res) => {
	Store.find()
		.then((stores) => {
			res.json(stores);
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/so=AZ').get((req, res) => {
	Store.find()
		.sort({ nama: 1 })
		.then((stores) => {
			res.json(stores);
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/so=ZA').get((req, res) => {
	Store.find()
		.sort({ nama: -1 })
		.then((stores) => {
			res.json(stores);
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/nama=:query').get((req, res) => {
	Store.find({ $text: { $search: req.params.query } })
		.then((stores) => {
			res.json(stores);
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const nama = req.body.nama;
	const jalan = req.body.jalan;
	const kecamatan = req.body.kecamatan;
	const provinsi = req.body.provinsi;
	const noTelp = req.body.noTelp;
	const stok = req.body.stok;

	const newStore = new Store({
		nama,
		jalan,
		kecamatan,
		provinsi,
		noTelp,
		stok,
	});

	newStore
		.save()
		.then(() => res.json('Store added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Store.findById(req.params.id)
		.then((store) => res.json(store))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Store.findByIdAndDelete(req.params.id)
		.then(() => res.json('Store deleted.'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
	Store.findById(req.params.id)
		.then((store) => {
			store.nama = req.body.nama;
			store.jalan = req.body.jalan;
			store.kecamatan = req.body.kecamatan;
			store.provinsi = req.body.provinsi;
			store.noTelp = req.body.noTelp;
			store.stok = req.body.stok;

			store
				.save()
				.then(() => res.json('Store updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id/addVariant').put((req, res) => {
	Store.findById(req.params.id)
		.then((store) => {
			store.stok.push({
				variantId: req.body.variantId,
				jumlah: req.body.jumlah,
			});

			store
				.save()
				.then(() => res.json('Store updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id/updateVariant').put((req, res) => {
	Store.findById(req.params.id)
		.then((store) => {
			let newStok = [];
			let tempStok;
			store.stok.forEach((stok) => {
				tempStok = stok;
				if (stok.variantId == req.body.variantId) {
					tempStok.jumlah = req.body.jumlah;
				}
				newStok.push(tempStok);
			});

			store.stok = newStok;
			console.log(store.stok);

			store
				.save()
				.then(() => res.json('Store updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id/deleteVariant/:stokId').put((req, res) => {
	Store.findById(req.params.id)
		.then((store) => {
			let newStok = [];
			let tempStok;
			store.stok.forEach((stok) => {
				tempStok = stok;
				if (stok._id != req.params.stokId) {
					newStok.push(tempStok);
				}
			});

			store.stok = newStok;
			console.log(store.stok);

			store
				.save()
				.then(() => res.json('Store updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
