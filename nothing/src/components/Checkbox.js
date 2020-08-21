import React from 'react'

const Checkbox = ({label, isSelected, onCheckChange}) => (
    <div>
        <label>
        <input type = "checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckChange}
        />
        {label}
        </label>
    </div>
)


export default Checkbox