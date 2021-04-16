//6.5

let inform = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova'
}
console.log(inform);
console.log(inform.contacts);

inform.contacts.phone = '+37312345678'; 
console.log(inform.contacts);

delete inform.address;
console.log(inform);