import styled from 'styled-components'

const GridComponent = styled.div`
  display: grid;
   
  
  @media(min-width: 900px) {
    gap: 8% 2%; 
    grid-template-columns: 7fr 7fr 7fr 7fr;
    transform: translate(0%, -50%);
    margin: 50vh 20vh 0vh 20vh;
  }
  
  @media(max-width: 900px) {
    gap: 4% 2%; 
    transform: translate(0%, 0%);
    grid-template-rows: 7fr;
    margin: 10vh 5vh 10vh 5vh;
  }

 

  
  
`

export default function Card( props ){

    return(
        <GridComponent>
            { props.children }
        </GridComponent>
    )
}