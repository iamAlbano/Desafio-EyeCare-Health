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
z-index: -1;

width: 100%;
padding: 10%;
cursor: pointer;
transition: .3s;
@media(max-width: 900px) {
    height: 9vh;
  }
@media(min-width: 900px) {
    height: 22vh;
  }

&:hover {
    transition: .3s;
    background-color: var(--desaturated-blue);
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
    font-weight: 100;
    font-size: 15px;
    @media(max-width: 900px) {
        margin-bottom: 2%;
      }
    
    @media(min-width: 900px) {
        margin-bottom: 5%;
      }
    
}

h2 {
    font-size: 35px;
    font-weight: 300;
}
`



export default function Card( { name }){

    return(
        <CardContainer>
            <CardHeader >

                <UserImage src={ avatar } />
                <UserNameContainer>
                    <p>Report for</p>
                    <h2>{ name }</h2>
                </UserNameContainer>

            </CardHeader>

            <CardComponent>
            </CardComponent>
        </CardContainer>
    )
}