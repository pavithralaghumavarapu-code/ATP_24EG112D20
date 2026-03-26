 

// 2️ VIEW ALL ARTICLES OF AUTHOR
authorApp.get("/articles", async (req, res) => {
  try {

    const articles = await Article.find({ isArticleActive: true });

    res.send({
      message: "Articles fetched successfully",
      payload: articles
    });

  } catch (err) {
    res.send({ message: "Error fetching articles", error: err.message });
  }
});


// 3️ EDIT ARTICLE
authorApp.put("/article", verifyToken,async (req, res) => {
  

    
  const authorIdToken=req.user?.body
    const updatedArticle = await ArticleModel.findOne(
      authorId,
      req.body,
      { new: true }
    );
    const ModifiedArticle=await Article.ArticleModel.findOneAndUpdate({
      _id:articleId,author,authorId
    }) 
    
    res.status().json({message:"article updated successfully"})
   
}); 


// 4️ DELETE ARTICLE (SOFT DELETE)
authorApp.put("/delete-article/:id", async (req, res) => {
  try {

    const id = req.params.id;

    const deletedArticle = await Article.findByIdAndUpdate(
      id,
      { isArticleActive: false },
      { new: true }
    );

    res.send({
      message: "Article deleted successfully",
      payload: deletedArticle
    });

  } catch (err) {
    res.send({ message: "Error deleting article", error: err.message });
  }
});


// Export
module.exports = authorApp;
const exp = require("express");
const authorApp = exp.Router();

const Article = require("../models/ArticleModel");
const User = require("../models/UserModel");

//middleware
authorApp.use(exp.json());


// CREATE ARTICLE
authorApp.post("/article", async (req, res) => {

  try {

    //get article object from client
    const articleObj = req.body;

    //check if author exists
    const author = await User.findOne({
      email: articleObj.author,
      role: "author",
      isUserActive: true
    });

    //if author not found
    if (!author) {
      return res.send({ message: "Author not valid" });
    }

    //create new article document
    const newArticle = new Article(articleObj);

    //save article
    const savedArticle = await newArticle.save();

    //send response
    res.send({
      message: "Article created successfully",
      payload: savedArticle
    });

  } catch (err) {

    res.send({
      message: "Error creating article",
      error: err.message
    });

  }

});

module.exports = authorApp;