import React from 'react'
import { Table } from 'reactstrap'

function MerchantTable(props) {
  return (
    <>
      <h2>My Cart</h2>
      <Table striped>
        <TableHeader />
        <TableBody {...props} />
      </Table>
    </>
  )
}

function TableHeader() {
  return (
    <>
      <thead>
        <tr>
          <th>Index</th>
          <th>Merchant Name</th>
          <th>Commission Fee</th>
          <th>Logo</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
    </>
  )
}

function TableBody(props) {
  if (Array.isArray(props.cart) && props.cart.length === 0) {
    return null
  }

  return (
    <>
      <tbody>
        {
          props.cart.map((row) => {
            return (
              <tr key={row.guid}>
                <td>{row.index}</td>
                <td>{row.merchant}</td>
                <td>{row.commissionFee}</td>
                <td>{row.logo}</td>
                <td>{row.phone}</td>
                <td>{row.contactEmail}</td>
              </tr>
            )
          })
        }
      </tbody>
    </>
  )
}

export default MerchantTable
