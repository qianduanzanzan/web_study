import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElMessage } from "element-plus";

axios.defaults.timeout = 10000;
// axios.defaults.baseURL = 'http://127.0.0.1:7001'
//返回其他状态吗
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = false;

axios.interceptors.request.use(
    (config) => {
        //   const meta = config.meta || {};
        //   const isToken = meta.isToken === false;
        //   if (getToken() && !isToken) {
        //     config.headers[website.Authorization] = "Bearer " + getToken(); // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
        //   }
        //   //headers中配置serialize为true开启序列化
        //   if (config.method === "post" && meta.isSerialize === true) {
        //     config.data = serialize(config.data);
        //   }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (res) => {
        // console.log(res)
        //   NProgress.done();
        //   const status = Number(res.status) || 200;
        //   const statusWhiteList = website.statusWhiteList || [];
        //   const message = res.data.message || "未知错误";
        //   //如果在白名单里则自行catch逻辑处理
        //   if (statusWhiteList.includes(status)) return Promise.reject(res);
        //   //如果是401则跳转到登录页面
        //   if (status === 401)
        //     store.dispatch("FedLogOut").then(() => router.push({ path: "/login" }));
        //   // 如果请求为非200否者默认统一处理
        //   if (status !== 200) {
        //     Message({
        //       customClass: "custom-message",
        //       message: message,
        //       type: "error",
        //     });
        //     return Promise.reject(new Error(message));
        //   }
        return res;
    },
    (error) => {
        return Promise.reject(new Error(error));
    }
);

export default axios;