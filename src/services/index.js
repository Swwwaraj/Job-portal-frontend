export const API_URL = import.meta.env.VITE_API_URL;
import Register from '../pages/register';

export async function register({ data }) {
    const response = await fetch('${API_URL}/auth/register',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
    
}