import React from 'react'
import {
    SearchOutlined
} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const {
        size, 
        placeholder, 
        textButton, 
        bordered, 
        backgroundColorInput = '#fff', 
        backgroundColorButton = 'rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props
  return (
    <div style={{display: 'flex'}}>
        <InputComponent 
          size={size} 
          placeholder={placeholder} 
          bordered={bordered} 
          style={{backgroundColor: backgroundColorInput, borderRadius: 0}}
        />
        <ButtonComponent 
          size={size} 
          icon={<SearchOutlined style={{color: colorButton}} />}
          styleButton={{borderRadius: 0, backgroundColor: backgroundColorButton, border: !bordered && 'none'}}
          textButton={textButton}
          styleTextButton={{color: colorButton}}
          >
        </ButtonComponent>
    </div>
  )
}

export default ButtonInputSearch