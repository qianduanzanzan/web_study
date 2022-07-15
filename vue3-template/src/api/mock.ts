import request from "@/utils/request";

export const getNewsList = (params: any = {}) => {
    return request({
        url: '/mock/getNewsList',
        method: "get",
        data: params
    });
};

export const addNew = (data: any) => {
    return request({
        url: '/mock/addNew',
        method: "post",
        data
    });
};

export const editNew = (data: any) => {
    return request({
        url: '/mock/editNew',
        method: "put",
        data
    });
};

export const delNew = (id: any) => {
    console.log(id)
    return request({
        url: '/mock/delNew',
        method: "delete",
        data: { id: id }
    });
};
