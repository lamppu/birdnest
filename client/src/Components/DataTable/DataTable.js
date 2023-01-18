import React from 'react'
import { Table } from 'semantic-ui-react'

const DataTable = ({data}) => {
  if (data) {
    const array = data.violatorsArray;
    const rows = [];
    let i = 0;

    for (let elem of array) {
      let name = elem.pilot.name;
      let email = elem.pilot.email;
      let phone = elem.pilot.phone;
      if (!name) {
        name = "Unknown";
        email = "Unknown";
        phone = "Unknown";
      }

      rows.push(
        <Table.Row key = {i} negative>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{email}</Table.Cell>
          <Table.Cell>{phone}</Table.Cell>
          <Table.Cell>{elem.ndzStatus}</Table.Cell>
          <Table.Cell>{elem.closestDistance}</Table.Cell>
          <Table.Cell>{elem.timeStamp}</Table.Cell>
        </Table.Row>
      )
      i++; 
    }

    return (
      <Table celled>
          <Table.Header>
          <Table.Row>
              <Table.HeaderCell>Pilot Name</Table.HeaderCell>
              <Table.HeaderCell>Pilot Email Address</Table.HeaderCell>
              <Table.HeaderCell>Pilot Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Currently in NDZ</Table.HeaderCell>
              <Table.HeaderCell>Closest Confirmed Distance</Table.HeaderCell>
              <Table.HeaderCell>Last Seen</Table.HeaderCell>
          </Table.Row>
          </Table.Header>
          <Table.Body>
              {rows}
          </Table.Body>
      </Table>
    )
  }
  
  return null
    
}

export default DataTable
