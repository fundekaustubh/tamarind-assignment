import React from 'react';
import ImageUploader from './ImageUploader';
import useFetch from './useFetch';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Upload = () => {
    const { data, isPending, error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/sign-uploaded-images`);
    return (
        <>
            <div className="App grid grid-rows-3 place-items-center">
                <header className="App-header">
                    <p id="header-content" className="row-span-1 lg:text-5xl md:text-4xl text-3xl">
                        Welcome to Tamarind!
                    </p>
                </header>
                {data && <ImageUploader data={data} />}
                <ToastContainer />
            </div>
        </>
    );
}

export default Upload;