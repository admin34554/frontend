import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  MenuItem,
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

const TaxMaster = () => {
  const [formData, setFormData] = useState({
    taxId: "",
    taxName: "",
    taxPercentage: "",
    effectiveDate: "",
    status: "Active",
  });

  const [taxList, setTaxList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (
      formData.taxId &&
      formData.taxName &&
      formData.taxPercentage &&
      formData.effectiveDate
    ) {
      setTaxList([...taxList, formData]);
      setFormData({
        taxId: "",
        taxName: "",
        taxPercentage: "",
        effectiveDate: "",
        status: "Active",
      });
    }
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f7fa" }}>
      {/* Sidebar */}
      <Box sx={{ width: `${drawerWidth}px`, flexShrink: 0 }}>
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Top Navbar */}
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
              Master &gt; Tax Master
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Tax Master
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search Tax"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="outlined">✏️</Button>
            <Button variant="outlined">🖨️</Button>
            <Button variant="contained" onClick={handleAdd}>
              + Add New
            </Button>
            <span>⚙️</span>
            <img
              src="/admin.png"
              alt="Admin"
              style={{ width: 32, height: 32, borderRadius: "50%" }}
            />
          </Box>
        </Box>

        {/* Form Section */}
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Tax ID"
                name="taxId"
                value={formData.taxId}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Tax Name"
                name="taxName"
                value={formData.taxName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Tax Percentage (%)"
                name="taxPercentage"
                type="number"
                value={formData.taxPercentage}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                label="Effective Date"
                name="effectiveDate"
                value={formData.effectiveDate}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          {/* Tax Table */}
          <Box sx={{ mt: 4 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Tax ID</strong></TableCell>
                  <TableCell><strong>Tax Name</strong></TableCell>
                  <TableCell><strong>Percentage</strong></TableCell>
                  <TableCell><strong>Effective Date</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {taxList.length > 0 ? (
                  taxList.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.taxId}</TableCell>
                      <TableCell>{row.taxName}</TableCell>
                      <TableCell>{row.taxPercentage}%</TableCell>
                      <TableCell>{row.effectiveDate}</TableCell>
                      <TableCell>{row.status}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No tax records added yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>

          {/* Buttons */}
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Save
            </Button>
            <Button variant="outlined">Cancel</Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default TaxMaster;
