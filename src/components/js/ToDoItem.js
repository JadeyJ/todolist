import React, {Component} from 'react';
import '../css/ToDoItem.css';

class ToDoItem extends Component {
    /*
     *  Form.js 에서 hook 사용으로 여기서는 제거
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isCompleted !== nextProps.isCompleted;
    }
    */

    render() {
        const {content, isCompleted, id, onToggle, onRemove} = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="todo-item-remove" onClick={(e) => {
                    e.stopPropagation();    // onToggle 이 실행되지 않도록 함
                    onRemove(id)}
                }>
                    &times;
                </div>
                <div className={`todo-item-content ${isCompleted && 'isComplete'}`}>
                    <div>
                        {content}
                    </div>
                </div>
                {
                    isCompleted && (<div className="isComplete-mark">✓</div>)
                }
            </div>
        )
    }
}

export default ToDoItem;