import axios from './axios'

const GetUsers = async (setState) => {
    await axios.get('/users').then(res => {
        setState(res.data.data)
    })
}

export {
    GetUsers
}
