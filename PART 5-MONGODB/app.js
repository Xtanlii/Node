const mongoose = require('mongoose');
const key = require('./key')


async function connect() {
  await mongoose.connect(
    `mongodb+srv://${key.password}@cluster0.o2zp1hm.mongodb.net/`
  )
  console.log('database connected successfully')
}



const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now }

})

//Create user model
const User = mongoose.model('User', userSchema)

async function runQueryExamples() {
  try {
    await connect().catch(err => console.log(err))
    //create a new document
    const newUser = await User.create({
      name: 'Updated User',
      email: "updateduser@gmail.com",
      age: 75,
      isActive: true,
      tags: ['developer'],
    })

    /*
  const newUser = new User({
    name: 'Arky Simons',
    email: "arkysimons115@gmail.com",
    age: 21,
    isActive: true,
    tags: ['developer', 'designer', 'manager'],
  })
    await newUser.save()
    */
    // const allUsers = await User.find({});
    // console.log(allUsers);
    console.log('Created new user', newUser);

    // const getUserOfActiveFalse = await User.find({isActive: true})
    // console.log(getUserOfActiveFalse);

    // const getJohnDoeUser = await User.findOne({name: "John Doe"})
    // console.log(getJohnDoeUser);

    // const getById = await User.findById(newUser._id);
    // console.log(getById)

    // const selectedFields = await User.find().select('name email -_id');
    // console.log(selectedFields);

    // const limitedUsers = await User.find().limit(5).skip(1)
    // console.log(limitedUsers);

    // const sortedUsers = await User.find().sort({age: 1})
    // console.log(sortedUsers)

    // const countDoc = await User.countDocuments({isActive: true});
    // console.log(countDoc);

    // const deletedUser = await User.findByIdAndDelete(newUser._id)
    // console.log('deleted user ->', deletedUser)

    const updateUser = await User.findByIdAndUpdate(newUser._id, {
      $set: { age: 100 },
      $push: { tags: 'updated' }
    }, { new: true })

    console.log('updated user ->', updateUser)



  } catch (err) {
    console.log('Error ->', err)
  } finally {
    await mongoose.connection.close()
  }
}

runQueryExamples();