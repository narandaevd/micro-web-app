import React from 'react';
import styled from 'styled-components';

const StyledBanner: React.FC<any> = styled.div`
    position: absolute;
    width: 251px;
    height: 357px;
    background-color: #86D3F4;
    top: ${357 / 2}px;
    left: ${1280 - 251}px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`

const Button: React.FC<any> = styled.button`
    height: 52px;
    width: 152px;
    border: 3px solid black;
    background-color: #fff;
`

type BannerDispatch = (prevState: boolean) => boolean;
type setIsBannerOpenedFunction = (callback: BannerDispatch) => void;

interface BannerProps<T> {
    setIsBannerOpened: T,
}

function Banner(props: BannerProps<setIsBannerOpenedFunction>): React.ReactElement {
  return (
    <StyledBanner>
        <img src="/img/qr2.png" alt="" />
        <Button onClick={() => props.setIsBannerOpened((prev) => !prev)}>OK</Button>
    </StyledBanner>
  );
}

export default Banner;
