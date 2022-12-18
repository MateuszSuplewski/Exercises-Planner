import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector, useDispatch } from 'react-redux'
import { createActionRemove } from '../state/cart'
import { cartFields } from '../data/formFields'
import CartForm from './cartForm'

const Cart = () => {
  const cartState = useSelector((state) => state.cart)
  const storeDispatch = useDispatch()

  return (
    <TableContainer>
      <Table
        sx={{ borderSpacing: '0 1rem', borderCollapse: 'separate', maxWidth: '1000px', margin: '0 auto', '& th': { borderBottom: 'none' }, '& td': { py: 0 } }}
      >
        <TableHead>
          <TableRow sx={{ borderBottom: 'none' }}>
            <TableCell sx={{ py: 0 }}>Exercise name</TableCell>
            <TableCell
              sx={{ py: 0 }}
            >Sets
            </TableCell>
            <TableCell
              sx={{ py: 0 }}
            >Weight
            </TableCell>
            <TableCell
              sx={{ py: 0 }}
            >Repetitions
            </TableCell>
            <TableCell/>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartState.map(({ name, sets, weight, repetitions, id }, index) => (
            <TableRow
              key={index}
              sx={{ boxShadow: '0px 0px 10px -3px rgba(66, 68, 90, 0.6)', backgroundColor: 'white' }}
            >
              <TableCell sx={{ pl: 3, minWidth: '130px' }}>{name}</TableCell>
              <TableCell sx={{ pl: 3 }}>{sets}</TableCell>
              <TableCell sx={{ pl: 3 }}>{weight}</TableCell>
              <TableCell sx={{ pl: 3 }}>{repetitions}</TableCell>
              <TableCell sx={{ pl: 3 }}>
                <CartForm
                  exercise={{ name, sets, weight, repetitions, id }}
                  fields={cartFields}
                />
              </TableCell>
              <TableCell sx={{ pl: 3 }}>
                <Button
                  variant={'outlined'}
                  color={'error'}
                  startIcon={<DeleteIcon />}
                  onClick={() => storeDispatch(createActionRemove(id))}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

Cart.propTypes = {
  appName: PropTypes.string
}

export default Cart
