import axios, { AxiosResponse } from "axios";
import {User} from '../types'
const SERVER = 'http://localhost:4000'


export const fetchUsers = async () => {
    try {
        const res: AxiosResponse =
            await axios.get<User[]>(`${SERVER}/userModels`)
        return res;
    } catch (err) {
        return err;
    }
}