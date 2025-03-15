import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { WrapperButtonCenter, WrapperButtonMore } from '../../components/NavbarComponent/style'


const Homepage = () => {
  const arr = ['TV', 'Tu lanh', 'Laptop']
  return (
    <>
      <div style={{padding: '0 120px'}}>
      <WrapperTypeProduct>

        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />
        })}
      </WrapperTypeProduct>
    </div>
      <div id="container" style={{backgroundColor: "#efefef", padding: '0 120px', height: '1000px'}}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <WrapperButtonCenter>
          <WrapperButtonMore textButton={"Xem thêm"} type="outline" styleButton={{
            border: '1px solid rgb(11, 116, 229)', 
            color: 'rgb(11, 116, 229)', 
            width: '240px',
            height: '38px',
            borderRadius: '4px'
          }}
          styleTextButton={{fontWeight: 500}}
          />
        </WrapperButtonCenter>
        {/* <NavbarComponent /> */}
      </div>
    </>
  )
}

export default Homepage