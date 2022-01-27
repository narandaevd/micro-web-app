import React from 'react';
import styled from 'styled-components';

const StyledVideoBanner: React.FC = styled.div`
`

const Content: React.FC = styled.div`
    margin: 0 auto;
    width: 1280px;
`

const Banner: React.FC = styled.div`
    position: absolute;
    width: 251px;
    height: 357px;
    background-color: #86D3F4;
    right: 0;
    top: ${500 + 357 / 2}px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`

const Button: React.FC = styled.button`
    height: 52px;
    width: 152px;
`

function VideoBanner(): React.ReactElement {
  return (
    <StyledVideoBanner>
        <Content>
            <video controls width={'1280px'} height={'720px'}>
                <source src="video.mp4" type="video/mp4" />
            </video>
        </Content>
        <Banner>
            <div>
                <span>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</span>
            </div>
            <div><img src="/img/qr.png" alt="qr" /></div>
            <div>
                <span>
                    Сканируйте QR-код или нажмите ОК
                </span>
            </div>
            <Button>OK</Button>
        </Banner>
    </StyledVideoBanner>
  );
}

export default VideoBanner;
