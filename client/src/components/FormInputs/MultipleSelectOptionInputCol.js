import React from 'react'
import {
  FormGroup,
  Input,
  Col
} from 'reactstrap'

function MultipleSelectOptionInputCol({props}) {
  
  const generateOptions = () => {
    return (props.options.map(option =>
      <option key={option.id} value={option.id}>{option.value}</option>)
    )
  }

  return (
    <Col >
      <FormGroup>
        <label>{props.label}</label>
        <Input
          type="select"
          name={props.name}
          multiple
          onChange={props.onChange}
        >
          {generateOptions()}
        </Input>
      </FormGroup>
    </Col>
  )
}

export default MultipleSelectOptionInputCol
