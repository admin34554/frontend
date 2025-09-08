// components/SupplierMaster.js

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const drawerWidth = 280;

const SupplierMaster = () => {
  const [formData, setFormData] = useState({
    supplierId: "",
    supplierName: "",
    contactNumber: "",
    email: "",
    address: "",
  });

  const [suppliers, setSuppliers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (
      formData.supplierId &&
      formData.supplierName &&
      formData.contactNumber &&
      formData.email &&
      formData.address
    ) {
      setSuppliers([...suppliers, formData]);
      setFormData({
        supplierId: "",
        supplierName: "",
        contactNumber: "",
        email: "",
        address: "",
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      supplierId: "",
      supplierName: "",
      contactNumber: "",
      email: "",
      address: "",
    });
  };

  const handleDelete = (index) => {
    const updated = [...suppliers];
    updated.splice(index, 1);
    setSuppliers(updated);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f7fa" }}>
      {/* Sidebar */}
      <Box sx={{ width: `${drawerWidth}px`, flexShrink: 0 }}>
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Navbar */}
        <Navbar />

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="body2" sx={{ color: "#777", fontSize: "14px" }}>
              Master &gt; Supplier Master
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Supplier Master
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search Suppliers"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={handleAdd}>
              + Add Supplier
            </Button>
          </Box>
        </Box>

        {/* Form Section */}
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Supplier ID"
                name="supplierId"
                value={formData.supplierId}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Supplier Name"
                name="supplierName"
                value={formData.supplierName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                multiline
                rows={2}
              />
            </Grid>
          </Grid>

          {/* Buttons */}
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>

          {/* Table */}
          <Box sx={{ mt: 4 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Supplier ID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Supplier Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Contact Number</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Email</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Address</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {suppliers.length > 0 ? (
                  suppliers.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.supplierId}</TableCell>
                      <TableCell>{row.supplierName}</TableCell>
                      <TableCell>{row.contactNumber}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.address}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => handleDelete(idx)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No suppliers added yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SupplierMaster;
