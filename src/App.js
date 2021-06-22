import React, {Component} from 'react';
import ToDoListTemplate from "./components/js/ToDoListTemplate";
import Form from "./components/js/Form";
import ToDoItemList from "./components/js/ToDoItemList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.handleCreate = this.handleCreate.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        //this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleInitInfo = this.handleInitInfo(this);
    }

    /*
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    */

    handleInitInfo() {
        fetch("/api/todos")
            .then(res => res.json())
            .then(todos => this.setState({todos : todos}))
            .catch(err => console.log(err))
    }

    handleCreate(inputValue) {
        const { todos } = this.state;
        if( inputValue === "" ){
            alert("할 일을 입력해주세요.");
            return;
        }

        this.setState({
            todos: todos.concat({
                id: 0,
                content: inputValue,
                isCompleted: false
            })
        });

        const data = {
            body: JSON.stringify({"content" : inputValue}),
            headers: {'Content-type' : 'application/json'},
            method: 'POST'
        };
        fetch("/api/todos", data)
            .then(res => {
                if(!res.ok){
                    throw new Error(res.status);
                }else{
                    return this.handleInitInfo();
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    /*
    handleKeyPress(event){
        if(event.key === "Enter"){
            this.handleCreate();
        }
    }
    */

    handleToggle(id){
        const { todos } = this.state;
        const isCompleted = todos.find(todo => todo.id === id).isCompleted;
        if(!window.confirm(isCompleted ? "리스트로 복원하시겠습니까?" : "완료 처리하시겠습니까?")) {
            return;
        }

        // 몇번째 아이템인지 찾기
        const index = todos.findIndex(todo => todo.id === id);
        // 찾은 객체 저장
        const selected = todos[index];
        // 배열 복사
        const nextTodos = [...todos];
        // 찾은 값을 새로운 배열에 대입
        nextTodos[index] = {
            ...selected,
            isCompleted: !isCompleted
        };

        // 변경된 값으로 설정
        this.setState({
            todos: nextTodos
        });

        const data = {
            headers: {'Content-type' : 'application/json'},
            method: 'PUT'
        };
        fetch("/api/todos/" + id , data)
            .then(res => {
                if(!res.ok){
                    throw new Error(res.status);
                }else{
                    return this.handleInitInfo();
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleRemove(id) {
        const { todos } = this.state;

        const removeContent = todos.find(todo => todo.id === id).content;
        if(!window.confirm("'" + removeContent + "' 을 삭제하시겠습니까?")) {
            return;
        }

        this.setState({
            todos : todos.filter(todo => todo.id !== id)
        });

        const data = {
            headers: {'Content-type' : 'application/json'},
            method: 'DELETE'
        };
        fetch("/api/todos/" + id, data)
            .then(res => {
                if(!res.ok){
                    throw new Error(res.status);
                }else{
                    return this.handleInitInfo();
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <ToDoListTemplate form={
                <Form
                    //value={this.state.input}
                    onCreate={this.handleCreate}
                    //onChange={this.handleChange}
                    //onKeyPress={this.handleKeyPress}
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