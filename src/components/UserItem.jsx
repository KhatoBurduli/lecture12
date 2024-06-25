import React from 'react'

const UserItem = ({id, name, action}) => {
  return (
    <div className="user-items">
    <p>ID: {id}</p>
    <p>NAME: {name}</p>

    <button onClick={() => action(id)}>Remove</button>
    </div>

  )
}

export default UserItem