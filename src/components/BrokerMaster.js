// components/BrokerMaster.js

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

const BrokerMaster = () => {
  const [formData, setFormData] = useState({
    brokerId: "",
    brokerName: "",
    brokerContact: "",
    brokerAddress: "",
  });

  const [brokers, setBrokers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (
      formData.brokerId &&
      formData.brokerName &&
      formData.brokerContact &&
      formData.brokerAddress
    ) {
      setBrokers([...brokers, formData]);
      setFormData({
        brokerId: "",
        brokerName: "",
        brokerContact: "",
        brokerAddress: "",
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      brokerId: "",
      brokerName: "",
      brokerContact: "",
      brokerAddress: "",
    });
  };

  const handleDelete = (index) => {
    const updated = [...brokers];
    updated.splice(index, 1);
    setBrokers(updated);
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
              Master &gt; Broker Master
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Broker Master
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search Brokers"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={handleAdd}>
              + Add Broker
            </Button>
          </Box>
        </Box>

        {/* Form Section */}
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Broker ID"
                name="brokerId"
                value={formData.brokerId}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Broker Name"
                name="brokerName"
                value={formData.brokerName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact Number"
                name="brokerContact"
                value={formData.brokerContact}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Address"
                name="brokerAddress"
                value={formData.brokerAddress}
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
                    <strong>Broker ID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Contact</strong>
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
                {brokers.length > 0 ? (
                  brokers.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.brokerId}</TableCell>
                      <TableCell>{row.brokerName}</TableCell>
                      <TableCell>{row.brokerContact}</TableCell>
                      <TableCell>{row.brokerAddress}</TableCell>
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
                    <TableCell colSpan={5} align="center">
                      No brokers added yet.
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

export default BrokerMaster;
