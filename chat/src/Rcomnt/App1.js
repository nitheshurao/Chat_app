import React from 'react'
const initialState = { messages: [] };

const store = createStore(reducer, initialState);
const addMessageAction1 = {
    type: 'ADD_MESSAGE',
    message: 'How does it look, Neil?',
};
store.dispatch(addMessageAction1);
const stateV1 = store.getState();
const addMessageAction2 = {
    type: 'ADD_MESSAGE', message: 'Looking good.',
};
store.dispatch(addMessageAction2);
const stateV2 = store.getState();
console.log('State v1:');
console.log(stateV1);
console.log('State v2:');
console.log(stateV2);

function App1() {
    return (
        <div>

        </div>
    )
}

export default App1
