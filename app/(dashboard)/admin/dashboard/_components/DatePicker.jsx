"use client"

import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';

const DatePicker = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      flatpickr(inputRef.current, {
        // Optional: You can add configuration options for flatpickr here
      });
    }
  }, []);

  return (
    <div className="input-group me-3">
      <input
        className="form-control flatpickr flatpickr-input tajawal-medium"
        type="text"
        placeholder="حدد تاريخ"
        aria-describedby="basic-addon2"
        readOnly
        ref={inputRef}
      />
      <span className="input-group-text" id="basic-addon2">
        <i className="fe fe-calendar"></i>
      </span>
    </div>
  );
};

export default DatePicker;
