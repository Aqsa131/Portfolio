import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ThemeSelector = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        <div>
            <DropdownButton style={{marginTop: "10px"}} id="dropdown-basic-button" title="Select Theme" variant="secondary">
                <Dropdown.Item onClick={() => setTheme("blue")}>Blue</Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme("green")}>Green</Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme("dark")}>Dark</Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme("light")}>Light</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default ThemeSelector;
