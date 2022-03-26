import React from 'react';
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import "./photosPageItem.css"
import {Button} from "antd";
import {Link} from "react-router-dom";

const PhotosPageItem = () => {
    const {id} = useParams()
    const {urls} = useSelector(({photos}) => photos.find(el => el.id === id))
    return (
        <div className="photosPageWrapper">
            
            <img src={urls.regular} alt=""/>
            <Button style={{marginTop:"15px"}}>
                <Link to="/">
                    Back to list
                </Link>
            </Button>
        </div>
    );
};

export default PhotosPageItem;