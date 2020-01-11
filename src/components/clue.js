import React from "react"

const Clue = ({ pageContext }) => {
  const { category, airdate, answer, question, value } = pageContext
  return (
    <>
      <h1>Card</h1>
      <h2>{category}</h2>
      <p>{airdate}</p>
      <p>{answer}</p>
      <p>{question}</p>
      <p>{value}</p>
    </>
  )
}

export default Clue
