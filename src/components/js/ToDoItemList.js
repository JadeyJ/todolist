import React, {Component} from 'react';
import '../css/ToDoItemList.css';
import ToDoItem from "./ToDoItem";

class ToDoItemList extends Component {

    /*
     *  Form.js 에서 hook 사용으로 여기서는 제거
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    */

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