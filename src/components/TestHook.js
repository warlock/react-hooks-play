import React, { useState } from 'react'

export default function TestHooks() {
  const [name, setName] = useState('default')
  return (
    <div>
      <p>
        Edit <code>{name}</code> and save to reload.
      </p>
      <p>
        <input
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
      </p>
    </div>
  )
}
