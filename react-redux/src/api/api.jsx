import axios from 'axios';

const apiUrl = 'http://localhost:5000/todos'; // replace with your actual API endpoint

export const fetchTodos = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const addTodo = async (newTodo) => {
  try {
    const response = await axios.post(apiUrl, newTodo);
    return response.data;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};
