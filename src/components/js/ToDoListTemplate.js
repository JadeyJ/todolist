import React from 'react';
import '../css/ToDoListTemplate.css';

const ToDoListTemplate = ({ form, children }) => {
    return (
        <main className="todo-list-template">
            <div className="todo-list-title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todo-item-list-wrapper">
                {children}
            </section>
        </main>
    );
}

export default ToDoListTemplate;