import { useCallback, useState } from "react";
import {BiAddToQueue} from "react-icons/bi";
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    
    const [value ,setvalue]= useState('');

    const onChange = useCallback(
        e =>{
        setvalue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e =>{
            onInsert(value);
            setvalue('');
            e.preventDefault(); // form 전송시 새로고침 방지 
        },
        [onInsert, value],
    );

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
            placeholder='insert todo'
            value={value}
            onChange={onChange}
            />

            <button type ="submit">
                <BiAddToQueue />
            </button>
        </form>
    );
};

export default TodoInsert;