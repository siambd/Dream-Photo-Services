import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className=" blog-box">
      <h4> Q.1: Difference between authorization and authentication ?</h4>
      <p> Ans: authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to. In the other hand we can say, authentication validates a user's identity a Authorization then grants that user permission to access a resource.
      </p>
      </div>
      <div className="blog-box">
      <h4>Q.2: Why are you using firebase? What other options do you have to implement authentication?</h4>
      <p>
        Ans: Im using Firebase for database and authentication. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. Use can use Okta for authentication service.
      </p>

      <h4>Q.3: What other services does firebase provide other than authentication? </h4>
      <p>Ans: Firebase also provided Cloud Functions, Hosting.Cloud Storage, Predictions, Cloud Messaging etc Services. </p>

      </div>
      

      
    </div>
  );
};

export default Blogs;
