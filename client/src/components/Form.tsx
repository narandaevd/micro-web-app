import React from 'react';
import styled from 'styled-components';

const StyledForm: React.FC = styled.form`
    position: absolute;
    width: 380px;
    height: 721px;
    background-color: #86D3F4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Header: React.FC = styled.div`

`

const Content: React.FC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Keyboard: React.FC = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 10px;
`

const PersonalData: React.FC = styled.div`
`

const KeyboardButton: React.FC<any> = styled.button`
    width: 88px;
    height: 52px;
`

const ResetButton: React.FC<any> = styled.button`
    width: 180px;
    height: 52px;
`

const Number: React.FC = styled.span`
    font-size: 40px;
`

const InputPersonalData: React.FC<any> = styled.input`
    width: 30px;
    height: 30px;
`

function Form(): React.ReactElement {
  return (
    <StyledForm>
        <Header>Введите ваш номер мобильного телефона</Header>
        <Content>
            <div><Number>+7(___)___-__-__</Number></div>
            <div><span>и с Вами свяжется наш менеджер для дальнейшей консультации</span></div>
        </Content>
        <Keyboard>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 'СТЕРЕТЬ', 0].map((element, index) => {
                    if (element === 'СТЕРЕТЬ') 
                        return (
                            <ResetButton type='button' key={index}>{element}</ResetButton>
                        )
                    else 
                        return (
                            <KeyboardButton type='button' key={index}>{element}</KeyboardButton>
                        )
                })
            }
        </Keyboard>
        <PersonalData>
                <InputPersonalData type='checkbox' />
                <span>Персональные данные</span>
        </PersonalData>
        <button>Отправить</button>
    </StyledForm>
  );
}

export default Form;
