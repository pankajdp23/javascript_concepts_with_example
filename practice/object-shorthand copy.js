const name = "Mike";
const age = 40;
const salary = "sal";

const user ={
    name,
    age,
    [salary]: 20000,
    display() {
        console.log(this.name, this.age, this.sal)
    }
}

console.log(user)
user.display();
