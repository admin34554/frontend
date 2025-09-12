import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Tabs,
  Tab,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const drawerWidth = 280; // ⬅️ Slightly wider sidebar

const CustomerMaster = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    aadhar: "",
    gstin: "",
    sugarLicense: "",
    phone: "",
    cell: "",
    credit1: "",
    credit2: "",
    active: false,
    doorNumber: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        "https://aadhi-store.onrender.com/api/v1/customer-master",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save customer.");
      }

      const result = await response.json();
      alert("Customer saved successfully!");
      console.log(result);
    } catch (error) {
      console.error("Save error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f7fa" }}>
      {/* Sidebar with increased width */}
      <Box sx={{ width: `${drawerWidth}px`, flexShrink: 0 }}>
        <Sidebar />
      </Box>

      {/* Main content without marginLeft */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* ✅ Navbar stays the same */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle2" sx={{ color: "#777" }}>
              Master &gt; Customer Master
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Customer Master
            </Typography>
          </Box>

          {/* Top right actions */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              size="small"
              placeholder="Customer Name/ Code"
              InputProps={{
                startAdornment: <span style={{ marginRight: 8 }}>🔍</span>,
              }}
            />
            <Button variant="outlined">✏️</Button>
            <Button variant="outlined">🖨️</Button>
            <Button variant="contained">+ Add New</Button>
            <span>⚙️</span>
            <img
              src="/admin.png"
              alt="Admin"
              style={{ width: 32, height: 32, borderRadius: "50%" }}
            />
          </Box>
        </Box>

        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={(e, newVal) => setTabValue(newVal)}
          sx={{ mb: 2 }}
        >
          <Tab label="Customer Details" />
          <Tab label="Address" />
        </Tabs>

        {/* Centered form section */}
        <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
          {tabValue === 0 && (
            <Paper sx={{ p: 3 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Type:
                </Typography>
                <RadioGroup row name="type">
                  <FormControlLabel
                    value="ledger"
                    control={<Radio />}
                    label="Ledger"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other Party"
                  />
                </RadioGroup>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Aadhar No"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="GSTIN Number"
                    name="gstin"
                    value={formData.gstin}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Sugar License Number"
                    name="sugarLicense"
                    value={formData.sugarLicense}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Cell Number"
                    name="cell"
                    value={formData.cell}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Credit Period"
                    name="credit1"
                    value={formData.credit1}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Credit Period"
                    name="credit2"
                    value={formData.credit2}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.active}
                      onChange={handleChange}
                      name="active"
                    />
                  }
                  label="Active"
                />
              </Box>

              <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                <Button variant="contained" color="primary">
                  Save
                </Button>
                <Button variant="outlined">Cancel</Button>
              </Box>
            </Paper>
          )}

          {tabValue === 1 && (
            <Paper sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Door Number"
                    name="doorNumber"
                    value={formData.doorNumber || ""}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Street"
                    name="street"
                    value={formData.street || ""}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Area"
                    name="area"
                    value={formData.area || ""}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="City"
                    name="city"
                    value={formData.city || ""}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="State"
                    name="state"
                    value={formData.state || ""}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Pincode"
                    name="pincode"
                    value={formData.pincode || ""}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                <Button variant="contained" color="primary">
                  Save
                </Button>
                <Button variant="outlined">Cancel</Button>
              </Box>
            </Paper>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerMaster;
