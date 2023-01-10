import React from 'react'
import { Dropdown, Option } from '@fluentui/react-components/unstable';

function SingleDropDown({options}) {
  return (
    <Dropdown
      size='small'
      placeholder="Select option ..."
    >
      {options.map((option, optionIndex) => (
        <Option key={optionIndex} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Dropdown>
  )
}

export default SingleDropDown