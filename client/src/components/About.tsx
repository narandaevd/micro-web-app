import React from 'react';
import styled from 'styled-components';

const ImgWrap: React.FC<any> = styled.div`
    height: 500px;
    width: 100%;
    background-image: url("/img/volvo.png");
    background-size: cover;
`

function About(): React.ReactElement<any> {
    return (
        <ImgWrap>
        </ImgWrap>
    )
}

export default About;
