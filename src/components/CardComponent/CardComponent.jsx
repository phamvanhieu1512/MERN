
import React from 'react'
import { StyleNameProduct, WrapperCard, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {
    StarFilled,
  } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';

const CardComponent = () => {
  return (
    <WrapperCard
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        
    <img 
        src={logo} alt='Logo' 
        style={
                {height: '14px', width: '68px', objectFit: 'cover', position: 'absolute', top: '-1px', left: '-1px', borderTopLeftRadius: '4px'}
                }/>
    <StyleNameProduct>Iphone</StyleNameProduct>
    <WrapperReportText>
        <span style={{marginRight: '4px'}}>
            <span>4.95</span> <StarFilled style={{fontSize: '12px', color: 'yellow'}} />
        </span>
        <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
    </WrapperReportText>
    <WrapperPriceText>19.000.000 
        <WrapperDiscountText>-5%</WrapperDiscountText>
    </WrapperPriceText>
  </WrapperCard>
  )
}

export default CardComponent