export const idFormInput = (deviceID, onChange) => {
  return {
    className: 'pr-md-1',
    md: '6',
    type: 'text',
    label: 'Device ID',
    defaultValue: deviceID,
    placeholder: 'Device ID',
    name: 'deviceID',
    onChange: onChange
  }
}

export const ownerFormInput = (owner, onChange) => {
  return {
    className: 'pl-md-1',
    md: '6',
    type: 'text',
    label: 'Owner',
    defaultValue: owner,
    placeholder: 'Owner',
    name: 'owner',
    onChange: onChange
  }
}

export const locationFormInput = (location, onChange) => {
  return {
    className: 'pr-md-1',
    md: '5',
    type: 'text',
    label: 'Location',
    defaultValue: location,
    placeholder: 'Location',
    name: 'location',
    onChange: onChange
  }
}
