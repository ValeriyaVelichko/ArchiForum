import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state : {
        profilePage: {
            postsData: [
                { link: 1, message: "Hello", likes: "2" },
                { link: 2, message: "I'm ok", likes: "10" }
            ],
            newPostText: 'Lera-Valera',
        },
        dialogPage: {
            dialogsData: [
                { link: 1, name: 'Lera' },
                { link: 2, name: 'Vera' }
            ],
            massagesData: [
                { link: 1, message: 'Hello' },
                { link: 2, message: 'Im here' }
            ],
            newMessageBody: '',
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log('123');
    },  
    getState(){
        return this._state
    },
    subscribe (observer){
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state);
    },


}

export default store