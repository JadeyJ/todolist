import React, {Component} from 'react';
import '../css/ToDoItemList.css';
import ToDoItem from "./ToDoItem";

class ToDoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            // ({id, content, isCompleted}) => (
            //     <ToDoItem
            //         id={id}
            //         content={content}
            //         isCompleted={isCompleted}
            //         onToggle={onToggle}
            //         onRemove={onRemove}
            //         key={id}
            //     />
            // )
            ( todo ) => (
                <ToDoItem
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default ToDoItemList;