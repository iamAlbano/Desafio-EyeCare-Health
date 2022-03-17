import data from './data.json'

import Grid from './components/GridLayout/Grid'
import UserCard from './components/Cards/UserCard'
import Card from './components/Cards/Card'

function App() {
  let id = 0
 
  console.log(data)

  return (
    <div className="App">
      <Grid>

       
          <UserCard name="Jeremy Robson" />
        

          {   
            data.map((content) => {

              return (
               
                  <Card  key={ id++ } 
                        title={ content.title }
                  />
               
              )

            })
          }
      </Grid>
    </div>
  );
}

export default App;
