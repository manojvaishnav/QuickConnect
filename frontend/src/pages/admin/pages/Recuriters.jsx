import React from 'react'
import Slidenav from '../components/Slidenav'
import Box from '@mui/material/Box';
import AdminNavbar from '../../../components/AdminNavbar';
import RecuriterTable from '../components/RecuriterTable';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Recuriters = () => {
  return (
    <>
    <AdminNavbar/>
    <Box height={50}/>
    <Box sx={{ display: "flex" }}>
        <Slidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <div className="card">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Recuriters
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        1900
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RecuriterTable />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Recuriters;