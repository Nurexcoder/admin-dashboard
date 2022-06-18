import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    IconButton,
    Input,
    InputAdornment,
    OutlinedInput,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const Component = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #3786e5;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Form = styled.form`
    width: 391px;
    height: 584px;
    border-radius: 41px;
    background: #ffffff;
`;
const Upper = styled.div`
    margin-top: 30px;
    flex: 3;
    width: 100%;
    /* height: 100%; */
`;
const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const H = styled.h1``;
const Mgs = styled.span``;
const Lower = styled.div`
    margin-top: 60px;
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    align-items: center;
    justify-content: center;
    /* padding: 20px 40px; */
`;
const InputField = styled(TextField)`
    width: 80%;
    margin: 10px 0 !important;
`;
const InputFieldPassword = styled(OutlinedInput)`
    width: 80%;
    margin: 10px 0 !important;
`;
const SubmitButton = styled(Button)`
    width: 80%;
    margin: 10px 0 !important;
    height: 50px;
`;

const Login = () => {
    const [values, setValues] = useState({
        password: "",

        showPassword: false,
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Component>
            <Form>
                <Upper>
                    <Welcome>
                        <H>Welcome Back</H>
                        <Mgs>Login to continue</Mgs>
                    </Welcome>
                </Upper>
                <Lower>
                    <InputField placeholder='Username' name="username" />
                    <InputFieldPassword
                        id='outlined-adornment-password'
                        name='password'
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={(e) => handleChange(e)}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'>
                                    {values.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        placeholder='Password'
                    />
                    <SubmitButton color='success' variant='contained'>
                        Submit
                    </SubmitButton>

                </Lower>
            </Form>
        </Component>
    );
};

export default Login;
