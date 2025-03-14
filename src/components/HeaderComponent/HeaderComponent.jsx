import React from 'react';
import { Col } from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
      <Col span={6}>
        <WrapperTextHeader>PHAMVANHIEU</WrapperTextHeader>
      </Col>
      <Col span={12}>
      <ButtonInputSearch
        size="large"  
        placeholder="Nhập thông tin cần tìm kiếm" 
        textButton="Tìm kiếm"

      />
    </Col>
      <Col span={6} style={{display: 'flex'}}>
      <WrapperHeaderAccount>
        <UserOutlined style={{fontSize: '30px'}} />
        <div>
          <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
          <div>
            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
            <span><CaretDownOutlined /></span>
          </div>
        </div>
      </WrapperHeaderAccount>
        <div>
          <ShoppingCartOutlined style={{fontSize: '30px', color: 'white'}}/>
          <WrapperTextHeaderSmall style={{display: 'flex', alignItems: 'center'}}>Giỏ hàng</WrapperTextHeaderSmall>
        </div>
      </Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent