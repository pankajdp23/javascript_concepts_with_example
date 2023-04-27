const user = {
    name: 'Mike',
    age :30,
    display: function() {
        console.log(`My name is ${this.name.toUpperCase()} and my age is ${this.age}`);
    }
}

user.display();

const value = 10;
const strinvalue = `${value}`;
console.log(strinvalue ,typeof strinvalue )

let htmlContent = '<ul>';

const users = [
    {
        name: 'Mike',
        age :30
    },
    {
        name: 'Jerry',
        age :50
    },
    {
        name: 'Alex',
        age :60
    },
]

for(let i=0;i<users.length;i++) {
    htmlContent +=`<li>
                        <div>Name: ${users[i].name}</div>
                        <div>Age: ${users[i].age}</div>
                    </li>`
}

htmlContent += '</ul>';

document.getElementById("list").innerHTML = htmlContent

