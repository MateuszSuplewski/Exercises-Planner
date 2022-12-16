import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import { Pagination as PaginationBar, PaginationItem as PaginationBarItem, Box } from '@mui/material'

const Pagination = ({ path = '', limit = 12, children }) => {
  const { page = 1 } = useParams()
  const length = children ? children.length : 0
  const begin = limit * (page - 1)
  const end = page * limit
  const pages = Math.ceil(length / limit)

  const Content = () => (
    <PaginationBar
      page={Number(page)}
      count={pages}
      renderItem={(item) => (
        <PaginationBarItem
          component={Link}
          to={`${path}/${item.page}`}
          {...item}
        />
      )}
    />
  )

  return (
    <>
      {children && children.slice(begin, end)}
      <Box
        display={'flex'}
        justifyContent={'center'}
        width={'100%'}
      >
        <Content />
      </Box>
    </>
  )
}

Pagination.propTypes = {
  children: PropTypes.node,
  limit: PropTypes.number,
  path: PropTypes.string
}

export default Pagination
