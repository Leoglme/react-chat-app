import React from 'react';
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
        <SearchBar/>
        <div className="column center w100">
            {List}
        </div>
    </>);
}

export default RecentMessages;
