import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';

const StatCard = ({ title, value, color }) => (
  <Card variant="outlined" sx={{ borderRadius: 2 }}>
    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar sx={{ bgcolor: color || 'primary.main', mr: 2 }}>
        <InventoryIcon />
      </Avatar>
      <Box>
        <Typography variant="h6" color={color || 'textPrimary'}>
          {value}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default StatCard;
