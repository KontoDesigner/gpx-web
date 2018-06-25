import React from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, disabled }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>

            <input
                type="text"
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value !== null ? value : ''}
                onChange={onChange}
                disabled={disabled === true ? true : false} />
        </div>
    );
};

export default TextInput;
