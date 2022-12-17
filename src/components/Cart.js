import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartState = useSelector((state) => state.cart)

  return (
    <TableContainer>
      <Table
        sx={{ borderSpacing: '0 1rem', borderCollapse: 'separate', maxWidth: '650px', margin: '0 auto', '& th': { borderBottom: 'none' } }}
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
          </TableRow>
        </TableHead>
        <TableBody>
          {cartState.map(({ name, sets, weight, repetitions }, index) => (
            <TableRow
              key={index}
              sx={{ boxShadow: '0px 0px 10px -3px rgba(66, 68, 90, 0.6)', backgroundColor: 'white' }}
            >
              <TableCell sx={{ pl: 3 }}>{name}</TableCell>
              <TableCell sx={{ pl: 3 }}>{sets}</TableCell>
              <TableCell sx={{ pl: 3 }}>{weight}</TableCell>
              <TableCell sx={{ pl: 3 }}>{repetitions}</TableCell>
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
