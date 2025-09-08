// components/LorryMaster.js

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
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const drawerWidth = 280;

const LorryMaster = () => {
  const [formData, setFormData] = useState({
    lorryId: "",
    lorryNumber: "",
    driverName: "",
    driverContact: "",
    capacity: "",
  });

  const [lorries, setLorries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (
      formData.lorryId &&
      formData.lorryNumber &&
      formData.driverName &&
      formData.driverContact &&
      formData.capacity
    ) {
      setLorries([...lorries, formData]);
      setFormData({
        lorryId: "",
        lorryNumber: "",
        driverName: "",
        driverContact: "",
        capacity: "",
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      lorryId: "",
      lorryNumber: "",
      driverName: "",
      driverContact: "",
      capacity: "",
    });
  };

  const handleDelete = (index) => {
    const updated = [...lorries];
    updated.splice(index, 1);
    setLorries(updated);
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
              Master &gt; Lorry Master
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Lorry Master
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search Lorries"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={handleAdd}>
              + Add Lorry
            </Button>
          </Box>
        </Box>

        {/* Form Section */}
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lorry ID"
                name="lorryId"
                value={formData.lorryId}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lorry Number"
                name="lorryNumber"
                value={formData.lorryNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Driver Name"
                name="driverName"
                value={formData.driverName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Driver Contact"
                name="driverContact"
                value={formData.driverContact}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Capacity (in Tons)"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                fullWidth
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
                    <strong>Lorry ID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Lorry Number</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Driver Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Driver Contact</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Capacity</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lorries.length > 0 ? (
                  lorries.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.lorryId}</TableCell>
                      <TableCell>{row.lorryNumber}</TableCell>
                      <TableCell>{row.driverName}</TableCell>
                      <TableCell>{row.driverContact}</TableCell>
                      <TableCell>{row.capacity}</TableCell>
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
                      No lorries added yet.
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

export default LorryMaster;
