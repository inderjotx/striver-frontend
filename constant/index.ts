export const LANGUAGES = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "TypeScript",
    "Ruby",
    "Go",
    "OCaml",
    "Pascal",
    "PHP",
    "Rust"
];





export const LANGUAGES_ID: Record<SupportedLanguages, number> = {
    "JavaScript": 63,
    "Python": 71,
    "Java": 62,
    "C#": 51,
    "C++": 52,
    "TypeScript": 74,
    "Ruby": 72,
    "Go": 60,
    "OCaml": 65,
    "Pascal": 67,
    "PHP": 68,
    "Rust": 73
};


export const NAVLINKS: { name: string, href: string }[] = [
    { name: 'Home', href: "/" },
    { name: 'Create', href: "/create" },
    { name: 'Dashboard', href: "/dashboard" },
]



export const dummyData: Snippet[] = [
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "code": "console.log('Hello, world!');",
        "language": "JavaScript",
        "stdIn": null,
        "stdOut": "Hello, world!",
        "createdAt": "2024-03-19T12:00:00Z",
        "updatedAt": "2024-03-19T12:00:00Z"
    },
    {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Smith",
        "code": "print('Hello, world!')",
        "language": "Python",
        "stdIn": null,
        "stdOut": "Hello, world!",
        "createdAt": "2024-03-19T12:00:01Z",
        "updatedAt": "2024-03-19T12:00:01Z"
    },
    {
        "id": 3,
        "firstName": "Bob",
        "lastName": "Johnson",
        "code": "System.out.println(\"Hello, world!\");",
        "language": "Java",
        "stdIn": null,
        "stdOut": "Hello, world!",
        "createdAt": "2024-03-19T12:00:02Z",
        "updatedAt": "2024-03-19T12:00:02Z"
    },
    {
        "id": 4,
        "firstName": "Emily",
        "lastName": "Brown",
        "code": "printf(\"Hello, world!\\n\");",
        "language": "C",
        "stdIn": null,
        "stdOut": "Hello, world!",
        "createdAt": "2024-03-19T12:00:03Z",
        "updatedAt": "2024-03-19T12:00:03Z"
    },
    {
        "id": 5,
        "firstName": "David",
        "lastName": "Jones",
        "code": "echo 'Hello, world!';",
        "language": "Bash",
        "stdIn": null,
        "stdOut": "Hello, world!",
        "createdAt": "2024-03-19T12:00:04Z",
        "updatedAt": "2024-03-19T12:00:04Z"
    },
    {
        "id": 6,
        "firstName": "Emma",
        "lastName": "Garcia",
        "code": "puts 'Hello, world!'",
        "language": "Ruby",
        "stdIn": null,
        "stdOut": "Hello, world!",
        "createdAt": "2024-03-19T12:00:05Z",
        "updatedAt": "2024-03-19T12:00:05Z"
    },
    {
        "id": 7,
        "firstName": "Michael",
        "lastName": "Martinez",
        "code": "alert('Hello, world!');",
        "language": "JavaScript",
        "stdIn": null,
        "stdOut": "Hello, world!",
        "createdAt": "2024-03-19T12:00:06Z",
        "updatedAt": "2024-03-19T12:00:06Z"
    },
    {
        "id": 8,
        "firstName": "Sophia",
        "lastName": "Hernandez",
        "code": "System.Console.WriteLine(\"Hello, world!\");",
        "language": "C#",
        "stdIn": null,
        "stdOut": "Hello, world!",
        "createdAt": "2024-03-19T12:00:07Z",
        "updatedAt": "2024-03-19T12:00:07Z"
    },
    {
        "id": 9,
        "firstName": "Ethan",
        "lastName": "Lopez",
        "code": "console.log('Bonjour, le monde!');",
        "language": "JavaScript",
        "stdIn": null,
        "stdOut": "Bonjour, le monde!",
        "createdAt": "2024-03-19T12:00:08Z",
        "updatedAt": "2024-03-19T12:00:08Z"
    },
    {
        "id": 10,
        "firstName": "Olivia",
        "lastName": "Ramirez",
        "code": "System.out.println(\"Bonjour, le monde!\");",
        "language": "Java",
        "stdIn": null,
        "stdOut": "Bonjour, le monde!",
        "createdAt": "2024-03-19T12:00:09Z",
        "updatedAt": "2024-03-19T12:00:09Z"
    }
]
