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
  isAdmin: {type: Boolean, default: false}
})

const User = Mongoose.model('Practice', userSchema)

async function main() {
  try {
    await connect().catch(err => console.log(err, err.message))

    
    const newUser = await User.create({
      name: " Ariana",
      email: "arianaffs3im@gmail.com",
      age: 31
    }) 

    /*const newUser = new User({
      name: "Kareem Benzema",
      email: "kareemballon007@gmail.com",
      age: 19
    }) 

    await newUser.save() */

    const allUsers = await User.find();
    console.log(allUsers);
    // console.log('newUser created succesfully', newUser)
    // const userWithAgeBelow25 = await User.find({age: {$lt: 25}})
    // console.log(userWithAgeBelow25)
    // const byEmail = await User.find({email: 'suzuma322@gmail.com'})
    // console.log(byEmail)

    // const updateUser = await User.findByIdAndUpdate('68d452cef5a867ac65004c74',  {
    //   $set: {email: "updatedemail@gmail.com"}
    // }, {new: true})
    // console.log(updateUser);

    // const deleteUser = await User.findByIdAndDelete('68d45fa0ee742802e6e151f8')
    // console.log(deleteUser)


  } catch (err) {
    console.log(err.message)
  } finally {
    await Mongoose.connection.close();
  }

}

main();

