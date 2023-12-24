import React from 'react'

const Leaderboard = ({obj}) => {
  return (

          <tr>
          
            <td>{obj.codeForces}</td>
            <td>{obj.points}</td>
          </tr>
    
  )
}

export default Leaderboard