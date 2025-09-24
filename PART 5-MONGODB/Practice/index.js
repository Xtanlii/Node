const Mongoose = require('mongoose')

//Connect to your database



async function connect() {
  await Mongoose.connect(
    'mongodb+srv://stanleyodoh:08stanley70@cluster0.o2zp1hm.mongodb.net/'
  )
  console.log("Database connected successfully");
}

const userSchema = new Mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isAdmin: Boolean
})

const User = Mongoose.model('Practice', userSchema)

async function main() {
  try {
    await connect().catch(err => console.log(err, err.message))

    // const newUser = await User.create({
    //   name: "Eren Yeager",
    //   email: "suzuma322@gmail.com",
    //   age: 26
    // })

    /*const newUser = new User({
      name: "Kareem Benzema",
      email: "kareemballon007@gmail.com",
      age: 19
    }) */

    // await newUser.save()
    // console.log('newUser created succesfully', newUser)
    co
  } catch (err) {
    console.log(err.message)
  } finally {
    await Mongoose.connection.close();
  }
  
}

main();

