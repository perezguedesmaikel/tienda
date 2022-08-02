
import React, { useState, useEffect } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';
import style from '../styles/Slide.module.css';

const GalleriaAutoPlayDemo = () => {

    const [images, setImages] = useState(null)
    const galleriaService = new PhotoService();

    const responsiveOptions = [
        {
            breakpoint: '5000px',
            numVisible: 10
        },
        {
            breakpoint: '1024px',
            numVisible: 7
        },
        {
            breakpoint: '768px',
            numVisible: 4
        },
        {
            breakpoint: '560px',
            numVisible: 3
        }
    ];

    useEffect(() => {
        galleriaService.getImages().then(data => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt}
       className={style.imagenSlide}
        />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt}  />;
    }

    return (
        <div>
            <div className="card ">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5}
                          item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
            </div>
        </div>
    );
}
export default GalleriaAutoPlayDemo;
