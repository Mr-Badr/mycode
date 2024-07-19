'use client'
import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (selectedTheme) => {
    if (selectedTheme === 'auto') {
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      selectedTheme = preferredTheme;
    }
    document.documentElement.setAttribute('data-bs-theme', selectedTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="dropdown mx-2">
      <button
        className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (auto)"
      >
        <i className="bi theme-icon-active">
          {theme === 'dark' ? <i className="bi theme-icon bi-moon-stars-fill"></i> : <i className="bi theme-icon bi-sun-fill"></i>}
        </i>
        <span className="visually-hidden bs-theme-text">Toggle theme</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${theme === 'light' ? 'active' : ''}`}
            onClick={() => toggleTheme('light')}
          >
            <i className="bi theme-icon bi-sun-fill"></i>
            <span className="ms-2">Light</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => toggleTheme('dark')}
          >
            <i className="bi theme-icon bi-moon-stars-fill"></i>
            <span className="ms-2">Dark</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${theme === 'auto' ? 'active' : ''}`}
            onClick={() => toggleTheme('auto')}
          >
            <i className="bi theme-icon bi-circle-half"></i>
            <span className="ms-2">Auto</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DarkModeToggle;
