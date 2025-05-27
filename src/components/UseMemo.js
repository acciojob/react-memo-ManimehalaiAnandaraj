import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  
  const handleCalculation = (n) => {
    let result = 0;
    for(let i=0; i<=n; i++){
      result += i
    }
    return result
  }
  const calculatedResult = useMemo(() => handleCalculation(10000), [])
  return (
    <div>
      <h1>Expensive Calculation</h1>
      <p>{calculatedResult}</p>
    </div>
  )
}

export default UseMemo