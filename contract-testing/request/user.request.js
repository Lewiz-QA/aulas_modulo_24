import 'dotenv/config'
import axios from 'axios'
import data from '../data/payload.json'

const baseUrl = `http://localhost:${process.env.MOCK_PORT}`

export const userList = async () => {
    return await axios.post(`${baseUrl}/graphql`, data, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg3OTE3NjI2LCJleHAiOjE2ODgwOTA0MjZ9.B2QEYwI1vwaVea4lSXPHl1mMV0YhcsXZdBTAmuNujbk',
            "Content-Type": 'application/json'
        }
    })
}