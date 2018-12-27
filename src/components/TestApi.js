import React, { useState, useEffect } from 'react'

export default function Api() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts', { mode: 'no-cors' })
      .then(x => x.json())
      .then(data => {
        console.log(data)
        setCats(data.all)
      })
      .catch(error => {
        console.log(error)
      })
  })

  return <div>{cats.map(cat => <p key={cat._id}>{cat.text}</p>)}</div>
}
