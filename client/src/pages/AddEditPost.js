import React, {useState} from 'react'
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createPostStart } from '../redux/Actions'

export const AddEditPost = () => {
  
  const [formValue, setFormValue] = useState('')
  const { source, description } = formValue
  const navigate = useNavigate()
  const dispatch = useDispatch()

// ///checkboxes 
//   const [productOneChecked, setProductOneChecked] = useState(false)
//   const [productTwoChecked, setProductTwoChecked] = useState(false)
//   const [productThreeChecked, setProductThreeChecked] = useState(false)

//  ///handle checkbox states
//   const handleChangeOne = () => {
//     setProductOneChecked(!productOneChecked);
//     console.log('productOne checked ' + !productOneChecked)   
//   };

//   const handleChangeTwo = () => {
//     setProductTwoChecked(!productTwoChecked);
//     console.log('productTwo checked ' + !productTwoChecked)
//   };

//   const handleChangeThree = () => {
//     setProductThreeChecked(!productThreeChecked);
//     console.log('productThree checked ' + !productThreeChecked)
//   };

  ///form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if(source && description) {
      dispatch(createPostStart(formValue))
      setTimeout(() => navigate('/'), 500)
console.log('you submitted')
    }
  }
  ///handle input 1 and 2 changes 
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
        validation=''
        
      /> 
      <br></br>

      <MDBInput
        value={description}
        name='description'
        type='textarea'
        onChange={onInput2Change}
        label='Description'
        validation=''
      /> 
      <br></br>

    {/* <MDBInput
      type='textarea'
      label='Product'
      >
      
      <MDBCheckbox 
      value={product}
      name='product1' 
      type='checkbox'
      onChange={handleChangeOne}
      label='product1'
      id='product'
      style={{marginLeft: '10px'}}
      />
     
     <MDBCheckbox
      value={product}
      name='product2' 
      type='checkbox'
      onChange={handleChangeTwo}
      label='product2'
      id='product'
      style={{marginLeft: '10px'}}
      />

     <MDBCheckbox
      value={product}
      name='product3' 
      type='checkbox'
      onChange={handleChangeThree}
      label='product3'
      id='product'
      style={{marginLeft: '10px', marginBottom: '20px'}}
      />  

   </MDBInput> */}
   
   
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