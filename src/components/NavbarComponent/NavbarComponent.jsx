import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Col, Rate, Row } from 'antd'

const NavbarComponent = () => {
  const onChange = () => {}
  const renderComponent = (type, options) => {
    switch(type) {
      case 'text':
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>
        })
      case 'checkbox':
        return (
          <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
            {options.map((option) => {
              return (
                <Checkbox value={option.value}>{option.label}</Checkbox>
              )
            })}

          </Checkbox.Group>
        )
      case 'star':
        return options.map((option) => {
          return (
            <div style={{display: 'flex', gap: '4px', padding: '6px 0'}}>
              <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
              <span>{`từ ${option} sao`}</span>
            </div>
          )
        })
      case 'price':
        return options.map((option) => {
          return (
            <WrapperTextPrice>{option}</WrapperTextPrice>
          )
        })
      default:
        return {}
    }
  }
  return (
    <div>
        <WrapperLabelText>Label</WrapperLabelText>
        <WrapperContent>
          {renderComponent('text', ['Tu lanh', 'TV', 'May giat'])}
        </WrapperContent>
        <WrapperContent>
          {renderComponent('checkbox', [
              {value: 'a', label: 'A'},
              {value: 'b', label: 'B'},
              {value: 'c', label: 'C'},
            ])}
        </WrapperContent>
        <WrapperContent>
          {renderComponent('star', [3,4,5])}
        </WrapperContent>
        <WrapperContent>
          {renderComponent('price', ['Dưới 40', 'Trên 50.000'])}
        </WrapperContent>
    </div>
  )
}

export default NavbarComponent