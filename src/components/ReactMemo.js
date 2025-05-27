import React from 'react'

const ReactMemo = React.memo(({userInputs}) => {
  return (
    <div>
      <ul>
        {userInputs.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
})

export default ReactMemo