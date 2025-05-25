import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatCard from '../components/Statcard';

const Dashboard = () => (
  <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f5f7fa' }}>
    <Sidebar />

    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Navbar />

      {/* Title */}
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Stock Summary
      </Typography>

      {/* Stat Card Grid inside a white container */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, maxWidth: 500 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StatCard title="Total Items" value="100" color="blue" />
          </Grid>
          <Grid item xs={6}>
            <StatCard title="Out of stock Items" value="20" color="red" />
          </Grid>
          <Grid item xs={6}>
            <StatCard title="In stock Items" value="20" color="green" />
          </Grid>
          <Grid item xs={6}>
            <StatCard title="Low Stock Items" value="20" color="orange" />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  </Box>
);

export default Dashboard;
