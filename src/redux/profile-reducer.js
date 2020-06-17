const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {

        case addPost:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 15,
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case updateNewPostText:
            state.newPostText = action.text;
            return state;
        default:
        return state;
    }
}
export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) => 
({type: updateNewPostText, text: text});
export default profileReducer