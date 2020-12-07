const HelloFn = (name: string, age: number, gender: string): string => {
    return `${name} , ${age} , ${gender}`;
};
console.log(HelloFn("bjw", 444, "male"));
export {};
