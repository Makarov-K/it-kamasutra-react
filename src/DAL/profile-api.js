import baseAxios from "./base-axios";


let profileApi = {
    requestProfile(id) {
        return (
            baseAxios.get(`profile/${id}`)
                .then(response => {
                    return response.data
                })
        )
    },
    requestProfileStatus(id) {
        return (
            baseAxios.get(`profile/status/${id}`)
                .then(response => {
                    return response.data
                })
        )
    },
    updateProfileStatus(newStatus) {
        return(
            baseAxios.put(`/profile/status`, {status: newStatus})
                .then(response => {
                    return response.data.resultCode
                })
        )
    }
};

export default profileApi;