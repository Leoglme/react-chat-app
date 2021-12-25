import axios from './axios'
import moment from "moment";
import {messages} from "./data";

const GetUsers = async (setState) => {
    await axios.get('/users').then(res => {
        setState(res.data)
    })
}

const GetMessages = () => {
    return messages
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


const dateToHour = (date) => {
  if (date){
      return moment(date).format("hh:mm");
  }
}

export {
    GetUsers,
    GetInitial,
    dateToHour,
    GetMessages
}
