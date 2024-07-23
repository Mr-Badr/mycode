import React from 'react';
import { TiPlus } from 'react-icons/ti';

function AddFormationButton({ handleShowAddCoursePopup }) {
    return (
        <div className="card-header border-bottom-0 d-flex align-items-center justify-content-center">
            <a className="btn btn-primary btn-sm d-none d-md-block" onClick={handleShowAddCoursePopup}>
                <span className='mx-2'>
                    إضافة دورة
                </span>
                <TiPlus />
            </a>
        </div>
    );
}

export default AddFormationButton;
