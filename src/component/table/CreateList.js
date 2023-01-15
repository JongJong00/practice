import React from 'react';

function CreateList(item, index, onChange, onCreate){
    return (
        <div>
            <input 
                name="item" 
                placeholder="계정명" 
                onChange={onChange} 
                value={item}
            />
            <input 
                name="index" 
                placeholder="이메일" 
                onChange={onChange} 
                value={index}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}
 
export default CreateList;