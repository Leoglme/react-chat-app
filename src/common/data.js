const user1 = {
    id: 1,
    name: 'John Doe'
}
const user2 = {
    id: 2,
    name: 'Jennifer'
}
const user3 = {
    id: 3,
    name: 'scott'
}
const userConnected = {
    id: 4,
    name: 'Léo Glme',
    image: '/userPics/02m.jpg'
}

const messages = {
    user: user1,
    messages: [
        {
            id: 1,
            receiver: user1,
            sender: user2
        },
        {
            id: 2,
            receiver: user1,
            sender: user2
        },
        {
            id: 3,
            receiver: user2,
            sender: user1
        },
        {
            id: 4,
            receiver: user1,
            sender: user2
        },
        {
            id: 5,
            receiver: user1,
            sender: user2
        },
        {
            id: 6,
            receiver: user2,
            sender: user1
        },
        {
            id: 7,
            receiver: user1,
            sender: user2
        },
        {
            id: 8,
            receiver: user1,
            sender: user2
        },
        {
            id: 9,
            receiver: user2,
            sender: user1
        },
        {
            id: 10,
            receiver: user1,
            sender: user2
        },
        {
            id: 11,
            receiver: user1,
            sender: user2
        },
        {
            id: 12,
            receiver: user2,
            sender: user1
        },
        {
            id: 13,
            receiver: user1,
            sender: user2
        },
        {
            id: 14,
            receiver: user1,
            sender: user2
        },
        {
            id: 15,
            receiver: user2,
            sender: user1
        },
        {
            id: 16,
            receiver: user1,
            sender: user2
        },
        {
            id: 17,
            receiver: user1,
            sender: user2
        },
        {
            id: 18,
            receiver: user2,
            sender: user1
        },
        {
            id: 19,
            receiver: user1,
            sender: user2
        },
        {
            id: 20,
            receiver: user1,
            sender: user2
        },
        {
            id: 21,
            receiver: user2,
            sender: user1
        }
    ]
}


const users = [
    {
        id: 1,
        name: 'ingrid Krol',
        image: '/userPics/03w.jpg'
    },
    {
        id: 2,
        name: 'Thomas Hayes',
        image: '/userPics/03m.jpg'
    },
    {
        id: 3,
        name: 'colddecember',
        image: '/userPics/04w.jpg'
    }
]


const conversations = [
    {
        name: 'Andy',
        messages: [
            {
                sender: {
                    id: 1,
                    firstname: 'andy',
                    lastname: 'beverly',
                    image: '/userPics/01m.jpg'
                },
                content: {
                    message: "sure ! let's do it",
                    audio: null,
                    media: null
                },
                isTyping: {
                    name: 'Andy'
                },
            }
        ],
        notifications: 2,
        updated_at: '2021-12-18T08:32:00Z'
    },
    {
        name: 'Caterina',
        messages: [
            {
                sender: {
                    id: 1,
                    firstname: 'andy',
                    lastname: 'beverly',
                    image: '/userPics/01w.jpg'
                },
                content: {
                    message: null,
                    audio: true,
                    media: null
                },
                isTyping: false
            }
        ],
        notifications: 0,
        updated_at: '2021-12-18T08:32:00Z'
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
                content: {
                    message: "sure ! let's do it",
                    audio: null,
                    media: null
                },
                isTyping: false
            }
        ],
        notifications: 0,
        updated_at: '2021-12-18T08:32:00Z'
    },
    {
        name: 'likeastorm',
        messages: [
            {
                sender: {
                    id: 1,
                    firstname: 'andy',
                    lastname: 'beverly',
                    image: '/userPics/02w.jpg'
                },
                content: {
                    message: null,
                    audio: null,
                    media: [
                        {
                            type: 'image',
                            url: ''
                        },
                        {
                            type: 'image',
                            url: ''
                        },
                        {
                            type: 'image',
                            url: ''
                        },
                        {
                            type: 'file',
                            url: ''
                        },
                        {
                            type: 'file',
                            url: ''
                        }
                    ]
                },
                isTyping: false
            }
        ],
        notifications: 0,
        updated_at: '2021-12-18T08:32:00Z'
    }
]

export {
    messages, user1, user2, user3, conversations, userConnected, users
}
