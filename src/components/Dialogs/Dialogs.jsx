import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Messages/Message';
import Dialog from './Dialog/Dialog';
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    let state = props.store.getState().dialogPage;

    let dialogsElement = state.dialogsData.map((el) => {
        return (
            <Dialog name={el.name} link={el.link} />
        );
    });

    let messagesElement =  state.massagesData.map((el) => {
        return (
            <Message message={el.message} />
        );
    });
    let newMessageBody =  state.newMessageBody

    let OnSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let OnNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.names}>
                {dialogsElement}
            </div>
            <div className={classes.massages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} 
                                    placeholder="Message"
                                    onChange={OnNewMessageChange}>
                        </textarea>
                    </div>
                    <div><button onClick={OnSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;