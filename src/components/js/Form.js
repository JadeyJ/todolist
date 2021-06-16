import React from 'react';
import '../css/Form.css';

const Form = ({ value, onChange, onKeyPress, onCreate }) => {
    return (
        <div className="form">
            <input
                value={value}
                placeholder="To Do 리스트에 추가할 항목을 입력"
                onChange={onChange}
                onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
}

export default Form;