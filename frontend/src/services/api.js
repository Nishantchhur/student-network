import axios from 'axios';

const API_BASE_URL = 'https://api.studentsnetwork.com'; // Replace with your backend URL

export const registerUser = (data) => axios.post(`${API_BASE_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_BASE_URL}/auth/login`, data);
export const getUserProfile = (userId) => axios.get(`${API_BASE_URL}/users/${userId}`);
export const updateUserProfile = (userId, data) => axios.put(`${API_BASE_URL}/users/${userId}`, data);
export const getInstitutions = () => axios.get(`${API_BASE_URL}/institutions`);
export const uploadPost = (data) => axios.post(`${API_BASE_URL}/posts`, data);
export const getPosts = () => axios.get(`${API_BASE_URL}/posts`);
export const uploadStory = (data) => axios.post(`${API_BASE_URL}/stories`, data);
export const getStories = () => axios.get(`${API_BASE_URL}/stories`);
export const followUser = (userId) => axios.post(`${API_BASE_URL}/users/${userId}/follow`);
export const searchContent = (query) => axios.get(`${API_BASE_URL}/search?q=${query}`);
