import React from 'react';

const GalleryLayout = ({children,modal}) => {
    return (
        <div>
            {modal}
            {children}
        </div>
    );
};

export default GalleryLayout;