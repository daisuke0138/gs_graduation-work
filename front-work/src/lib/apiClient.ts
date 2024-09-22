import axios from "axios";

const apiClient = axios.create({
    // baseURL: "http://localhost:3001/api",

    // baseURL: '/api',
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
    // baseURL: process.env.NEXT_PUBLIC_API_BASEURL || `https:${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
    // baseURL: process.env.NODE_ENV === 'development'
    //     ? 'http://localhost:3001/api'
    //     : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});
export default apiClient;

// const apiClient = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL + '/auth/v1',
//     headers: {
//         'apikey': process.env.NEXT_PUBLIC_SUPABASE_API_KEY, // SupabaseのAPIキー
//         'Content-Type': 'application/json',
//     },
// });

// apiClient.post('/token', {
//     email: 'tanaka@co.jp',
//     password: '12345678',
//     grant_type: 'password',     // grant_typeを明示的に指定
// })
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error.response.data); // 詳細なエラー情報を取得
//     });

