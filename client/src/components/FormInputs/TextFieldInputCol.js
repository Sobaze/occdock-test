import React from 'react'
import {
  FormGroup,
  Input,
  Col
} from 'reactstrap'

function TextFieldInputCol({props}) {

  return (
    <Col className={props.className} md={props.md}>
      <FormGroup>
        <label>{props.label}</label>
        <Input
          autoComplete={props.autoComplete}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onChange={props.onChange}
        />
      </FormGroup>
    </Col>
  )
}

export default TextFieldInputCol
