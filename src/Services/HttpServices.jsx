import axios from "axios";

const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true
})

Api.interceptors.request.use(
    res => res,
    err => Promise.reject(err)
)

Api.interceptors.response.use(
    res => res,
   async (err) => {
      const originalConfig = err.config;
        if(err.response.status === 401 && !originalConfig._retry){
            originalConfig._retry = true;
            try {
              const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token` , {withCredentials: true})
              if(data) return Api(originalConfig)
            } catch (error) {
                return Promise.reject(error)
            }
        }
       return Promise.reject(err)
    }
)

const Http = {
    get: Api.get,
    post: Api.post,
    delete: Api.delete,
    put: Api.put,
    patch: Api.patch,
}

export default Http;