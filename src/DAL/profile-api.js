import baseAxios from "./base-axios";


let profileApi = {
    getProfile(id) {
        return (
            baseAxios.get(`profile/${id}`)
                .then(response => {
                    return response.data
                })
        )
    },
    getProfileStatus(id) {
        return (
            baseAxios.get(`profile/status/${id}`)
                .then(response => {
                    return response.data
                })
        )
    }
};

export default profileApi;