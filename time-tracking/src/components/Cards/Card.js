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
margin-top: -2vh;
cursor: pointer;
transition: .3s;

&:hover {
    transition: .3s;
    background-color: var(--desaturated-blue);
}

@media(max-width: 900px) {
    padding: 3% 5%;
  }

@media(min-width: 900px) {
    padding: 5% 8%;
  }

div {
      display: flex; 
      flex-direction: row;
      justify-content: space-between;
      align-items: end;
  }

  h2 {
    font-size: 17px;
    font-weight: 500;
  }

  span {
      color: var(--pale-blue);
      font-size: 28px;
  }
  span:hover{
      cursor: pointer;
      color: #fff;
  }

`

const TimeContainer = styled.div`
display: flex;
align-items: start !important;
margin: 7vh 0%;
transform: translate(0%, -50%);


h3 {
    font-size: 40px;
    font-weight: 300;
}

p {
    margin-top: 3%;
    
    font-weight: lighter;
}

@media(max-width: 900px) {
    flex-direction: row !important;

    p {
        font-size: 16px;
    }
}

@media(min-width: 900px) {
    flex-direction: column !important;

    p {
        font-size: 12px;
    }
}





`

export default function Card( { timestamp, time }){

let theme = Play

if( timestamp.title === "Work"){
    theme = Work
}
else if( timestamp.title === "Play"){
    theme = Play
}
else if( timestamp.title === "Study"){
    theme = Study
}
else if( timestamp.title === "Exercise"){
    theme = Exercise
}
else if( timestamp.title === "Social"){
    theme = Social
}
else if( timestamp.title === "Self Care"){
    theme = SelfCare
} else {
    theme = Social
}

let current = ""
let last = ""

if( time === "Daily"){
 current = timestamp.timeframes.daily.current+"hrs"
 last = "Last day - "+timestamp.timeframes.daily.previous+"hrs"
} else if( time === "Weekly" ){
 current = timestamp.timeframes.weekly.current+"hrs"
 last = "Last Week - "+timestamp.timeframes.weekly.previous+"hrs"
}  else if( time === "Monthly" ){
    current = timestamp.monthly.timeframes.current+"hrs"
    last = "Last Month - "+timestamp.timeframes.monthly.previous+"hrs"
}

    return(
        <CardContainer>
            <ThemeProvider theme={theme}>
                <CardHeader  />
            </ThemeProvider>
            <CardComponent >
                <div>
                    <h2>{ timestamp.title }</h2>
                    <span>...</span>
                </div>

            <TimeContainer>    
                <h3>{ current }</h3>
                <p>{ last }</p>
            </TimeContainer>

            </CardComponent>
           
        </CardContainer>
    )
}