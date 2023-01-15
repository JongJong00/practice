import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Loginpage = () => {
  
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePw = (e) => {
    setPw(e.target.value);
  };
  

  const onClick = () => {
      if(email === "edmund1000@naver.com" && pw === "1234" )
      {
          alert('로그인 되었습니다!');
      }
      else
      {
        alert('다시 입력하세요!');
      }
     
  };

    return(
        <div>  

        <b>이메일 </b>
        <input 	
	      placeholder="이메일"
        email="email"
        onChange={changeEmail}/>

        <b>비밀번호</b> 
        <input
	    type="pw"
	    placeholder="비밀번호"
	    id="pw"
      onChange={changePw}/>

        
        
      <button onClick={onClick}>꼬</button>  
      <p><Link to="/Registerpage">회원가입</Link></p>
        </div>
    );
};

export default Loginpage;