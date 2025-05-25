import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const InventoryTable = ({ data }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Item</TableCell>
        <TableCell>Quantity</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.quantity}</TableCell>
          <TableCell>{item.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default InventoryTable;
