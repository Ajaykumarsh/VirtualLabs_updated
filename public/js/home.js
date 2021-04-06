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
      name: "Analysis and Design of Algorithm",
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
  "Analysis and Design of Algorithm": {
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
    1: "https://drive.google.com/file/d/1R6U9RVyf-37HP0_gpiGDmHNdnS2SYyHD/preview",
    2: "https://drive.google.com/file/d/1BgDAuGyHhNI-_LSDO3F0l_FiF0ImtdHZ/preview",
    3: "https://drive.google.com/file/d/1Li-TmsG-Zxb2qGQPhUy67EjNebA7YI8k/preview",
    4: "https://drive.google.com/file/d/1dXL-n6AfbJaRXfkiKJf2DUW9V7lyECxF/preview",
    5: "https://drive.google.com/file/d/1fXql5XPXDrmKVcJgG1sK-xLnRwQEXKhz/preview",
    6: "https://drive.google.com/file/d/1fOt9xtOSxjmosD5N65L-qAehr4HefJDg/preview",
    7: "",
    8: "https://drive.google.com/file/d/18hO3HnGR1zDuD2x35vsd2y-IWTcikiks/preview",
    9: "https://drive.google.com/file/d/1RWsEHJ6jWn11lAC34oAl_As6pp6Riorm/preview",
   10: "https://drive.google.com/file/d/1GxTviLSA_akELnTMAq9TAWoLCUUGA89K/preview",
   11: "https://drive.google.com/file/d/1s83qcwIN9s_RFML54Ex8P-7T7rBVt9pk/preview",
   12: "https://drive.google.com/file/d/1xGHqxN4h8hRld9858P-m50J-Qx_oTjRZ/preview",
   13: "https://drive.google.com/file/d/1oetTA9cLJl_sopivetR9T8G5uu5Hot15/preview",
   14: "https://drive.google.com/file/d/1nDb-0QpbZewUfHNV0gkKqaJKrxq7eBs5/preview",
   15: "https://drive.google.com/file/d/1GO-ceq8WTS9k3dqlF_rUZb5m7L8CEJSa/preview",
   16: "https://drive.google.com/file/d/1bBkX52MDoOz9NNDYlhmDnFubKk0vAA0i/preview",
   17: "https://drive.google.com/file/d/1p8ypW63d7BnjgTu0gpwZWyKtlbcVcm1d/preview",
   18: "https://drive.google.com/file/d/18DL3MM7DtqTrZsfraCvdzmj4YsBiKokF/preview",
  },
  "Computer Programming ": {
    //put video links of CP Lab
  },
  "System Software": {
    //Put video links of ss lab
    1: "https://drive.google.com/file/d/1N5g6QhofPJMJ2UKQyFk3Mh9B4u7aFytn/preview",
    2: "https://drive.google.com/file/d/1N5g6QhofPJMJ2UKQyFk3Mh9B4u7aFytn/preview",
    3: "https://drive.google.com/file/d/1STasK4RG15FDqetJ4CXMrNhGnG0SYpYK/preview",
    4: "https://drive.google.com/file/d/1xpnSQBhPdgzIfN4_qVMq99QC01sNlkgu/preview",
    5: "https://drive.google.com/file/d/1RBpjJrWsfXB5rGwQxLEESsSJ_vE5wufA/preview",
    6: "https://drive.google.com/file/d/1dPfpo5lwFlcp-_j_Q3yI8goKHUVdPHVZ/preview",
    7: "https://drive.google.com/file/d/19PrxtMt3kAMasGZ_voaBuMTXB1VE8Ze3/preview",
    8: "https://drive.google.com/file/d/1FAKH9_0ZJyYBO7DS7Tl-MXCruolmonCL/preview",
    9: "https://drive.google.com/file/d/15_7llYbXoYlFv_Qaj17DMZBn-DMKhaB5/preview",
    10: "https://drive.google.com/file/d/1wUVquVmO7JmmAl330MNWWD_IyL-27Wjc/preview",
  },
  "Analysis and Design of Algorithm": {
    1:"https://drive.google.com/file/d/1xSiY0E8P1Ewd55wUdM-eWz18pIgUxf0I/preview",
    2:"https://drive.google.com/file/d/1xZXDZCji6rhVUQzQHFHRIkvnWVUNwoSJ/preview",
    3:"",
    4:"https://drive.google.com/file/d/1xkj_nvSQl_9rWNl18af4Qq0d_fIUfsLP/preview",
    5:"https://drive.google.com/file/d/1xggqTyfVmqe2U492D37AgFb73VD-zyyv/preview",
    6:"https://drive.google.com/file/d/1xkw5hgIkLyoomB3qW5TfmyrbwQpn7ONQ/preview",
    7:"https://drive.google.com/file/d/1xlKP2oayfF2SFU8190i3663E_Jj0rAn_/preview",
  },
};

sessionStorage.setItem("semData", JSON.stringify(sem));
sessionStorage.setItem("subData", JSON.stringify(sub));
sessionStorage.setItem("videoData", JSON.stringify(videoLinks));
