const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema(
	{
		nama: {
			type: String,
			required: true,
			unique: true,
		},
		jalan: {
			type: String,
			required: true,
		},
		kecamatan: {
			type: String,
			required: true,
		},
		provinsi: {
			type: String,
			required: true,
		},
		noTelp: {
			type: String,
			required: true,
		},
		stok: {
			type: [
				{
					variantId: { type: Schema.Types.ObjectId },
					jumlah: { type: Number },
				},
			],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

storeSchema.index({ nama: 'text' });

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
