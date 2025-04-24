import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import ImageLogoSignIn from '../../assets/images/logoSignIn.png'

const SignInPage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
      <div style={{display: 'flex', width: '800px', height: '445px', borderRadius: '6px', backgroundColor: '#fff'}}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm palaceholder="abc@gmail.com" style={{marginBottom: '10px'}} />
          <InputForm palaceholder="password" />
          <ButtonComponent
                      size={40} 
                      styleButton=
                      {
                          {backgroundColor: 'rgb(255, 57, 69', 
                              height: '48px', 
                              width: '100%',
                              border: 'none',
                              borderRadius: '4px',
                              margin: '26px 0 10px'
                          }
                      }
                      textButton={'Đăng nhập'}
                      styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}>
                      </ButtonComponent>
                      <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                      <p>Chưa có tài khoản <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <div>
            <Image src={ImageLogoSignIn} preview={false} alt='image-logo-signin' style={{height: '204px', width: '204px'}}/>
            <h4>Mua sắm tại Tiki</h4>
            
          </div>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage