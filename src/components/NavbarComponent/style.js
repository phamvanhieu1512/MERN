import styled from "styled-components";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export const WrapperLabelText = styled.h4`
  color: rgb(56, 56, 61);
  font-size: 14px;
  font-weight: 500;
`;

export const WrapperTextValue = styled.div`
  color: rgb(56, 56, 61);
  font-size: 12px;
  font-weight: 400;
`;

export const WrapperContent = styled.div`
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  // gap: 12px;
  // background-color: #fff;
`;

export const WrapperTextPrice = styled.div`
  padding: 4px;
  borderradius: 10px;
  color: rgb(56, 56, 61);
  backgroundcolor: rgb(238, 238, 238);
  width: fit-content;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    background-color: rgb(13, 92, 182);
    span {
      color: #fff;
    }
  }
`;

export const WrapperButtonCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
