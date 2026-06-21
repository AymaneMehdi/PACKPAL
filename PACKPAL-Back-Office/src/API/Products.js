import axios from 'axios';

const createProduct = async (productData) => {
  try {
    const response = await axios.post('', productData); 
    return response.data; 
  } catch (error) {
    console.error('Error adding product:', error);
    throw error; 
  }
};

const fetchProducts = async () => {
  try {
    const response = await axios.get(''); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; 
  }
};

const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(``); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error; 
  }
};

const updateProduct = async (productId, updatedProductData) => {
  try {
    const response = await axios.put(``, updatedProductData); 
    return response.data; 
  } catch (error) {
    console.error('Error updating product:', error);
    throw error; 
  }
};

const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(``); 
    return response.data; 
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error; 
  }
};

export { createProduct, fetchProducts, fetchProductById, updateProduct, deleteProduct };
