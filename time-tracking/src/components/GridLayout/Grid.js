import styled from 'styled-components'

const GridComponent = styled.div`
  display: grid;
  gap: 8% 2%;  
  margin: 50vh 20vh 0vh 20vh;
  transform: translate(0%, -50%);

  @media(min-width: 720px) {
    grid-template-columns: 7fr 7fr 7fr 7fr;
  }
  
`

export default function Card( props ){

    return(
        <GridComponent>
            { props.children }
        </GridComponent>
    )
}