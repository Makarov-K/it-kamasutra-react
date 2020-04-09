import baseAxios from "./base-axios";

let usersApi = {
    requestUsers(currentPage = 1, pageSize = 10) {
        return (baseAxios.get(`users?count=${pageSize}&page=${currentPage}`)
                .then(response => {
                return response.data
            })
        )
    },
    followChosenUser(userId) {
        return (
            baseAxios.post('follow/' + userId)
                .then(response => {
                return response.data.resultCode
            })
        )
    },
    unFollowChosenUser(userId) {
        return (
            baseAxios.delete('follow/' + userId)
                .then(response => {
                return response.data.resultCode
            })
        )
    }
};


export default usersApi;