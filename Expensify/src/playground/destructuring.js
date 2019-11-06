// const person = {
//   name: 'Brian',
//   age: 26,
//   location: {
//     city: 'Boulder',
//     temp: 42
//   }
// };

// const { name = 'Anonymous', age } = person
// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryah Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: PublisherName = 'Self Published'} = book.publisher

// console.log(PublisherName)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffee, , price] = item;

console.log(`A medium ${coffee} costs ${price}`)