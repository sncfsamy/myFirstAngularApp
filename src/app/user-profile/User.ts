class User {
    public name: string;
    public firstName: string;
    public quote: string;
    public age: number;
    public photo: string;

    constructor(name: string, firstName: string, age: number, quote: string, photo: string) {
        this.name = name;
        this.firstName = firstName;
        this.quote = quote;
        this.age = age;
        this.photo = photo;
    }
}

export default User;