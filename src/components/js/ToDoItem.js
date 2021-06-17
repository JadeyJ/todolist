import React, {Component} from 'react';
import '../css/ToDoItem.css';

class ToDoItem extends Component {
    render() {
        const { id, content, isComplete, onToggle, onRemove} = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="todo-item-remove" onClick={(e) => {
                    e.stopPropagation();    // onToggle 이 실행되지 않도록 함
                    onRemove(id)}
                }>
                    &times;
                </div>
                <div className={`todo-item-content ${isComplete ? 'isComplete' : ' ' }`}>
                    <div>
                        {content}
                    </div>
                </div>
                {
                    isComplete && (<div className="isComplete-mark">✓</div>)
                }
            </div>
        );
    }
}

export default ToDoItem;