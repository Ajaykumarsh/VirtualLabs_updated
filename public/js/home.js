var sem = {
    "1": [
        {}
    ],
    "2": [
        {
            "name": "Computer Programming Lab",
            "tag": "Contains lab programs",
            "link": 'cpl',
            "subject": 'Computer Programming Laboratory'
        }
    ],
    '5': [
        {
            "name": "Computer Networking Lab",
            "tag": "Contains lab programs",
            "link": 'cn',
            "subject": "Computer Networks",
        },
        {
            "name": "AI and ML Lab",
            "tag": "Contains lab programs",
            "link": 'cn',
            "subject": "AI and ML",
        },

    ]
}








var sub = {
    'Computer Programming Laboratory': {
        'introduction': 'To understand how various data structures work. To understand some important applictions of various data structures. To familiarize how certain applications can benefit from the choice of data structures. To understand how the choice of data structures can lead to efficient implementations of algorithms.',
        "objective": 'To make students get better at Data Structures in C.',
        "faqs": [
            {
                'q': 'What is a datastructure?',
                'a': 'In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.'
            },
            {
                'q': 'What are some types of datastructures?',
                'a': 'Some of them are Array,List,Union,Trees'
            },

        ],
        'lab':0,

    },

    'Computer Networks': {
        'introduction': `A computer network is a set of computers connected together for
        the purpose of sharing resources. The most common resource shared
        today is connection to the Internet. Other shared resources can
        include a printer or a file server.<br /><br />
        The Internet itself can be considered a computer network.`,


        "objective": 'To make students get better in Computer Networks.',
        "faqs": [
            {
                'q': 'What is CN?',
                'a': `A computer network is a set of computers connected together
                for the purpose of sharing resources. The most common
                resource shared today is connection to the Internet. Other
                shared resources can include a printer or a file server.<br /><br />
                The Internet itself can be considered a computer network.`
            },
            {
                'q': 'Abbreviate CN?',
                'a': 'Computer Networks'
            },
            {
                'q': 'What are layers in OSI model?',
                'a': `There are a total of 7 layers <br />
                1. Physical Layer <br />
                2. Data Link Layer <br />
                3. Network Layer <br />
                4. Transport Layer <br />
                5. Session Layer <br />
                6. Presentation Layer <br />
                7. Application Layer <br />`
            },

        ],

        'lab':18,
    }



}








const videoLinks={
    "Computer Networks":{
        '1':'https://www.youtube.com/embed/-udal7o_P-c?list=PLRAfX2aR2KAazEytznqLek1K1M93OzukK',
        '2':'https://www.youtube.com/embed/paU3HkHucHg?list=PLRAfX2aR2KAazEytznqLek1K1M93OzukK',
        '3':'https://www.youtube.com/embed/XVjfn8wbHuY?list=PLRAfX2aR2KAazEytznqLek1K1M93OzukK'
    },
}
    




















sessionStorage.setItem("semData", JSON.stringify(sem));
sessionStorage.setItem("subData", JSON.stringify(sub));
sessionStorage.setItem("videoData", JSON.stringify(videoLinks));