import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
  const onChange = (page) => {}
  return (
    <div style={{padding: '0 120px', backgroundColor: '#efefef'}}>
      <Row style={{paddingTop: '10px', flexWrap: 'nowrap'}}>
      <WrapperNavbar span={4}>
        <NavbarComponent />
      </WrapperNavbar>

      <Col span={20}>
      <WrapperProducts>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </WrapperProducts>
      <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} style={{textAlign: 'center', marginTop: '10px'}} />
      </Col>
    </Row>
    </div>
  )
}

export default TypeProductPage