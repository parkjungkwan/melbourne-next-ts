import { fetchUsers } from 'modules/apis/userApi'
import { User } from 'modules/types'
import { ColorLine } from 'components'
import React, { FC, useEffect, useState } from 'react'
import styles from 'styles/user.module.css'

export interface Tuser {
    name: string,
    email: string,
    mobile: string
}
const UserList: FC = () => {
    const [users, setUsers] = useState<Array<User>>([])
    useEffect(() => {
        fetchUsers()
        .then((res:any) => {
            console.log(res.data)
            setUsers(res.data)
        })
     }, [])
    
    console.log(`setUser` + JSON.stringify(users))
    console.log(typeof users)

  return (
      <div className={styles.container}>
          <h2>사용자 목록</h2>
        <div className={styles.userList} >
            <ul className={styles.ul1}>
                <li>이름</li>
                <li>휴대번호</li>
                <li>이메일</li>
            </ul>
            <ColorLine border={'1px solid '} width={'770px'} />
               {users.map((user :  User) =>
                   <ul className={styles.ul1} ><li className={styles.li} key={user.name}>{user.name}</li>
                   <li className={styles.li} key={user.name}>{user.mobile}</li>
                   <li className={styles.li} key={user.name}>{user.email}</li></ul>
                   
               )}
            
        </div>  
    </div>
  )
}

export default UserList