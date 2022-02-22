import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePostStart, loadPostsStart } from '../redux/Actions'
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from 'mdb-react-ui-kit'

import { Link } from 'react-router-dom'
import { toast } from "react-toastify"

export const Home = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(loadPostsStart())
  }, [dispatch])

  const handleDelete = (id) => {
    if(window.confirm("Are you sure that you want to delete that post ?")) {
      dispatch(deletePostStart(id))
      toast.success("Post successfully removed.")
    }
  }

  return (
    <div className='container' style={{ marginTop: '150px' }}>
        <MDBTable>
          <MDBTableHead style={{backgroundColor: '#01579B', color: 'white'}}>

            <tr>
              <th scope='col'> ID </th>
              <th scope='col'> Source </th>
              <th scope='col'> Description </th>
              <th scope='col'> Action </th>
            </tr>

          </MDBTableHead>
          { posts && posts.map(( item, index ) => (
            
            <MDBTableBody key={ index }>
              <tr>
                <th scope='row'> { index + 1 } </th>
                <td>{item.source}</td>
                <td>{[item.description]}</td>
                <td>

                  <MDBTooltip title='Delete' tag='a'>
                  <MDBBtn className='m-1' color='none' tag='a' onClick={() => handleDelete(item.id)}>
                  <MDBIcon fas icon='trash' style={{color: '#E57373'}} size='lg'></MDBIcon>
                  </MDBBtn>
                  </MDBTooltip> {" "}

                  <MDBTooltip title='Edit' tag='a'>
                  <Link id='RouterNavLink' to={`/editPost/${item.id}`} >
                  <MDBIcon fas icon='pen' style={{color: '#4DB6AC', marginBottom: '10px'}} size='lg'></MDBIcon>
                  </Link>
                  </MDBTooltip> {" "}

                  <MDBTooltip title='View' tag='a'>
                  <Link id='RouterNavLink' to={`/postInfo/${item.id}`}>
                  <MDBIcon fas icon='eye' style={{color: '#01579B', marginBottom: '10px'}} size='lg'></MDBIcon>
                  </Link>
                  </MDBTooltip>

                </td>
              </tr>

            </MDBTableBody>

        ))}
        </MDBTable>
    </div>
  )
}


