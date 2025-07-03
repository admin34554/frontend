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

const ProductMaster = () => {
  const [formData, setFormData] = useState({
    productType: "",
    productCode: "",
    name: "",
    brandName: "",
    weight: "",
    retailRate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const taxRows = [
    { taxName: "Ex. CFM Sales", optionalStock: "", stockInHand: "" },
    { taxName: "Exem(p)tion", optionalStock: "", stockInHand: "" },
    { taxName: "4% GST", optionalStock: "", stockInHand: "" },
    { taxName: "Exemption", optionalStock: "", stockInHand: "" },
    { taxName: "5% Sugar", optionalStock: "", stockInHand: "" },
    { taxName: "5 % GST", optionalStock: "", stockInHand: "" },
    { taxName: "Second", optionalStock: "", stockInHand: "" },
    { taxName: "5% i Sugar", optionalStock: "", stockInHand: "" },
  ];

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
              Master &gt; Product Master
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Product Master
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search Product"
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
            <Button variant="contained">+ Add New</Button>
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
                select
                label="Product Type"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="type1">Type 1</MenuItem>
                <MenuItem value="type2">Type 2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product Code"
                name="productCode"
                value={formData.productCode}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Brand Name"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Retail Rate"
                name="retailRate"
                value={formData.retailRate}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            {/* Read-only location fields */}
            <Grid item xs={12} sm={6}>
              <TextField label="Loc. Comm Purs" value="" fullWidth disabled />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Loc. Comm Sales" value="" fullWidth disabled />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Out. Comm Purs" value="" fullWidth disabled />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Out. Comm Sales" value="" fullWidth disabled />
            </Grid>
          </Grid>

          {/* Tax Table */}
          <Box sx={{ mt: 4 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>TAX NAME</strong></TableCell>
                  <TableCell><strong>OPTIONAL STOCK</strong></TableCell>
                  <TableCell><strong>STOCK IN HAND</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {taxRows.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{row.taxName}</TableCell>
                    <TableCell>{row.optionalStock}</TableCell>
                    <TableCell>{row.stockInHand}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

          {/* Buttons */}
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary">
              Save
            </Button>
            <Button variant="outlined">Cancel</Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ProductMaster;
