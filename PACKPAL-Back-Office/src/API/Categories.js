import axios from 'axios';

const createCategory = async (categoryData) => {
  try {
    const response = await axios.post('', categoryData); 
    return response.data; 
  } catch (error) {
    console.error('Error creating category:', error);
    throw error; 
  }
};

const fetchCategories = async () => {
  try {
    const response = await axios.get(''); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; 
  }
};

const fetchCategoryById = async (categoryId) => {
  try {
    const response = await axios.get(``);
    return response.data;
  } catch (error) {
    console.error('Error fetching category by ID:', error);
    throw error;
  }
};

const updateCategory = async (categoryId, updatedCategoryData) => {
  try {
    const response = await axios.put(``, updatedCategoryData); 
    return response.data; 
  } catch (error) {
    console.error('Error updating category:', error);
    throw error; 
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(``); 
    return response.data;
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error; 
  }
};

export { createCategory, fetchCategories, updateCategory, deleteCategory, fetchCategoryById };
