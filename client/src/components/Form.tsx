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

const Phone: React.FC = styled.span`
    font-size: 40px;
`

const InputPersonalData: React.FC<any> = styled.input`
    width: 30px;
    height: 30px;
`

function Form(): React.ReactElement {

    const [phone, setPhone] = React.useState<Array<number>>([]);
    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

    function addDigitAtPhone(digit: number): void {
        if (phone.length <= 9)
            setPhone((prevPhone): Array<number> => [...prevPhone, digit]);
    }

    function resetPhone(e: MouseEvent): void {
        setPhone((prevPhone): Array<number> => []);
    }

  return (
    <StyledForm>
        <Header>Введите ваш номер мобильного телефона</Header>
        <Content>
            <div>
                <Phone>+7(
                    {phone[0] ? phone[0] : '_'}
                    {phone[1] ? phone[1] : '_'}
                    {phone[2] ? phone[2] : '_'}
                    )
                    {phone[3] ? phone[3] : '_'}
                    {phone[4] ? phone[4] : '_'}
                    {phone[5] ? phone[5] : '_'}
                    -
                    {phone[6] ? phone[6] : '_'}
                    {phone[7] ? phone[7] : '_'}
                    -
                    {phone[8] ? phone[8] : '_'}
                    {phone[9] ? phone[9] : '_'}
                </Phone>
            </div>
            <div><span>и с Вами свяжется наш менеджер для дальнейшей консультации</span></div>
        </Content>
        <Keyboard>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 'СТЕРЕТЬ', 0].map((element, index) => {
                    if (typeof element === 'string') 
                        return (
                            <ResetButton
                                onClick={resetPhone} 
                                type='button' 
                                key={index}
                            >{element}
                            </ResetButton>
                        )
                    else 
                        return (
                            <KeyboardButton 
                                onClick={() => addDigitAtPhone(element)}
                                type='button' 
                                key={index}
                            >{element}
                            </KeyboardButton>
                        )
                })
            }
        </Keyboard>
        <PersonalData>
                <InputPersonalData type='checkbox' onClick={() => setIsDisabled((prev) => !prev)} />
                <span>Персональные данные</span>
        </PersonalData>
        <button disabled={!isDisabled || phone.length <= 9}>Отправить</button>
    </StyledForm>
  );
}

export default Form;
