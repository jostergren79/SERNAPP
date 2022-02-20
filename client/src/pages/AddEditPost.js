import React, {useState, useEffect} from 'react'
import { MDBValidation, MDBInput, MDBBtn, MDBCheckbox, MDBInputGroup} from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'


export const AddEditPost = () => {
  const [formValue, setFormValue] = useState('')
  const { source, description, product } = formValue
  const navigate = useNavigate()


  const [productOneChecked, setProductOneChecked] = useState(false)
  const [productTwoChecked, setProductTwoChecked] = useState(false)
  const [productThreeChecked, setProductThreeChecked] = useState(false)
 

  const handleChangeOne = () => {
    setProductOneChecked(!productOneChecked);
    console.log('productOne checked ' + !productOneChecked)   
  };

  const handleChangeTwo = () => {
    setProductTwoChecked(!productTwoChecked);
    console.log('productTwo checked ' + !productTwoChecked)
  };

  const handleChangeThree = () => {
    setProductThreeChecked(!productThreeChecked);
    console.log('productThree checked ' + !productThreeChecked)
  };

 

  const handleSubmit = () => {}
  const onInput1Change = () => {}
  const onInput2Change = () => {}
  

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
        validation='Please provide a source'
        invalid
      /> 
      <br></br>

      <MDBInput
        value={description}
        name='description'
        type='textarea'
        onChange={onInput2Change}
        label='Description'
        validation='Please enter a description'
      /> 
      <br></br>

      <MDBInput
      value='product'
      name='product'
      type='checkbox'
      label='Product'
      style={{marginBottom: '5px', maxWidth: '100%'}}
      >
      
      <MDBInputGroup>
      <MDBCheckbox
      style={{marginLeft: '5px', maxWidth: '100%'}}
      value={product}
      name='product1'
      label='product1'
      onChange={handleChangeOne}
      />
      
    
      <MDBCheckbox
      style={{marginLeft: '5px'}}
      value={product}
      name='product2'
      label='product2'
      onChange={handleChangeTwo}
      />

      <MDBCheckbox
      style={{marginLeft: '5px', marginBottom: '20px'}}
      value={product}
      name='product3'
      label='product3'
      onChange={handleChangeThree}
      />
          </MDBInputGroup>
      </MDBInput>
  

    
    <div className='col-12'
    style={{marginTop: '10px'}}>
      <MDBBtn style={{marginRight: '10px'}} type='submit'>
      Add
      </MDBBtn>               

      <MDBBtn onClick={() => navigate('/')} color='danger'>
      Cancel
      </MDBBtn>
    </div>


 
    </div>
    </MDBValidation>
  )
}