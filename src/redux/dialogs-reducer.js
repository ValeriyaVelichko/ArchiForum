const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY';
const sendMessage = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case updateNewMessageBody:
            state.newMessageBody = action.body;
            return state;
        case sendMessage:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.massagesData.push({ link: 3, message: body });
            return state;
        default:
            return state;
    }
}
export const sendMessageActionCreator = () => ({type: sendMessage});
export const updateNewMessageBodyActionCreator = (body) => 
({type: updateNewMessageBody, body: body});
    export default dialogsReducer;