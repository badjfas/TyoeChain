class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const jinwoo = new Human("bjw", 24, "male");
const HelloFn = (person: Human): string => {
    return `${person.name} , ${person.age} , ${person.gender}`;
};
console.log(HelloFn(jinwoo));
export {};
