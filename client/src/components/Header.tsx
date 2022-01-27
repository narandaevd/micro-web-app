import React from 'react';
import styled from 'styled-components';

const StyledHeader: React.FC = styled.div`
    display: flex;
    justify-content: space-between;
    height: 120px;
    position: fixed;
    width: 100%;
    align-items: center;
`;

const Logo: React.FC = styled.div`
    margin-left: 40px;
`

const Info: React.FC = styled.div`
    margin-right: 40px;
`

const HeaderSpan: React.FC = styled.span`
    font-size: 40px;
`

function Header(): React.ReactElement<any> {
  return (
    <StyledHeader>
        <Logo>
            <HeaderSpan>
                LOGOTYPE
            </HeaderSpan>
        </Logo>
        <Info>
            <HeaderSpan>
                INFO
            </HeaderSpan>
        </Info>
    </StyledHeader>
  );
}

export default Header;
