import React from 'react';
import ImageUploader from './ImageUploader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Upload = () => {
    return (
        <>
            <div className="App grid grid-rows-3 place-items-center">
                <header className="App-header">
                    <p id="header-content" className="row-span-1 lg:text-5xl md:text-4xl text-3xl">
                        Welcome to Tamarind!
                    </p>
                </header>
                <ImageUploader />
                <ToastContainer />
            </div>
        </>
    );
}

export default Upload;