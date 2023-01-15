import React, { useState } from 'react';


const Registerpage = () => {
  
  const [newemail, setnewEmail] = useState('');
  const [newpw, setnewPw] = useState('');

  const changenewEmail = (e) => {
    setnewEmail(e.target.value);
  };

  const changenewPw = (e) => {
    setnewPw(e.target.value);
  };
  

  const onClick = () => {
      if(newemail.includes('@') && newpw.length >= 8 )
      {
          alert('회원가입 됐다');
      }
      else
      {
        alert('다시');
      }
     
  };

    return(
        <div>  
          <p>회원가입 폼!!</p>
        <b>이메일 </b>
        <input 	
	      placeholder="이메일"
        email="email"
        onChange={changenewEmail}/>

        <b>비밀번호</b> 
        <input
	    type="pw"
	    placeholder="비밀번호"
	    id="pw"
      onChange={changenewPw}/>

        
        
      <button onClick={onClick}>회원가입 완료</button>  
     
        </div>
    );
};

export default Registerpage;