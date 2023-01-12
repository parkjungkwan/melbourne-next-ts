import { UserList } from 'components'
import { NextPage } from 'next'
import React from 'react'
import styles from 'styles/user.module.css'

const UserPage:NextPage = () => {
  return (
    <div className={styles.container}>
      <UserList/>
    </div>
  )
}

export default UserPage