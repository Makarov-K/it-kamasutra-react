import * as axios from "axios";

let usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`,
                {
                    withCredentials: true
                }).then(response => {
                return response.data
            })
        )
    },
    getUsersForCurrentPage(pageNumber, pageSize = 5) {
        return (
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${pageNumber}`,
                {
                    withCredentials: true
                }).then(response => {
                    return response.data.items
            })
        )
    },
    followChosenUser(userId) {
        return(
            axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": 'ab2c1ce9-6b51-44a1-bc57-be1221c2c356'
                }
            }).then(response => {
                return response.data.resultCode
            })
        )
    },
    unFollowChosenUser(userId) {
        return(
            axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {
                withCredentials: true,
                headers: {
                    "API-KEY": 'ab2c1ce9-6b51-44a1-bc57-be1221c2c356'
                }
            }).then(response => {
                return response.data.resultCode
            })
        )
    }
};


export default usersApi;