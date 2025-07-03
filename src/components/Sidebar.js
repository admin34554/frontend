import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  Typography
} from '@mui/material';
import {
  AccountBalanceWallet as AccountIcon,
  Inventory as InventoryIcon,
  Assessment as ReportIcon,
  Layers as MasterIcon,
  Settings as UtilityIcon,
  ExpandLess,
  ExpandMore,
  Person as PersonIcon,
  LocalShipping as LorryIcon,
  Business as CompanyIcon,
  Store as ProductIcon,
  People as BrokerIcon,
  MonetizationOn as TaxIcon,
  AccountBalance as AccountsMasterIcon,
  Payment as PaymentIcon,
  Receipt as ReceiptIcon,
  Book as BookIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    accounts: false,
    master: false,
    inventory: false,
    report: false,
    utilities: false,
  });

  const handleToggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#008CFF',
        color: 'white',
        minHeight: '100vh',
        height: '100%',
        p: 2,
        overflowY: 'auto',
        scrollbarWidth: 'none',          // Firefox
        msOverflowStyle: 'none',         // IE and Edge
        '&::-webkit-scrollbar': {
          display: 'none',               // Chrome, Safari
        }
      }}
    >
      {/* Logo + Title */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
        <Avatar
          alt="AAHTHAN STORES"
          src="/logo.png" // 🔁 Replace with your logo path
          sx={{ width: 60, height: 60, mb: 1 }}
        />
        <Typography variant="subtitle1" fontWeight="bold">
          AAHTHAN STORES
        </Typography>
      </Box>

      <List>
        {/* Accounts */}
        <ListItem button onClick={() => handleToggle('accounts')}>
          <ListItemIcon><AccountIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Accounts" />
          {openSections.accounts ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSections.accounts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button><ListItemIcon><BookIcon sx={{ color: 'white' }} /></ListItemIcon><ListItemText primary="Day Book" /></ListItem>
            <ListItem button><ListItemIcon><PaymentIcon sx={{ color: 'white' }} /></ListItemIcon><ListItemText primary="Payment" /></ListItem>
            <ListItem button><ListItemIcon><ReceiptIcon sx={{ color: 'white' }} /></ListItemIcon><ListItemText primary="Receipt" /></ListItem>
            <ListItem button><ListItemIcon><BookIcon sx={{ color: 'white' }} /></ListItemIcon><ListItemText primary="Expenses" /></ListItem>
            <ListItem button><ListItemIcon><BookIcon sx={{ color: 'white' }} /></ListItemIcon><ListItemText primary="Voucher" /></ListItem>
          </List>
        </Collapse>

        {/* Master */}
        <ListItem button onClick={() => handleToggle('master')}>
          <ListItemIcon><MasterIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Master" />
          {openSections.master ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSections.master} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button component={Link} to="/supplier-master">
              <ListItemIcon><PersonIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Supplier Master" />
            </ListItem>
            <ListItem button component={Link} to="/customer-master">
              <ListItemIcon><PersonIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Customer Master" />
            </ListItem>
            <ListItem button component={Link} to="/company-master">
              <ListItemIcon><CompanyIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Company Master" />
            </ListItem>
            <ListItem button component={Link} to="/product-master">
              <ListItemIcon><ProductIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Product Master" />
            </ListItem>
            <ListItem button component={Link} to="/lorry-master">
              <ListItemIcon><LorryIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Lorry Master" />
            </ListItem>
            <ListItem button component={Link} to="/broker-master">
              <ListItemIcon><BrokerIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Broker Master" />
            </ListItem>
            <ListItem button component={Link} to="/tax-master">
              <ListItemIcon><TaxIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Tax Master" />
            </ListItem>
            <ListItem button component={Link} to="/accounts-master">
              <ListItemIcon><AccountsMasterIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Accounts Master" />
            </ListItem>
          </List>
        </Collapse>

        {/* Inventory */}
        <ListItem button onClick={() => handleToggle('inventory')}>
          <ListItemIcon><InventoryIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Inventory" />
          {openSections.inventory ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSections.inventory} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button><ListItemText primary="Purchase Order" /></ListItem>
            <ListItem button><ListItemText primary="Purchase Bill" /></ListItem>
            <ListItem button><ListItemText primary="Goods Receipt" /></ListItem>
            <ListItem button><ListItemText primary="Commission Purchase Bill" /></ListItem>
            <ListItem button><ListItemText primary="Cash Sales" /></ListItem>
            <ListItem button><ListItemText primary="Credit Sales" /></ListItem>
            <ListItem button><ListItemText primary="Delivery Bill" /></ListItem>
            <ListItem button><ListItemText primary="Stock Return" /></ListItem>
            <ListItem button><ListItemText primary="Sales Party" /></ListItem>

          </List>
        </Collapse>

        {/* Report */}
        <ListItem button onClick={() => handleToggle('report')}>
          <ListItemIcon><ReportIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Report" />
          {openSections.report ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSections.report} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button><ListItemText primary="Books" /></ListItem>
            <ListItem button><ListItemText primary="Trial Balance" /></ListItem>
            <ListItem button><ListItemText primary="Bill Wise Breakup" /></ListItem>
            <ListItem button><ListItemText primary="Stock Return" /></ListItem>
            <ListItem button><ListItemText primary="Sales Patty" /></ListItem>
          </List>
        </Collapse>

        {/* Utilities */}
        <ListItem button onClick={() => handleToggle('utilities')}>
          <ListItemIcon><UtilityIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Utilities" />
          {openSections.utilities ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSections.utilities} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button><ListItemText primary="Backup" /></ListItem>
            <ListItem button><ListItemText primary="Grouping" /></ListItem>
            <ListItem button><ListItemText primary="Bill Format" /></ListItem>
            <ListItem button><ListItemText primary="Product Storing" /></ListItem>
            <ListItem button><ListItemText primary="Lorry Storing" /></ListItem>
            <ListItem button><ListItemText primary="Year End" /></ListItem>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default Sidebar;
