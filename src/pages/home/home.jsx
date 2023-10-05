import React, {useEffect, useState} from 'react';
import Pagination from 'react-bootstrap/Pagination';
import {Card, CardGroup} from "react-bootstrap";

import './home.css'
import Navigationbar from "../../components/navbar/navigationBar";
import * as Api from '../../services/api'


function Home() {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);


    useEffect(() => {
        Api.GetImages(page)
            .then((res) => setImages(() => [...res.data]))
            .catch((err) => console.log(err));
    }, [page]);

    const handlePageInc = () => {
        setPage((prevPage) => prevPage + 1)
    }

    const handlePageDesc = (change) => {
        setPage((prevPage) => prevPage - 1)
    }

    return (
        <div className="homePage">
            <Navigationbar/>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyk4WNsT-h5vXlay4iSgtFDTE_pXkz9mvFbQ&usqp=CAU'
                    width='100%' alt='Header'/>
            </div>

            <br/>

            <div style={{display:"flex",flexWrap:'wrap',justifyContent:"space-evenly"}}>
                {images.map(image => {
                    return (
                        <img src={image.download_url} className="images" alt={image.id}/>
                    )
                })}
            </div>


            <Pagination  style={{alignSelf:"center"}}>
                {page > 1 && <Pagination.Prev onClick={handlePageDesc}/>}
                {page > 1 && <Pagination.Ellipsis/>}
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Ellipsis/>
                <Pagination.Next onClick={handlePageInc}/>
            </Pagination>
        </div>
    );
}

export default Home;