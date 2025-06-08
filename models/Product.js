const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    // brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: Number,
    availableSizes: {
      type: [String],
      enum: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
      default: []
    }
  },
  { timestamps: true }
);

// Add a virtual to calculate total stock from sizes
ProductSchema.virtual('calculatedTotalStock').get(function () {
  if (!this.sizes || !this.sizes.length) return 0;
  return this.sizes.reduce((total, size) => total + size.stock, 0);
});

// Pre-save middleware to update totalStock based on sizes
ProductSchema.pre('save', function (next) {
  if (this.sizes && this.sizes.length) {
    this.totalStock = this.calculatedTotalStock;
  }
  next();
});

module.exports = mongoose.model("Product", ProductSchema);
