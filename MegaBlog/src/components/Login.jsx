import React,{useState} from 'react'
import { data, Link,useNavigate } from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form '


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handlSubmit} = useForm()
    const [error, setError] = useState(null)

    const login = async(data) => {
        try {
            const user = await authService.login(data.email, data.password)
            dispatch(authLogin(user))
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Login
