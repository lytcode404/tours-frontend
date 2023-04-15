import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
    proxy: undefined,
});

// fetch blog-t1s
export const fetchBlogs = async () => api.get('/api/Dbplaces');