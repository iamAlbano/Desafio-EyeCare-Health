import styled from 'styled-components'

const CardContainer = styled.div`

`

const CardHeader = styled.div`

background-color: var(--red);
border-radius: 15px 15px 0px 0px;
height: 9vh;
width: 100%;
z-index: -1;
`

const CardComponent = styled.div`
position: relative;
background-color: var(--dark-blue);
border-radius: 15px;
width: 100%;
height: 25vh;
padding: 5%;
margin-top: -2vh;
cursor: pointer;
transition: .3s;
&:hover {
    transition: .3s;
    background-color: var(--desaturated-blue);
}
`

export default function Card( { title }){

    return(
        <CardContainer>
            <CardHeader />
            <CardComponent >
                <p>{ title }</p>
            </CardComponent>
           
        </CardContainer>
    )
}