import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => (
  <Box sx={{ width: 200, backgroundColor: '#008CFF', color: 'white', height: '100vh', p: 2 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
      <Avatar sx={{ width: 60, height: 60, mb: 1 }} src="/your-store-logo.png" />
      <Typography variant="subtitle1" fontWeight="bold">AAHTHAN STORES</Typography>
    </Box>
    <List>
      <ListItem button>
        <ListItemIcon><AccountCircleIcon sx={{ color: 'white' }} /></ListItemIcon>
        <ListItemText primary="Accounts" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><LayersIcon sx={{ color: 'white' }} /></ListItemIcon>
        <ListItemText primary="Master" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><InventoryIcon sx={{ color: 'white' }} /></ListItemIcon>
        <ListItemText primary="Inventory" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><AssessmentIcon sx={{ color: 'white' }} /></ListItemIcon>
        <ListItemText primary="Report" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><SettingsIcon sx={{ color: 'white' }} /></ListItemIcon>
        <ListItemText primary="Utilities" />
      </ListItem>
    </List>
  </Box>
);

export default Sidebar;
