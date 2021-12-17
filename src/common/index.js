import axios from './axios'

const GetUsers = async (setState) => {
    await axios.get('/users').then(res => {
        setState(res.data.data)
    })
}

const GetInitial = (name, defaultValue = "AN") => {
    if (name) {
        const split = name.split(' ');
        if (split.length > 1) {
            return split[0][0] + split[split.length - 1][0];
        }
        return split[0][0]
    }
    return defaultValue
}

export {
    GetUsers,
    GetInitial
}
