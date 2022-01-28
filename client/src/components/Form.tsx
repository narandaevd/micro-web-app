import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';

const StyledForm: React.FC<any> = styled.form`
    position: absolute;
    top: 0;
    width: 380px;
    height: 721px;
    background-color: #86D3F4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Header: React.FC = styled.div`
    font-size: 30px;
    text-align: center;
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

const SubmitBtn: React.FC<any> = styled.button`
    width: 284px;
    height: 52px;
    background-color: inherit;
    border: 1px solid black;
    font-size: 16px;
    color: #4E4E4E; 
    text-transform: uppercase;
    ${({ disabled }) => !disabled && `background-color: black;color:white;border: 1px solid white;`}
`

const PersonalData: React.FC = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-around;
    align-items: center;
    height: 80px;
`

const PersonalDataDescr: React.FC = styled.div`
    margin-left: 20px;
    font-size: 20px;
`

const KeyboardButton: React.FC<any> = styled.button`
    width: 88px;
    height: 52px;
    background-color: inherit;
    border: 3px solid black;
    ${({ value, i, j }) => value === KeyboardMatrix[i][j] && `background: black; color: white; border: 1px solid white`}
`

const ResetButton: React.FC<any> = styled.button`
    width: 188px;
    height: 52px;
    background-color: inherit;
    border: 3px solid black;
    ${({ value, i, j }) => value === KeyboardMatrix[i][j] && `background: black; color: white; border: 1px solid white`}
`

const Phone: React.FC<any> = styled.input`
    font-size: 30px;
    color: ${props => props.color};
    text-align: center;
    background-color: inherit;
    border: none;
    outline: none;
    caret-color: transparent;
`

const InputPersonalData: React.FC<any> = styled.input`
    width: 40px;
    height: 40px;
`

const ContentDescr: React.FC = styled.div`
    margin-top: 15px;
    width: 400px;
    text-align: center;
`

const SectionSuccess: React.FC = styled.div`
    position: absolute;
    top: 0;
    width: 380px;
    height: 721px;
    background-color: #86D3F4;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ErrorMessage: React.FC<any> = styled.div`
    height: 80px;
    color: red;
    font-size: 20px;
