// blog_index,blog_details,blog_create_get,blog_create_post,blog_delete
const Blog = require('../models/Blog');

const blog_index = async (req,res)=>{
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render('index', { title: "All Blogs", blogs });
}

const blog_details = async (req,res)=>{
    const blog = await Blog.findById({ _id: req.params.blogid });
    if (!blog) {
        return res.status(500).send({ error: "There is a Internal Server Error" });
    }
    res.render('View', { blog, title: blog.title });
}
const blog_create_get = async (req,res)=>{
    res.render('create', { title: "create blog" });
}
const blog_create_post = async (req,res)=>{
    const { title, snippet, body,image } = req.body;
    const newPost = new Blog({ thumb:image,title, snippet, body });
    const savedPost = await newPost.save();
    if (!savedPost) {
        return res.status(500).send({ error: "There is some error!" });
    }
    res.redirect('/');
}

const blog_delete = async (req,res)=>{
    const deletedBlog = await Blog.findByIdAndDelete({_id:req.params.blogid});
    if(!deletedBlog) {
        return res.status(500).send({ error:"There is some error in delete the blog"});
    }
    return res.status(200).send({redirect:"/"});
}

module.exports = {blog_index,blog_details,blog_create_get,blog_create_post,blog_delete};