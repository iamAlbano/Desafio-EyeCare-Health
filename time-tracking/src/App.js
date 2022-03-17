import { useState } from 'react'

import data from './data.json'

import Grid from './components/GridLayout/Grid'
import UserCard from './components/Cards/UserCard'
import Card from './components/Cards/Card'

function App() {
  let id = 0
  let [timeframe, setTimeframe] = useState('Weekly')

  return (
    <div className="App">
      <Grid>

       
          <UserCard name="Jeremy Robson" />
        

          {   
            data.map((content) => {

              return (
               
                  <Card  key={ id++ } 
                        timestamp={ content}
                        time={ timeframe }
                  />
               
              )

            })
          }
      </Grid>
    </div>
  );
}

export default App;
