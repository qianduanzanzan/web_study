import request from "@/utils/request";
// 统一下拉接口

export const getPublicDropDownList = () => {
    return request({
        url: 'http://api.st.test.kuaigang.net/pc/common/app_url',
        method: "get",
    });
};

export const test = (params: any) => {
    return request({
        url: 'http://127.0.0.1:7001/app',
        method: "get",
        params
    });
};

export const test11 = () => {
    return request({
        url: 'http://127.0.0.1:7002/hero',
        method: "get",
    });
};

export const test22 = () => {
    return request({
        url: 'http://127.0.0.1:7001/test/list',
        method: "get",
    });
};

