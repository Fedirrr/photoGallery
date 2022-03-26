import React from "react";
import {Route, Routes} from "react-router";
import PhotoList from "../photoList/photoList";
import Header from "../header/header";

import './app.css';
import PhotosPageItem from "../photosPageItem/photosPageItem";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<PhotoList/>}/>
                <Route path="/photoGallery/:id" element={<PhotosPageItem/>}/>
            </Routes>
        </div>
    );
}

export default App;
