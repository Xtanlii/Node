const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('login', (name) => {
  console.log(`User logged in as ${name} `)
});

eventEmitter.emit('login', 'Stanley',)

eventEmitter.on('message', () => {
  setInterval(() => {
    console.log('Hello')
  }, 2000)
})

// eventEmitter.emit('message');

eventEmitter.on('order', (orderId) => {
  console.log(`Order ${orderId} recieved!`);
  eventEmitter.emit('payment', orderId)
})

eventEmitter.on('payment', (payment) => {
  console.log(`Payment for ${payment} is required`)
})

eventEmitter.emit('order', '123')

