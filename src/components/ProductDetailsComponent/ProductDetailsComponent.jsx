import { Col, Image, Row } from 'antd'
import React from 'react'
import ImageProduct from '../../assets/images/test.webp'
import ImageDemo from '../../assets/images/demo4.webp'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageDemo, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import {
    StarFilled,
    PlusOutlined,
    MinusOutlined
  } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const ProductDetailsComponent = () => {
    const onChange = () => {};
  return (
    <Row style={{padding: '16px'}}>
        <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight: '8px'}}>
        <Image src={ImageProduct} alt="ImageProduct" preview={false}></Image>
            <Row style={{paddingTop: '12px',display: 'flex', justifyContent: 'space-between'}}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageDemo src={ImageDemo} alt="ImageDemo" preview={false}></WrapperStyleImageDemo>
                </WrapperStyleColImage>

                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageDemo src={ImageDemo} alt="ImageDemo" preview={false}></WrapperStyleImageDemo>
                </WrapperStyleColImage>

                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageDemo src={ImageDemo} alt="ImageDemo" preview={false}></WrapperStyleImageDemo>
                </WrapperStyleColImage>

                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageDemo src={ImageDemo} alt="ImageDemo" preview={false}></WrapperStyleImageDemo>
                </WrapperStyleColImage>
                
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageDemo src={ImageDemo} alt="ImageDemo" preview={false}></WrapperStyleImageDemo>
                </WrapperStyleColImage>
            </Row>
        </Col>
        <Col span={14} style={{paddingLeft: '10px'}}>
            <WrapperStyleNameProduct>Vợt cầu lông yonex 88D 2024</WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
                <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>200.000d</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>Giao đến</span>
                <span className="address">Q. 1, P. Bến nghé, Hồ Chí Minh</span>
                <span className="change-address">-Đổi địa chỉ</span>
            </WrapperAddressProduct>
            <div style={{margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
                <div style={{marginBottom: '6px'}}>Số lượng</div>
                <WrapperQualityProduct>
                    <button style={{border: 'none', backgroundColor: 'transparent'}}>
                        <MinusOutlined style={{color: '#000', fontSize: '20px'}}/>
                    </button>
                    <WrapperInputNumber defaultValue={3} onChange={onChange} size='small' />
                    <button style={{border: 'none', backgroundColor: 'transparent'}}>
                        <PlusOutlined style={{color: '#000', fontSize: '20px'}} />
                    </button>
                </WrapperQualityProduct>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <ButtonComponent
                    size={40} 
                    styleButton=
                    {
                        {backgroundColor: 'rgb(255, 57, 69', 
                            height: '48px', 
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px'
                        }
                    }
                    textButton={'Chọn mua'}
                    styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}>
                    </ButtonComponent>

                    <ButtonComponent
                    size={40} 
                    styleButton=
                    {
                        {backgroundColor: '#fff', 
                            height: '48px', 
                            width: '220px',
                            border: '1px solid rgb(13, 92, 182)',
                            borderRadius: '4px'
                        }
                    }
                    textButton={'Mua trả sau'}
                    styleTextButton={{color: 'rgb(13, 92, 182', fontSize: '15px', fontWeight: '700'}}>
                    </ButtonComponent>
                </div>
        </Col>
    </Row>
  )
}

export default ProductDetailsComponent