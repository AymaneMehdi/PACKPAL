import axios from 'axios';

const addCustomer = async (customerData) => {
  try {
    const response = await axios.post('', customerData); 
    return response.data; 
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error; 
  }
};

const fetchCustomers = async () => {
  try {
    const response = await axios.get(''); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error; 
  }
};

const fetchCustomerById = async (customerId) => {
  try {
    const response = await axios.get(``); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching customer by ID:', error);
    throw error; 
  }
};

const updateCustomer = async (customerId, updatedCustomerData) => {
  try {
    const response = await axios.put(``, updatedCustomerData); 
    return response.data; 
  } catch (error) {
    console.error('Error updating customer:', error);
    throw error; 
  }
};

const deleteCustomer = async (customerId) => {
  try {
    const response = await axios.delete(``); 
    return response.data; 
  } catch (error) {
    console.error('Error deleting customer:', error);
    throw error; 
  }
};

export { addCustomer, fetchCustomers, fetchCustomerById, updateCustomer, deleteCustomer };
