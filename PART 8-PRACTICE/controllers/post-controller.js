const Post = require('../models/posts-model');



const savePosts = async (req, res) => {
  try {
    const samplePosts = [
      { title: "AI in 2025", tags: ["ai", "tech", "future"] },
      { title: "Node.js Tips", tags: ["code", "javascript", "backend"] },
      { title: "Startup Lessons", tags: ["business", "startup", "growth"] },
      { title: "AI Startups", tags: ["ai", "startup", "tech"] },
      { title: "Frontend Best Practices", tags: ["code", "design", "frontend"] }
    ]
    const post = await Post.insertMany(samplePosts);

    res.status(201).json({
      success: true,
      message: `${post.length} Posts have been saved`
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    })
  }
}

module.exports = { savePosts };