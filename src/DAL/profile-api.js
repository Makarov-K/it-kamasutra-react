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
        return (
            baseAxios.put(`/profile/status`, {status: newStatus})
                .then(response => {
                    return response.data.resultCode
                })
        )
    },
    putNewAvatar(newAvatar) {
        const formData = new FormData();
        formData.append('image', newAvatar);

        return (
            baseAxios.put('profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    }
};

export default profileApi;