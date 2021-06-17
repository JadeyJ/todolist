import React, {Component} from 'react';
import ToDoListTemplate from "./components/js/ToDoListTemplate";
import Form from "./components/js/Form";
import ToDoItemList from "./components/js/ToDoItemList";

class App extends Component {
    constructor(props) {
        super(props);
        this.id = 2;
        this.state = {
            input: "",
            todos: [
                {id: 0, content: "Todo-1", isCompleted: false},
                {id: 1, content: "Todo-2", isCompleted: true}
            ]
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleCreate() {
        const { input, todos } = this.state;
        if( input === "" ){
            alert("할 일을 입력해주세요.");
            return;
        }

        this.setState({
            input: "",
            todos: todos.concat({
                id: this.id++,
                content: input,
                isCompleted: false
            })
        });
    }

    handleKeyPress(event){
        if(event.key === "Enter"){
            this.handleCreate();
        }
    }

    render() {
        return (
            <ToDoListTemplate form={
                <Form
                    value={this.state.input}
                    onCreate={this.handleCreate}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
            }>
                <ToDoItemList todos={this.state.todos} />
            </ToDoListTemplate>
        );
    }
}

export default App;