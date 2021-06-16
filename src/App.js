import React, {Component} from 'react';
import ToDoListTemplate from "./components/js/ToDoListTemplate";
import Form from "./components/js/Form";
import ToDoItemList from "./components/js/ToDoItemList";

class App extends Component {
    render() {
        return (
            <ToDoListTemplate form={<Form />}>
                <ToDoItemList />
            </ToDoListTemplate>
        );
    }
}

export default App;