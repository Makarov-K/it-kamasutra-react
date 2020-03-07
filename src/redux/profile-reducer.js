const change_new_post_text = 'CHANGE-NEW-POST-TEXT';
const add_post = 'ADD-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case change_new_post_text:
            state.newPostText = action.newPostText;
            return state;
        case add_post:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }
};

export let changeNewPostTextCreator = (text) => ({type: change_new_post_text, newPostText: text});
export let addPostCreator = () => ({type: add_post});
export default profileReducer;
