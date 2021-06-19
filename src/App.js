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
        this.handleToggle = this.handleToggle.bind(this);
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

    handleToggle(id){
        const todos = this.state.todos;
        const isCompleted = todos.find(todo => todo.id === id).isCompleted;
        if(!window.confirm(isCompleted ? "리스트로 복원하시겠습니까?" : "완료 처리하시겠습니까?")) {
            return;
        }

        // 몇번째 아이템인지 찾기
        const index = todos.findIndex(todo => todo.id === id);
        // 찾은 객체 저장
        const selected = todos[index];
        // 배열 복사
        const newTodos = [...todos];
        // 찾은 값을 새로운 배열에 대입
        newTodos[index] = {
            ...selected,
            isCompleted: !isCompleted
        };

        // 변경된 값으로 설정
        this.setState({
            todos: newTodos
        });
    }

    handleRemove(id) {
        const todos = this.state.todos;

        const removeContent = todos.find(todo => todo.id === id).content;
        if(!window.confirm("'" + removeContent + "' 을 삭제하시겠습니까?")) {
            return;
        }

        this.setState({
            todos : todos.filter(todo => todo.id !== id)
        });
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
                <ToDoItemList
                    todos={this.state.todos}
                    onToggle={this.handleToggle}
                />
            </ToDoListTemplate>
        );
    }
}

export default App;