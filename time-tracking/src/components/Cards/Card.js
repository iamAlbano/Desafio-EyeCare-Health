import styled, { ThemeProvider } from 'styled-components'
import workIcon from '../../img/icon-work.svg'
import exerciseIcon from '../../img/icon-exercise.svg'
import playIcon from '../../img/icon-play.svg'
import socialIcon from '../../img/icon-social.svg'
import studyIcon from '../../img/icon-study.svg'
import selfCareIcon from '../../img/icon-self-care.svg'

const CardContainer = styled.div`

`

const CardHeader = styled.div`
background-color: ${props => props.theme.background };
background-image: url(${props => props.theme.icon});
background-repeat: no-repeat;
background-position: 90% 40%;
border-radius: 15px 15px 0px 0px;

height: 9vh;
width: 100%;
z-index: -1;
`

CardHeader.defaultProps = {
    theme: {
      background: "var(--blue);",
      icon: playIcon
    }
  }

const Work = {
  background: "var(--light-red);",
  icon: workIcon
};

const Play = {
    background: "var(--soft-blue);",
    icon: playIcon
};

const Study = {
    background: "var(--red);",
    icon: studyIcon
};

const Exercise = {
    background: "var(--lime-green);",
    icon: exerciseIcon
};

const Social = {
    background: "var(--violet);",
    icon: socialIcon
};

const SelfCare = {
    background: "var(--soft-orange);",
    icon: selfCareIcon
};




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

let theme = Play

if(title === "Work"){
    theme = Work
}
else if(title === "Play"){
    theme = Play
}
else if(title === "Study"){
    theme = Study
}
else if(title === "Exercise"){
    theme = Exercise
}
else if(title === "Social"){
    theme = Social
}
else if(title === "Self Care"){
    theme = SelfCare
} else {
    theme = Social
}

    return(
        <CardContainer>
            <ThemeProvider theme={theme}>
                <CardHeader  />
            </ThemeProvider>
            <CardComponent >
                <p>{ title }</p>
            </CardComponent>
           
        </CardContainer>
    )
}