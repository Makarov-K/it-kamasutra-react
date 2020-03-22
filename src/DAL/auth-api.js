import baseAxios from "./base-axios";


let authApi = {
    checkAuth() {
        return (
            baseAxios.get('auth/me')
                .then(response => {
                    return response.data
                })
        )
    }
};

export default authApi;