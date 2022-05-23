
import { Form,Input, Button } from "antd";
import {useNavigate}  from "react-router-dom";
import { toast} from 'react-toastify';
import validator from 'validator'
import { register } from '../../api/Auth'
import { useState } from "react";


const RegisterTeacher =()=>{
     
    const [errorMessage, setErrorMessage] = useState('')
  
  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Password is strong')
    } else {
      setErrorMessage('Password is weak')
    }
  }
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const SubmitForm = async (values)=>{
        
        const response = await register(values)        
        if(response.data){ 
            toast.success('registration successful')  ;   
             
            navigate("/login");
        }else{
            
            toast.error("Invalid credentials  ");
            console.log("Register values ");
        }
        form.resetFields(); 
    }


    const onInputChangeName = e=>{
        const { value } = e.target;
        console.log('Input value: ', value);
     
        let newV = value.replace(/[^A-Za-z]/ig,'');
        
        form.setFieldsValue({lastname: newV});
        
    }
    
    return(
   <Form className="login"  onFinish={SubmitForm} form={form}>
        <Form.Item label="Name" name="name" rules={[{required:true,message:"Please enter your username"}]}><Input onChange={onInputChangeName}/></Form.Item>
        <Form.Item label="Password" name="password" rules={[{required:true,message:"Please enter your password"}]}><Input.Password onChange={(e) => validate(e.target.value)}/></Form.Item>        
        <Form.Item><Button type="primary" htmlType="submit" >Register</Button></Form.Item>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
        
   </Form>
    
    );
}
export default RegisterTeacher;