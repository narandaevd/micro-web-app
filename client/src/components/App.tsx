import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Banner from './Banner';
import CloseIcon from '@mui/icons-material/Close';

const FormCloseBtn: React.FC<React.PropsWithChildren<FormCloseBtn>> = styled.button`
  width: 88px;
  height: 52px;
  position: absolute;
  z-index: 1px;
  top: 40px;
  left: ${1280 - 88 - 40}px;
  background-color: white;
  border: 3px solid black;
`

const QrAside: React.FC = styled.div`
  position: absolute;
  z-index: 1px;
  top: ${720 - 126 - 40 - 30}px;
  left: ${1280 - 126 - 40}px;
`

const StyledVideoBanner: React.FC = styled.div`
    position: relative;
    width: 1280px;
`

const StyledApp: React.FC = styled.div`
  position: relative;
  width: 1280px;
  margin: 150px auto;
`

interface FormCloseBtn {
  onClick: () => void
}

const App: React.FC<any> = () => {
  const [isBannerOpened, setIsBannerOpened] = React.useState<null | boolean>(null);
  const videoBlock = React.useRef<HTMLVideoElement | null>(null);
  function launchTimeout(seconds: number) {
    setTimeout(() => {
      if (isBannerOpened === null) {
        videoBlock.current.pause();
        setIsBannerOpened(true);
      }
    }, seconds * 1000);
  }
  return (
    <StyledApp>
        <StyledVideoBanner>
          <video
            onPlay={() => launchTimeout(5)}
            ref={videoBlock} 
            controls 
            width={'1280px'} 
            height={'720px'}
          >
              <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </StyledVideoBanner>
        {
          isBannerOpened === null ? 
            null
            : (
              isBannerOpened ? (
                <Banner setIsBannerOpened={setIsBannerOpened}/> 
              )
              : (
                <React.Fragment>
                  <FormCloseBtn onClick={() => setIsBannerOpened(prev => !prev)}><CloseIcon /></FormCloseBtn>
                  <Form setIsBannerOpened={setIsBannerOpened}/>
                  <QrAside>
                    <div><img src="/img/qr.png" alt="qr" /></div>
                  </QrAside>
                </React.Fragment>
              )
            )
        }
    </StyledApp>
  );
}

export default App;
