import React from 'react';

function FormationSearch({ searchTerm, handleSearchChange }) {
    return (
        <form className="row gx-3">
            <div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
                <input
                    type="search"
                    className="form-control"
                    placeholder="ابحث في الدورات التدريبية الخاصة بك"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="col-lg-3 col-md-5 col-12">
                <select className="form-select">
                    <option value="">تاريخ الإنشاء</option>
                    <option value="Newest">الأحدث</option>
                    <option value="High Rated">تقييم عالي</option>
                    <option value="Law Rated">تصنيف منخفض</option>
                    <option value="High Earned">مكاسب عالية</option>
                </select>
            </div>
        </form>
    );
}

export default FormationSearch;
