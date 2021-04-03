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
  5: [
    {
      name: "Computer Networking Lab",
      tag: "Contains lab programs",
      link: "cn",
      subject: "Computer Networks",
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

  "Computer Networks": {
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
};

const videoLinks = {
  "Computer Networks": {
    1: "https://p-def8.pcloud.com/cBZQ43sVDZExHbdMZZZyxiUG7ZQ5ZZBMFZkZWqOC7ZlpZkzZkVZS5ZepZGFZppZYHZ9kZ4zZzpZP5ZBHZqXZGgBWXZa6fEP2Vu84JMEoecbOfvhL8N20Sk/lab1.mp4",
    2: "https://p-def8.pcloud.com/cBZYGNsVDZ7yVbdMZZZ4diUG7ZQ5ZZBMFZkZCKRI7ZzHZbXZMHZwHZD7Zp5ZoJZrHZvpZJkZ95ZfpZlFZMFZUPBWXZPaeAIAsP2HFSAXQ9jp0pFQIkzuX0/lab2.mp4",
    3: "https://p-def4.pcloud.com/cBZVz7DVDZKefbdMZZZAdiUG7ZQ5ZZBMFZkZlqm4kZA0ZkXZ1pZJFZm5Z55ZOJZdkZ0pZoFZmFZpFZoXZu0ZGPBWXZJTK2pQPQGTFIatTkzQkQ9XfXWEXk/lab3_dyn_rip.mp4",
    4: "https://p-def1.pcloud.com/cBZMMRDVDZOxKbdMZZZQqiUG7ZQ5ZZBMFZkZwBPkXZyFZFFZdkZspZJVZ0pZ3pZAJZXzZkXZoFZm7ZD7ZVHZcPBWXZzWkwrleApC09tOConNRnfjlvLA4V/lab4_static3.mp4",
    5: "https://p-def5.pcloud.com/cBZO5PDVDZlKcbdMZZZUqiUG7ZQ5ZZBMFZkZEJnSXZyHZrFZWHZRZPJZAHZ1zZbzZ6pZJ5Zr0ZTFZ1kZJJZkCBWXZuMLmylgFNgfHlrATjkYkBSwthqVV/lab5_subnet_intro.mp4",
    6: "https://p-def2.pcloud.com/cBZoiRDVDZSfabdMZZZ1tiUG7ZQ5ZZBMFZkZ6cQh7ZkHZ6FZOpZFJZFXZ2HZrHZvpZCXZUFZ1FZ7FZ6JZ1zZmCBWXZBxpveDISN8Y9N5bb49yg1jnAd8Ek/lab6_subnet-2.mp4",
    7: "https://p-def8.pcloud.com/cBZL0xDVDZp6ShdMZZZatiUG7ZQ5ZZBMFZkZaaH5kZv0ZeFZ9JZwHZ7FZbpZf7Z77ZCpZ8pZhFZT5ZVVZuVZfCBWXZH9ntCO51QG4xitSfDXjdqXsFE7uy/DVR-lab8.mp4",
    8: "",
    9: "https://p-def8.pcloud.com/cBZNMnDVDZilhhdMZZZH6iUG7ZQ5ZZBMFZkZne7IZdZqFZT7Zm7ZRZsFZyFZnJZoHZ1HZCXZlkZP5ZkXZWCBWXZfIO7h2x4Jz7eJQ86rnFnbJjQ7w2X/lab9_crc.mp4",
    10: "https://p-def3.pcloud.com/cBZ88gDVDZHXWhdMZZZw6iUG7ZQ5ZZBMFZkZQdW9ZF5ZezZ6VZQXZ7HZy7ZCFZyJZ8kZbJZbpZepZMHZM5ZtCBWXZkap4MD0nw7hvx1ljnP4OLpX7v8zk/lab10_part1_stop%26wait.mp4",
    11: "https://p-def7.pcloud.com/cBZFgODVDZP1PhdMZZZ5EiUG7ZQ5ZZBMFZkZi9Yn7ZbzZtJZCXZKVZyFZ40ZSFZWHZlJZYkZuVZW7ZwHZapZUCBWXZ3Yj1ubOEwmF01tl8T5LLCpqQz0GX/lab11_leak.mp4",
    12: "https://p-def3.pcloud.com/cBZKIknVDZDaOhdMZZZjEiUG7ZQ5ZZBMFZkZYmAK7ZnHZsHZNXZXpZvpZdFZoHZIFZFXZ9FZmXZhJZL5ZN5ZNCBWXZnvMELXzT9oV012pvqeGDxktCEHXk/lab12_dns.mp4",
    13: "https://p-def3.pcloud.com/cBZ8uH1VDZvSpSdMZZZlEiUG7ZQ5ZZBMFZkZvzy3kZXVZ5FZp0Zu5Z1FZIZx5Zp5ZRzZz7ZMHZkpZPpZOHZoCBWXZiae92nWgUpuTSj7lK2qmAVxSHwrX/lab13_dn2_root_dns.mp4",
    14: "https://p-def5.pcloud.com/cBZ76A1VDZ5VeSdMZZZrEiUG7ZQ5ZZBMFZkZwDFskZgZtJZp0ZDpZSFZ5pZ7zZG5ZQ7Z8pZOFZbpZrkZ30Z0xBWXZIk6flMtQH3S0g8Uk6TWXQQla1U3k/lab14_DNS_hierarchy.mp4",
    15: "https://p-def5.pcloud.com/cBZAVz1VDZN7SSdMZZZIOiUG7ZQ5ZZBMFZkZNYhw7ZW7ZqFZRHZypZI7ZMFZGpZJkZKJZaFZ1FZDJZoJZXVZpxBWXZvWpt6NfBhLS4nhCQ1sIMkbtV4gBX/lab15_dhcp1.mp4",
    16: "https://p-def5.pcloud.com/cBZQW21VDZiBqSdMZZZXUiUG7ZQ5ZZBMFZkZ3WzJkZ5XZGJZsJZ17ZkVZdZ0Z4JZszZdJZMHZukZCkZEHZ4xBWXZJOE2UrDeAM4jIGDssA90nFU7IQrV/lab16_dhcp2.mp4",
    17: "https://p-def3.pcloud.com/cBZwSseVDZSCQjdMZZZAUiUG7ZQ5ZZBMFZkZLin4VZm7ZzHZeHZe7ZT5ZoJZVJZlpZj5Z30ZGkZvpZKkZFkZjxBWXZ3MSHoeGhSDplRLKI7m8VcpRU2WCy/lab17_VLAN1.mp4",
    18: "https://p-def2.pcloud.com/cBZmYP1VDZk7rSdMZZZcIiUG7ZQ5ZZBMFZkZE0GC7ZHzZpZEFZNpZsFZNJZGFZu5Z6pZaZnkZzHZGHZJFZsxBWXZ3oAAixTfnxyQY0XG4oI7ry2BIDKy/lab18_vlan2_router_on_stick.mp4",
  },
  "Computer Programming ": {
    //put video links of CP Lab
  },
  "System software": {
    //Put video links of ss lab
  },
};

sessionStorage.setItem("semData", JSON.stringify(sem));
sessionStorage.setItem("subData", JSON.stringify(sub));
sessionStorage.setItem("videoData", JSON.stringify(videoLinks));
