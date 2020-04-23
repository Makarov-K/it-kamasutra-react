import baseAxios from "./base-axios";

let authApi = {
    checkAuth() {
        return (
            baseAxios.get('auth/me')
                .then(response => {
                    return response.data
                })
        )
    },
    login(loginData) {
        return (
            baseAxios.post('auth/login', {...loginData})
                .then(response => {
                    return response.data
                })
        )
    },
    logout() {
        return (
            baseAxios.post('auth/logout')
                .then(response => {
                    return response.data.resultCode
                })
        )
    },
    getCaptchaUrl() {
        return (
            baseAxios.get('security/get-captcha-url')
        )
    }
};

export default authApi;