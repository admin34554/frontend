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

const AccountsMaster = () => {
  const [formData, setFormData] = useState({
    accountId: "",
    accountName: "",
    accountType: "",
    balance: "",
  });

  const [accounts, setAccounts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (
      formData.accountId &&
      formData.accountName &&
      formData.accountType &&
      formData.balance
    ) {
      setAccounts([...accounts, formData]);
      setFormData({
        accountId: "",
        accountName: "",
        accountType: "",
        balance: "",
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      accountId: "",
      accountName: "",
      accountType: "",
      balance: "",
    });
  };

  const handleDelete = (index) => {
    const updated = [...accounts];
    updated.splice(index, 1);
    setAccounts(updated);
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
              Master &gt; Accounts Master
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Accounts Master
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search Accounts"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={handleAdd}>
              + Add Account
            </Button>
          </Box>
        </Box>

        {/* Form Section */}
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Account ID"
                name="accountId"
                value={formData.accountId}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Account Name"
                name="accountName"
                value={formData.accountName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Account Type"
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                label="Balance"
                name="balance"
                value={formData.balance}
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
                    <strong>Account ID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Account Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Account Type</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Balance</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accounts.length > 0 ? (
                  accounts.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.accountId}</TableCell>
                      <TableCell>{row.accountName}</TableCell>
                      <TableCell>{row.accountType}</TableCell>
                      <TableCell>{row.balance}</TableCell>
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
                      No accounts added yet.
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

export default AccountsMaster;
