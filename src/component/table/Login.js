import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuth}) => {
    const navigate = useNavigate()
    const login = (e) =>{
        e.preventDefault();
        console.log('로그인테스트');
        setAuth(true)
        navigate('/')
    }

    return(
        <div>
            <form onSubmit={(e)=>}></form>
        </div>
    )
}