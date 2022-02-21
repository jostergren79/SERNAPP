import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPostsStart } from '../redux/Actions'
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

export const Home = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(loadPostsStart())
  }, [dispatch])

  const handleDelete = {

  }

  return (
    <div className='container' style={{ marginTop: '150px' }}>
        <MDBTable>
          <MDBTableHead dark>

            <tr>
              <th scope='col'> ID </th>
              <th scope='col'> Source </th>
              <th scope='col'> Product </th>
              <th scope='col'> Action </th>
            </tr>

          </MDBTableHead>
          { posts && posts.map(( item, index ) => (
            
            <MDBTableBody key={ index }>
              <tr>
                <th scope='row'> { index + 1 } </th>
                <td>{item.source}</td>
                <td>{[item.product]}</td>
                <td>

                  <MDBTooltip title='Delete' tag='a'>
                  <MDBBtn className='m-1' color='none' tag='a' onClick={() => handleDelete(item.id)}>
                  <MDBIcon fas icon='trash' style={{color: 'black'}} size='lg'></MDBIcon>
                  </MDBBtn>
                  </MDBTooltip> {" "}

                  <MDBTooltip title='Edit' tag='a'>
                  <Link id='RouterNavLink' to={`/editPost/${item.id}`} >
                  <MDBIcon fas icon='pen' style={{color: 'black', marginBottom: '10px'}} size='lg'></MDBIcon>
                  </Link>
                  </MDBTooltip> {" "}

                  <MDBTooltip title='View' tag='a'>
                  <Link id='RouterNavLink' to={`/postInfo/${item.id}`}>
                  <MDBIcon fas icon='eye' style={{color: 'black', marginBottom: '10px'}} size='lg'></MDBIcon>
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


