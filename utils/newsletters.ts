import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BANKLESS_API_URL

export const registerNewSubscriber = (email: string) => new Promise<string>((resolve, reject) => {
  axios.post(`/subscribers/register`, { email })
    .then(res => resolve(res.data.data))
    .catch(err => reject(err.response.data.error));
})
