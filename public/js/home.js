var sem = {
  1: [{}],
  2: [
    {
      name: "Computer Programming Laboratory",
      tag: "Contains lab programs",
      link: "cpl",
      subject: "Computer Programming Laboratory",
    },
  ],
  3: [
    {
      //3rd sem
    },
  ],
  4: [
    {
      name: "Analysis and Design of Algorithm Laboratory",
      tag: "Contains lab programs",
      link: "ada",
      subject: "Analysis and Design of Algorithm Laboratory",
    },
    {
      name: "Database Management System",
      tag: "Contains lab programs",
      link: "dbms",
      subject: "Database Management System Laboratory",
    },
  ],
  5: [
    {
      name: "Computer Networking Lab",
      tag: "Contains lab programs",
      link: "cn",
      subject: "Computer Networks Laboratory",
    },
    {
      name: "AI and ML Lab",
      tag: "Contains lab programs",
      link: "aiml",
      subject: "AI and ML",
    },
  ],
  6: [
    {
      name: "System Software Lab",
      tag: "Contains lab programs",
      link: "syssoft",
      subject: "System Software",
    },
    {
      name: "Cyber Security Lab",
      tag: "Contains lab programs",
      link: "cybsec",
      subject: "Cyber Security",
    },
  ],
};

var sub = {
  "Computer Programming Laboratory": {
    introduction:
      "To understand how various data structures work. To understand some important applictions of various data structures. To familiarize how certain applications can benefit from the choice of data structures. To understand how the choice of data structures can lead to efficient implementations of algorithms.",
    objective: "To make students get better at Data Structures in C.",
    faqs: [
      {
        q: "What is a datastructure?",
        a:
          "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.",
      },
      {
        q: "What are some types of datastructures?",
        a: "Some of them are Array,List,Union,Trees",
      },
    ],
    lab: 5,
  },

  "Computer Networks Laboratory": {
    introduction: `A computer network is a set of computers connected together for
        the purpose of sharing resources. The most common resource shared
        today is connection to the Internet. Other shared resources can
        include a printer or a file server.<br /><br />
        The Internet itself can be considered a computer network.`,

    objective: "To make students get better in Computer Networks.",
    faqs: [
      {
        q: "What is CN?",
        a: `A computer network is a set of computers connected together
                for the purpose of sharing resources. The most common
                resource shared today is connection to the Internet. Other
                shared resources can include a printer or a file server.<br /><br />
                The Internet itself can be considered a computer network.`,
      },
      {
        q: "Abbreviate CN?",
        a: "Computer Networks",
      },
      {
        q: "What are layers in OSI model?",
        a: `There are a total of 7 layers <br />
                1. Physical Layer <br />
                2. Data Link Layer <br />
                3. Network Layer <br />
                4. Transport Layer <br />
                5. Session Layer <br />
                6. Presentation Layer <br />
                7. Application Layer <br />`,
      },
    ],

    lab: 18,
  },
  "System Software": {
    introduction: "something", //write intro here
    objective: "Objective", //Objective here
    faqs: [
      {
        q: "What is a datastructure?",
        a:
          "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.",
      },
      // {
      //   q: "What are some types of datastructures?",
      //   a: "Some of them are Array,List,Union,Trees",
      // },
    ],
    lab: 10,
  },
  "Analysis and Design of Algorithm Laboratory": {
    introduction: "something", //write intro here
    objective: "Objective", //Objective here
    faqs: [
      {
        q: "What is a datastructure?",
        a:
          "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.",
      },
      // {
      //   q: "What are some types of datastructures?",
      //   a: "Some of them are Array,List,Union,Trees",
      // },
    ],
    lab: 7,
  },
};

