const Product = require("../models/product");

class ProductRepository {
  async createProduct(productData) {
    try {
      return await Product.create(productData);
    } catch (error) {
      this.handleError("creating product", error);
    }
  }

  async getAllProducts() {
    try {
      return await Product.find().lean();
    } catch (error) {
      this.handleError("retrieving products", error);
    }
  }

  async getProductById(productId) {
    try {
      return await Product.findById(productId).lean();
    } catch (error) {
      this.handleError("retrieving product by ID", error);
    }
  }

  async updateProductById(productId, productData) {
    try {
      return await Product.findByIdAndUpdate(productId, productData, { new: true }).lean();
    } catch (error) {
      this.handleError("updating product by ID", error);
    }
  }

  async deleteProductById(productId) {
    try {
      return await Product.findByIdAndDelete(productId).lean();
    } catch (error) {
      this.handleError("deleting product by ID", error);
    }
  }

  async handleError(action, error) {
    console.error(`Error ${action}:`, error);
    throw new Error(`Unable to ${action.toLowerCase()}`);
  }
}

module.exports = new ProductRepository();
