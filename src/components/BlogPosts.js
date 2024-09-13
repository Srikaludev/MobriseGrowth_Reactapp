import React from 'react';
import '../styles/blogpost.css';

function BlogPosts() {
    return (
        <div className="blog-posts">
            <h1 className="blogtitle">Latest Blog Posts</h1>
            <div className="post-tiles">
                <div className="post-tile">
                    <img src={`${process.env.PUBLIC_URL}/images/g1.png`} alt="Ethan Johnson" />
                    <h3>Ethan Johnson</h3>
                    <p>Description of Ethan's post</p>
                </div>
                <div className="post-tile">
                    <img src={`${process.env.PUBLIC_URL}/images/g2.png`} alt="Jennifer Davis" />
                    <h3>Jennifer Davis</h3>
                    <p>Description of Jennifer's post</p>
                </div>
                <div className="post-tile">
                    <img src={`${process.env.PUBLIC_URL}/images/g3.jpg`} alt="Jenny Williams" />
                    <h3>Jenny Williams</h3>
                    <p>Description of Jenny's post</p>
                </div>
                <div className="post-tile">
                    <img src={`${process.env.PUBLIC_URL}/images/g4.png`} alt="Adriana Miller" />
                    <h3>Adriana Miller</h3>
                    <p>Description of Adriana's post</p>
                </div>
            </div>
        </div>
    );
}

export default BlogPosts;
