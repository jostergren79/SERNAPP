import React, {useState} from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createPostStart } from '../redux/Actions'

export const AddEditPost = () => {
  
  const [formValue, setFormValue] = useState('')
  const { source, description } = formValue
  const navigate = useNavigate()
  const dispatch = useDispatch()


  ///form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if(source && description) {
      dispatch(createPostStart(formValue))
      setTimeout(() => navigate('/'), 500)
      console.log('form submitted')
    }
  }
  ///handle input 1 and 2 changes 
  const onInputChange = (e) => {
    let {name, value} = e.target
    setFormValue({...formValue, [name]: value })
  }


  return (
   <>
      <p 
      className='fs-2 fw-bold'
      style={{
        marginTop: '20px',
        color: '#01579B'}}
      >
      Add Post Details
      </p>

      <form
      onSubmit={handleSubmit}
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
        onChange={onInputChange}
        label='Source'
        validation=''
        
      /> 
      <br></br>

      <MDBInput
        value={description}
        name='description'
        type='textarea'
        onChange={onInputChange}
        label='Description'
        validation=''
      /> 
      <br></br>

      
    <div 
      className='col-12'
      style={{marginTop: '10px'}}
      >

      <MDBBtn style={{marginRight: '10px', backgroundColor: '#01579B'}} type='submit'>
      Add
      </MDBBtn>               

      <MDBBtn onClick={() => navigate('/')} style={{backgroundColor: '#E57373'}}>
      Cancel
      </MDBBtn>
    </div>


    </form>
    </>
  )
}