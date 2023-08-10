import Link from "next/link";
import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #FFC0CB;
`;

export const WrapperComponent = styled.div`
  padding: 0.5rem 0;
`

export const CredentialsCardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputText = styled.input`
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  width: 100%;
  height: 22px;
  margin-top: 5px;
`

export const LabelInput = styled.label`
  color: white;
  font-size: 16px;
`

export const SignInButton = styled.button`
  width: 100%;
  background-color: #FF69B4;
  color: white;
  border-radius: 8px;
  border: 0.1rem solid #bbb;
  padding: 0.4rem;
  cursor: pointer;
`

export const SignInWithGoogle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
  width: 100%;
  height: 42px;
  background-color: #4285f4;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  cursor: pointer;
  color:white;
`
export const GoogleIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 39px;
  border-radius: 2px;
  background-color: #fff;
`
export const GoogleIcon = styled.img`
  width: 22px;
  height: 22px;
`
export const GoogleIconText = styled.p`
  padding: 1.8rem;
`

export const RecuperationPasswordLink = styled.a`
  color: #FF69B4;
  font-size: 14px;
  text-align: right;
  margin-top: 5px;
  cursor: pointer;
  
`