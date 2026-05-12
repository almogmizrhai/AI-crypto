// Dark Mode CMP

import { useEffect, useState } from 'react'

export function DarkMode() {
    const [darkMode, setDarkMode] = useState(() => {
        try {
            // Check localStorage first, then system preference
            const saved = localStorage.getItem('darkMode');
            if (saved !== null) {
                return JSON.parse(saved);
            }
        } catch (error) {
            // localStorage not available
        }
        // Check system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Apply or remove dark-mode class on <body> and persist to localStorage
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        // Persist the preference
        try {
            localStorage.setItem('darkMode', JSON.stringify(darkMode));
        } catch (error) {
            // localStorage not available
        }
    }, [darkMode]);

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            // Only update if no user preference is saved
            try {
                if (localStorage.getItem('darkMode') === null) {
                    setDarkMode(e.matches);
                }
            } catch (error) {
                // localStorage not available, always follow system
                setDarkMode(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <button
            className="dark-mode-toggle-btn"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {darkMode ? "☀" : "☾"}
        </button>
    );
}
