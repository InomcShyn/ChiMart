const productRepository = require("../repositories/productRepository");

class ProductController {
  async createProduct(req, res) {
    try {
      const product = await productRepository.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: "Unable to create the product" });
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await productRepository.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Unable to fetch products" });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await productRepository.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Unable to fetch the product" });
    }
  }

  async updateProduct(req, res) {
    try {
      const product = await productRepository.updateProduct(
        req.params.id,
        req.body
      );
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Unable to update the product" });
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = await productRepository.deleteProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: "Unable to delete the product" });
    }
  }
}

module.exports = new ProductController();
