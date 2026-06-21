import axios from 'axios';

const fetchOrders = async () => {
  try {
    const response = await axios.get('');
    return response.data; 
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error; 
  }
};

const fetchOrderById = async (orderId) => {
  try {
    const response = await axios.get(``);
    return response.data;
  } catch (error) {
    console.error('Error fetching order by ID:', error);
    throw error; 
  }
};

const createOrder = async (orderData) => {
  try {
    const response = await axios.post('', orderData); 
    return response.data; 
  } catch (error) {
    console.error('Error creating order:', error);
    throw error; 
  }
};

const updateOrder = async (orderId, updatedOrderData) => {
  try {
    const response = await axios.put(``, updatedOrderData); 
    return response.data; 
  } catch (error) {
    console.error('Error updating order:', error);
    throw error; 
  }
};

const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(``);
    return response.data; 
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error; 
  }
};

export { fetchOrders, fetchOrderById, createOrder, updateOrder, deleteOrder };
