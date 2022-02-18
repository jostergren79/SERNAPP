import React, {useState, useEffect} from 'react'
import { MDBValidation, MDBInput, MDBBTN, MDBCheckbox, MDBInputGroup} from 'mdb-react-ui-kit'

const initialState = {
  source: '',
  description: '',
  product: ''
}

export const AddEditPost = () => {
  const [formValue, setFormValue] = useState(initialState)
  const { source, description, product } = formValue
  const handleSubmit = () => {}
  const onInput1Change = () => {}
  const onInput2Change = () => {}
  const onInput3Change = () => {}
  const onInput4Change = () => {}
  const onInput5Change = () => {}

  return (
    <MDBValidation className='row g-3' style={{marginTop: '100px'}} noValidate onSubmit={handleSubmit}>
      <p className='fs-2 fw-bold'>Add Post Details</p>
      <div
      style={{
        margin: 'auto',
        padding: '15px',
        maxWidth: '400px',
        alignContent: 'center'
      }}
      >
        <MDBInput
        value={source}
        name='source'
        type='text'
        onChange={onInput1Change}
        label='Source'
        validation='Please provide a Source'
        invalid
      /> 
      <br></br>

      <MDBInput
        value={description}
        name='description'
        type='textarea'
        onChange={onInput2Change}
        label='Description'
        validation='Please enter a Description'
        invalid
      /> 
      <br></br>

      <MDBInputGroup>
      <MDBCheckbox
      value={product}
      name='product'
      label='product1'
      onChange={onInput3Change}
     
      />
    
      <MDBCheckbox
      value={product}
      name='product'
      label='product2'
      onChange={onInput4Change}
      />

      <MDBCheckbox
      value={product}
      name='product'
      label='product3'
      onChange={onInput5Change}
      />
      
      </MDBInputGroup>

    
    


 
    </div>
    </MDBValidation>
  )
}