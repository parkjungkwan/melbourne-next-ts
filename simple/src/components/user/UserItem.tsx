
import { User } from 'modules/types'
import React, { FC } from 'react'
import styles from 'styles/user.module.css'


const UserItem:FC<{users:User[]}> = (props) => {

  return (
    <div >
      <ul className={styles.ul1} >
        {props.users.map((users,idx) => (
            <li key={idx}>{users.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserItem