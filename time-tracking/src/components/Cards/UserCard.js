import styled from 'styled-components'

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

@media(max-width: 900px) {
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

p {
      z-index: 3;
      cursor: pointer;
      color: var(--desaturated-blue);
      font-size: 15px;
      font-weight: lighter;  
  }

p:hover {
    transition: .3s;
    color: #fff;
}


p:hover & {
    cursor: pointer;
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

p {
    font-family: 'Rubik';
    font-weight: lighter;
    font-size: 13px;
    margin-bottom: 3%;
     
    
}

h1 {
    font-size: 35px;
    font-weight: 300;
}
`



export default function Card( { name }){

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
                <p>Daily</p>
                <p>Weekly</p>
                <p>Monthly</p>
            </CardComponent>
        </CardContainer>
    )
}