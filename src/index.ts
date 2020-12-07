interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "bjw",
    age: 24,
    gender: "male"
};

const HelloFn = (person: Human): string => {
    return `${person.name} , ${person.age} , ${person.gender}`;
};
console.log(HelloFn(person));
export {};
