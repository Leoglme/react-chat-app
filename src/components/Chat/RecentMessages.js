import React from 'react';
import { ReactComponent as EditSquare } from '../../assets/icons/curved/EditSquare.svg';
import RecentMessage from "./RecentMessage";
import SearchBar from "../common/SearchBar";


const uselessData = [
    {
        name: 'Andy',
        messages: [
            {
                sender: {
                    id: 1,
                    firstname: 'andy',
                    lastname: 'beverly',
                    image: '/userPics/01w.jpg'
                },
                content: "sure ! let's do it"
            }
        ],
        updated_at: '2021-12-18T16:00:00Z'
    },
    {
        name: 'Caterina',
        messages: [
            {
                sender: {
                    id: 1,
                    firstname: 'andy',
                    lastname: 'beverly'
                },
                content: "sure ! let's do it"
            }
        ],
        updated_at: '2021-12-18T16:00:00Z'
    },
    {
        name: 'Chat',
        messages: [
            {
                sender: {
                    id: 1,
                    firstname: 'andy',
                    lastname: 'beverly'
                },
                content: "sure ! let's do it"
            }
        ],
        updated_at: '2021-12-18T16:00:00Z'
    },
    {
        name: 'likeastorm',
        messages: [
            {
                sender: {
                    id: 1,
                    firstname: 'andy',
                    lastname: 'beverly'
                },
                content: "sure ! let's do it"
            }
        ],
        updated_at: '2021-12-18T16:00:00Z'
    }
]


const List = (
    uselessData.map((data, index) => {
        return (<RecentMessage key={index} discussion={data} />)
    })
)

function RecentMessages(props) {
    return (<>
        <div className="space-between">
            <h4 className="block-title">Messages</h4>
            <div className="pointer">
                <EditSquare/>
            </div>
        </div>
        <SearchBar/>
        <div className="column center">
            {List}
        </div>
    </>);
}

export default RecentMessages;