const videoLinks = {
  "Computer Networks Laboratory": {
    1: {link:"https://drive.google.com/file/d/1R6U9RVyf-37HP0_gpiGDmHNdnS2SYyHD/preview",count:5},
    2:{link:"https://drive.google.com/file/d/1BgDAuGyHhNI-_LSDO3F0l_FiF0ImtdHZ/preview",count:6},
    3: {link:"https://drive.google.com/file/d/1Li-TmsG-Zxb2qGQPhUy67EjNebA7YI8k/preview",count:7},
    4: {link:"https://drive.google.com/file/d/1dXL-n6AfbJaRXfkiKJf2DUW9V7lyECxF/preview",count:3},
    5: {link:"https://drive.google.com/file/d/1fXql5XPXDrmKVcJgG1sK-xLnRwQEXKhz/preview",count:2},
    6: {link:"https://drive.google.com/file/d/1fOt9xtOSxjmosD5N65L-qAehr4HefJDg/preview",count:7},
    7: {link:"",count:0},
    8: {link:"https://drive.google.com/file/d/18hO3HnGR1zDuD2x35vsd2y-IWTcikiks/preview",count:5},
    9: {link:"https://drive.google.com/file/d/1RWsEHJ6jWn11lAC34oAl_As6pp6Riorm/preview",count:2},
   10: {link:"https://drive.google.com/file/d/1GxTviLSA_akELnTMAq9TAWoLCUUGA89K/preview",count:5},
   11: {link:"https://drive.google.com/file/d/1s83qcwIN9s_RFML54Ex8P-7T7rBVt9pk/preview",count:3},
   12: {link:"https://drive.google.com/file/d/1xGHqxN4h8hRld9858P-m50J-Qx_oTjRZ/preview",count:5},
   13: {link:"https://drive.google.com/file/d/1oetTA9cLJl_sopivetR9T8G5uu5Hot15/preview",count:7},
   14: {link:"https://drive.google.com/file/d/1nDb-0QpbZewUfHNV0gkKqaJKrxq7eBs5/preview",count:2},
   15: {link:"https://drive.google.com/file/d/1GO-ceq8WTS9k3dqlF_rUZb5m7L8CEJSa/preview",count:6},
   16: {link:"https://drive.google.com/file/d/1bBkX52MDoOz9NNDYlhmDnFubKk0vAA0i/preview",count:8},
   17: {link:"https://drive.google.com/file/d/1p8ypW63d7BnjgTu0gpwZWyKtlbcVcm1d/preview",count:5},
   18: {link:"https://drive.google.com/file/d/18DL3MM7DtqTrZsfraCvdzmj4YsBiKokF/preview",count:7},
  },
  "Computer Programming ": {
    //put video links of CP Lab
  },
  "System Software": {
    //Put video links of ss lab
    1: {link:"https://drive.google.com/file/d/1N5g6QhofPJMJ2UKQyFk3Mh9B4u7aFytn/preview",count:0},
    2: {link:"https://drive.google.com/file/d/1N5g6QhofPJMJ2UKQyFk3Mh9B4u7aFytn/preview",count:0},
    3: {link:"https://drive.google.com/file/d/1STasK4RG15FDqetJ4CXMrNhGnG0SYpYK/preview",count:0},
    4: {link:"https://drive.google.com/file/d/1xpnSQBhPdgzIfN4_qVMq99QC01sNlkgu/preview",count:0},
    5: {link:"https://drive.google.com/file/d/1RBpjJrWsfXB5rGwQxLEESsSJ_vE5wufA/preview",count:0},
    6: {link:"https://drive.google.com/file/d/1dPfpo5lwFlcp-_j_Q3yI8goKHUVdPHVZ/preview",count:0},
    7: {link:"https://drive.google.com/file/d/19PrxtMt3kAMasGZ_voaBuMTXB1VE8Ze3/preview",count:0},
    8: {link:"https://drive.google.com/file/d/1FAKH9_0ZJyYBO7DS7Tl-MXCruolmonCL/preview",count:0},
    9: {link:"https://drive.google.com/file/d/15_7llYbXoYlFv_Qaj17DMZBn-DMKhaB5/preview",count:0},
    10: {link:"https://drive.google.com/file/d/1wUVquVmO7JmmAl330MNWWD_IyL-27Wjc/preview",count:0},
  },
  "Analysis and Design of Algorithm Laboratory": {
    1:{link:"https://drive.google.com/file/d/1xSiY0E8P1Ewd55wUdM-eWz18pIgUxf0I/preview",count:0},
    2:{link:"https://drive.google.com/file/d/1xZXDZCji6rhVUQzQHFHRIkvnWVUNwoSJ/preview",count:0},
    3:{link:"",count:0},
    4:{link:"https://drive.google.com/file/d/1xkj_nvSQl_9rWNl18af4Qq0d_fIUfsLP/preview",count:0},
    5:{link:"https://drive.google.com/file/d/1xggqTyfVmqe2U492D37AgFb73VD-zyyv/preview",count:0},
    6:{link:"https://drive.google.com/file/d/1xkw5hgIkLyoomB3qW5TfmyrbwQpn7ONQ/preview",count:0},
    7:{link:"https://drive.google.com/file/d/1xlKP2oayfF2SFU8190i3663E_Jj0rAn_/preview",count:0},
  },
};

sessionStorage.setItem("semData", JSON.stringify(sem));
sessionStorage.setItem("subData", JSON.stringify(sub));
sessionStorage.setItem("subject","Computer Networks Laboratory")
sessionStorage.setItem("videoData", JSON.stringify(videoLinks));
