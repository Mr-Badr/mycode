"use client"
import React, { useState, useEffect } from 'react';

const LessonPopup = ({ show, handleClose, initialLesson, handleSaveLesson }) => {
  const [price, setPrice] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    if (initialLesson) {
      setPrice(initialLesson.price);
      setNumber(initialLesson.number);
      setDate(initialLesson.date);
      setPaymentMethod(initialLesson.paymentMethod);
    }
  }, [initialLesson]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedLesson = {
      ...initialLesson,
      price,
      number,
      date,
      paymentMethod,
    };
    handleSaveLesson(editedLesson);
  };

  return (
    <div>
      {show && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title tajawal-bold">Edit Lesson</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Price:</label>
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Number:</label>
                    <input
                      type="text"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Date:</label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Payment Method:</label>
                    <input
                      type="text"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonPopup;
