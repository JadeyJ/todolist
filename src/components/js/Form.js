import React, {useState} from 'react';
import '../css/Form.css';

const Form = ({ onCreate }) => {

    const [ input, setInput ] = useState('');

    // input값 변경
    const handleChange = (event) => {
        setInput(event.target.value);
    }

    // 엔터키 이벤트
    const handleKeyPress = (event) => {
        // 눌린 키가 Enter key 인 경우 handleCreate 호출
        if(event.key === 'Enter') {
            onCreate(input);
            setInput('');
        }
    }

    return (
        <div className="form">
            <input
                value={input}
                placeholder="To Do 리스트에 추가할 항목을 입력"
                onChange={handleChange}
                onKeyPress={handleKeyPress} />
            <div className="create-button"
                 onClick={() => {
                     onCreate(input);
                     setInput('');
                 }}>
                추가
            </div>
        </div>
    );
}

export default Form;