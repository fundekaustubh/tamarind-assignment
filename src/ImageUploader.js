import React, { useState } from 'react'
import './ImageUploader.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ImageUploader = (props) => {
    const options = {
        uploadPreset: 'ml_default',
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
        uploadSignatureTimestamp: props.timestamp,
        uploadSignature: props.signature,
        cropping: false,
        folder: 'tamarind_uploads'
    }
    const myCropWidget = window.cloudinary.createUploadWidget(
        options,
        (error, result) => {
            if (!error && result.event === 'success') {
                toast.success(`Media received! Click on DONE to upload.`);
            }
        })
    return (
        <>
            <div className="grid row-span-2 w-9/12 h-full place-items-center">
                <section className="grid place-items-center fade-animation container hover:cursor-pointer h-1/2" onClick={(e) => { myCropWidget.open() }}>
                    <p className="font-mono text-white lg:text-3xl md:text-2xl text-1xl">Click here to upload your race-day images with us.📷</p>
                    <p className="animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-arrow-bar-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                        </svg>
                    </p>
                </section>
            </div>
        </>
    );
}

export default ImageUploader;