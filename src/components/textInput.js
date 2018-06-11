import React from 'react';

const TextInput = ({ name, onChange, placeholder, value }) => {
    return (
        <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
    );
};

export default TextInput;