`

const REMOVE: string = "СТЕРЕТЬ";
const KeyboardMatrix: ReadonlyArray<ReadonlyArray<number | string>> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [REMOVE, 0]
];
const ArrowList: ReadonlyArray<string> = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

type BannerDispatch = (prevState: boolean) => boolean;
type setIsBannerOpenedFunction = (callback: BannerDispatch) => void;
interface FormProps<T> {
    setIsBannerOpened: T
}

function Form(props: FormProps<setIsBannerOpenedFunction>): React.ReactElement {

    const [i, setI] = React.useState<number>(0);
    const [j, setJ] = React.useState<number>(0);
    const [isOpenedErrorMes, setIsOpenedErrorMes] = React.useState<boolean>(false);
    const [phone, setPhone] = React.useState<Array<number>>([]);
    const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
    const [phoneColor, setPhoneColor] = React.useState<string>("black");
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = React.useState<boolean>(false);
    const {register, handleSubmit, reset} = useForm();

    function addDigitAtPhone(digit: number): void {
        if (phone.length <= 9)
            setPhone((prevPhone): Array<number> => [...prevPhone, digit]);
    }

    function popDigitFromPhone(): void {
        setPhone((prevPhone) => {
            const newPhone: Array<number> = [...prevPhone];
            newPhone.pop();
            return newPhone;
        });
    }

    function resetPhone(): void {
        setPhone((): Array<number> => []);
    }
    
    async function onSubmit(): Promise<any> {
        const fullPhone: string = phone.map(el => String(el)).join("");
        const res: Response = await fetch(`https://apilayer.net/api/validate?access_key=28515150cebb6087a2744a7078b054a0&number=${fullPhone}&country_code=RU&format=1`)
        const json: any = await res.json();
        if (!json.valid) {
            setIsOpenedErrorMes(() => true);
            setPhoneColor(() => 'red');
            setIsDisabled(() => false);
            setTimeout(() => {
                setPhoneColor(() => 'black');
                setIsOpenedErrorMes(() => false);
            }, 2000)
        } else {
            setPhoneColor(() => 'green');
            setIsDisabled(() => false);
            setTimeout(() => {
                setPhoneColor(() => 'black');
            }, 2000);
            setIsSuccessfulSubmit(() => true);
        }
        setPhone(() => []);
        reset({personalData: false});
        setIsDisabled(() => true);
        setI(() => 0);
        setJ(() => 0);
    }

    function changeCursor(key: string): void {
        switch (key) {
            case 'ArrowUp':
                if (i === 3 && j === 1) {
                    setI(() => 2);
                    setJ(() => 2);
                } else
                    setI((i > 0) ? i - 1 : i);
                break;
            case 'ArrowDown':
                if (i === 2 && j === 2) {
                    setI(() => 3);
                    setJ(() => 1);
                } else if (i === 2 && j === 1) {
                    setI(() => 3);
                    setJ(() => 0);
                } else
                    setI((i < 3) ? i + 1 : i);
                break;
            case 'ArrowLeft':
                setJ((j > 0) ? j - 1 : j);
                break;
            case 'ArrowRight':
                if (i === 3)
                    setJ((j < 1) ? j + 1 : j);
                else 
                    setJ((j < 2) ? j + 1 : j);
                break;
            default:
                throw new Error("Not correct arrow!");
        }
    }

    function handleKeyDown(e: KeyboardEvent): void {
        if (e.key === 'Backspace') 
            popDigitFromPhone();
        else if (phone.length <= 9 && Number(e.key) >= 0 && Number(e.key) < 10) 
            addDigitAtPhone(Number(e.key));
        else if (ArrowList.includes(e.key)) 
            changeCursor(e.key);
        else if (e.key === 'Enter') {
            if (KeyboardMatrix[i][j] === REMOVE) 
                resetPhone();
            else    
                addDigitAtPhone(Number(KeyboardMatrix[i][j]));
        }
    }

  return (
    <React.Fragment>
        {   (isSuccessfulSubmit === false) ? 
                <StyledForm 
                    onSubmit={handleSubmit(onSubmit)}
                >
                <Header>Введите ваш номер мобильного телефона</Header>
                <Content>
                    <div>
                        <Phone 
                            onKeyDown={handleKeyDown}
                            autoFocus={true} 
                            onBlur={({target}) => target.focus()}
                            color={phoneColor}
                            value={
                                `+7(${[0, 1, 2].map((element) => phone[element] === 0 || phone[element] ? String(phone[element]) : '_').join("")})${[3, 4, 5].map((element) => phone[element] === 0 || phone[element] ? String(phone[element]) : '_').join("")}-${[6, 7].map((element) => phone[element] === 0 || phone[element] ? String(phone[element]) : '_').join("")}-${[8, 9].map((element) => phone[element] === 0 || phone[element] ? String(phone[element]) : '_').join("")}`
                            }
                        >
                        </Phone>
                    </div>
                    <ContentDescr><span>и с Вами свяжется наш менеджер для дальнейшей консультации</span></ContentDescr>
                </Content>
                <Keyboard>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, REMOVE, 0].map((element, index) => {
                            if (typeof element === 'string') 
                                return (
                                    <ResetButton
                                        i={i}
                                        j={j}
                                        value={element}
                                        onClick={resetPhone} 
                                        type='button' 
                                        key={index}
                                    >{element}
                                    </ResetButton>
                                )
                            else 
                                return (
                                    <KeyboardButton
                                        i={i}
                                        j={j}
                                        value={element}
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
                    {
                        (isOpenedErrorMes) ? (
                            <ErrorMessage><span>Неверно введён номер</span></ErrorMessage>
                        )
                        : (
                            <React.Fragment>
                                <InputPersonalData {...register('personalData')} type='checkbox' onClick={() => setIsDisabled((prev) => !prev)} />
                                <PersonalDataDescr><span>Согласие на обработку персональных данных</span></PersonalDataDescr>
                            </React.Fragment>
                        )
                    }
                </PersonalData>
                <SubmitBtn disabled={isDisabled || phone.length <= 9}>Подтвердить номер</SubmitBtn>
            </StyledForm>
            :
            <SectionSuccess>
                <img src="/img/successful-submit.png" alt="" />
            </SectionSuccess>
        }
    </React.Fragment>
  );
}

export default Form;
