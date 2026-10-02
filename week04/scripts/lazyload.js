let person = {
    name: "Oluwatobi Ojo",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "coding", "playing video game"],
    address: {
        street: "23, cresent close",
        city: "Kubwa",
        country: "Untied Kingdow"
    },
    isEmployed: true,
    greet: function() {
        console.log(`My name is ${this.name}`);
    }
}