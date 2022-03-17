import styled from 'styled-components'

import avatar from '../../../src/img/image-jeremy.png'

const CardContainer = styled.div`
grid-row: 1 / 3;
`

const CardHeader = styled.div`
position: relative;
background-color: var(--blue);
border-radius: 15px;
height: 50vh;
width: 100%;
margin-bottom: -2vh;
z-index: 1;
`

const CardComponent = styled.div`
background-color: var(--dark-blue);
border-radius: 0px 0px 15px 15px;
position: relative;
margin: 0 auto;
z-index: -1;
height: 22vh;
width: 100%;
padding: 10%;
cursor: pointer;
transition: .3s;
&:hover {
    transition: .3s;
    background-color: var(--desaturated-blue);
}
`



export default function Card( { name }){

    return(
        <CardContainer>
            <CardHeader >
                <p>Report for</p>
                <p>{ name }</p>
            </CardHeader>
            <CardComponent>
            </CardComponent>
        </CardContainer>
    )
}