import request from "@/utils/request";
// 统一下拉接口

export const getPublicDropDownList = () => {
    return request({
        url: 'http://api.st.test.kuaigang.net/pc/common/app_url',
        method: "get",
    });
};