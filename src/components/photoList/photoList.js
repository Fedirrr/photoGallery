import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {photoId, successful} from "../redux/actions/actions";
import './photosList.css'
import {Link} from "react-router-dom";

const PhotoList = () => {
    const dispatch = useDispatch()
    
    const [photos, setPhotos] = useState([])
    const accessToken = "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043"
    const url = `https://api.unsplash.com/photos/?client_id=${accessToken}`
    useEffect(() => {
        const fetchPhotos = async () => {
            const {data} = await axios.get(url)
                setPhotos(data)
                dispatch(successful(data))
        }
        fetchPhotos()
    }, [])
    return (
        <div className="photosListWrapper">
            {
                photos.map(({id, urls, description}) => {
                    return (
                        <div className="mapPhotos" key={id}>
                            <Link to={`/photoGallery/${id}`}>
                                <img onClick={() => dispatch(photoId(id))}
                                     src={urls.thumb} alt={description}/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PhotoList;