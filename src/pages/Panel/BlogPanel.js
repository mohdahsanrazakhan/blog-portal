import React, { useState } from 'react'
import app from '../../firebase'
import { getDatabase, ref, set, push } from "firebase/database";
import './BlogPanel.css'
import UploadFile from '../../components/UploadFile/UploadFile';

function BlogPanel() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [mainImage, setMainImage] = useState("")
  const [subImageOne, setSubImageOne] = useState("")
  const [subImageTwo, setSubImageTwo] = useState("")
  const [subImageThree, setSubImageThree] = useState("")

  const publishBlog = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "blog/data"))
    set(newDocRef, {
      BlogName: title,
      BlogDescription: description,
      BlogMainImage: mainImage,
      BlogSubImgOne: subImageOne,
      BlogSubImgTwo: subImageTwo,
      BlogSubImgThree: subImageThree
    }).then(() => {
      alert("Data saved successfully")
    }).catch((error) => {
      alert("error: ", error.message);
      console.log(error);
    })
  }

  return (
    <div>
      <h1 className='blog-header'>Post Blog</h1>
      <div className='writePg-input'>
        <div className='contain-input'>
          <div className='input-fields'>
            <label>Title</label>
            <input className='title-input' type='text' value={title}
              onChange={(e) => setTitle(e.target.value)} placeholder='Enter your title for the blog...' />
          </div>
          <div className='input-fields'>
            <label>Description</label>
            <textarea className='title-input text-area' type='text' value={description}
              onChange={(e) => setDescription(e.target.value)} placeholder='Write your content here...'></textarea>
          </div>
        </div>
        <div className='input-upload'>
          <UploadFile onFileUpload={setMainImage} />
          <UploadFile onFileUpload={setSubImageOne} />
          <UploadFile onFileUpload={setSubImageTwo} />
          <UploadFile onFileUpload={setSubImageThree} />
        </div>
      </div>
      <br />

      <button className='publish-btn' onClick={publishBlog}>Publish</button>
    </div>
  )
}

export default BlogPanel