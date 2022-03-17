import styled, { css } from 'styled-components'

import avatar from '../../../src/img/image-jeremy.png'

const CardContainer = styled.div`
@media(max-width: 900px) {
    grid-area: 1 / 1 / 2 / 2;
  }
@media(min-width: 900px) {
    grid-row: 1 / 3;
  }

`

const CardHeader = styled.div`
position: relative;
background-color: var(--blue);
border-radius: 15px;
align-items: center;
width: 100%;
padding: 10%;
margin-bottom: -2vh;
z-index: 1;

@media(max-width: 899px) {
    height: 25vh;
    display: flex;
    flex-direction: row;
  }

@media(min-width: 900px) {
    height: 50vh;
  }

`

const CardComponent = styled.div`
background-color: var(--dark-blue);
border-radius: 0px 0px 15px 15px;
position: relative;
margin: 0 auto;
width: 100%;
transition: .3s;

display: flex;
@media(max-width: 900px) {
  flex-direction: row;
  padding: 8%;
  justify-content: space-between;
  height: 9vh;
}
@media(min-width: 900px) {
    flex-direction: column;
    padding: 10%;
    justify-content: space-around;
    height: 22vh;
  }

`

const UserImage = styled.img`
    width: 70px;
    height: 70px;
    margin: 0 8% 8% 0;
    border: 3px solid #fff;
    border-radius: 50%;

    @media(max-width: 900px) {
        margin: 0 5% 1% 0;
      }
    
    @media(min-width: 900px) {
        margin: 0 8% 8% 0;
      }
`

const UserNameContainer = styled.div`


h1 {
    font-size: 35px;
    font-weight: 300;
}
`

const TimeOptions = styled.button`
    font-family: 'Rubik';
    font-weight: lighter;
    font-size: 13px;
    background-color: transparent;
    border: none;
    margin-bottom: 3%;
    z-index: 3;
    cursor: pointer;
    color: var(--desaturated-blue);
    font-size: 15px;
    font-weight: lighter; 
    text-align: left;
    &:hover{
      transition: .3s;
      color: #fff;
  }

    ${props => props.selected && css`
      color: #fff !important;
    `}
`



export default function Card( { name, active, handleClick }){

    return(
        <CardContainer>
            <CardHeader >

                <UserImage src={ avatar } alt="User Image" />
                <UserNameContainer>
                    <p>Report for</p>
                    <h1>{ name }</h1>
                </UserNameContainer>

            </CardHeader>

            <CardComponent>
                <TimeOptions
                  onClick={() => handleClick("Daily")}
                  selected={ active === "Daily" ? true : false }
                >Daily</TimeOptions>

                <TimeOptions
                onClick={() => handleClick("Weekly")} 
                  selected={ active === "Weekly" ? true : false }
                >Weekly</TimeOptions>

                <TimeOptions 
                onClick={() => handleClick("Monthly")}
                  selected={ active === "Monthly" ? true : false }
                >Monthly</TimeOptions>

            </CardComponent>
        </CardContainer>
    )
}