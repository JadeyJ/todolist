import React, {Component} from 'react';
import '../css/ToDoItemList.css';
import ToDoItem from "./ToDoItem";

class ToDoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <ToDoItem content="TodoItem1" />
                <ToDoItem content="TodoItem2" />
                <ToDoItem content="TodoItem3" />

            </div>
        );
    }
}

export default ToDoItemList;