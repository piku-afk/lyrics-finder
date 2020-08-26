import React from 'react';
import { TableRow, TableCell, Typography, Avatar, Grid, TableHead, TableBody, makeStyles, Table, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  parentPaper: {
    backgroundColor: '#414141',
    marginTop: 10
  },
  tableHead: {
    padding: '20px 16px',
    borderTop: '1px solid #ca3e47'
  },
  tableCell: {
    borderBottom: '1px solid #525252'
  },
  h2: {
    fontSize: 22,
    color: '#ca3e47'
  }
});

const link = {
  color: 'inherit',
  textDecoration: 'none'
}



function getTableRow(classes, track, index, song) {

  const imgSrc = song ? 
  `https://api.napster.com/imageserver/v2/albums/${track.albumId}/images/170x170.jpg` : 
  `https://api.napster.com/imageserver/v2/artists/${track.id}/images/150x100.jpg`;

  return (
    <TableRow key={track.id} >
      <TableCell classes={{
        root: classes.tableCell
      }} >
        <Link style={link} to={song ? `/track/${track.id}` : `/artist/${track.id}`} >
          <Grid container spacing={2} alignItems='center' >
            <Grid item xs={1}>
              {index + 1}
            </Grid>
            <Grid item xs={2}  >
              <Avatar variant={song ? 'square' : 'circle'} src={imgSrc} alt={track.name} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant='body1' >
                {track.name}
              </Typography>
            </Grid>
          </Grid>
        </Link>
      </TableCell>
    </TableRow>
  );
}

export default function GetTable({title, data, song}) {

  const classes = useStyles();

  return (

      <Paper classes={{
        elevation1: classes.parentPaper
      }} elevation={1} square>
        <Table size='small' >
          <TableHead>
            <TableRow>
              <TableCell variant='head' classes={{
                head: classes.tableHead
              }}>
                <Typography variant='h2' classes={{
                  h2: classes.h2
                }} >
                  {title}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
    
          <TableBody>
            {data.map((item, index) => getTableRow(classes, item, index, song))}
          </TableBody>
        </Table>
      </Paper>
  );
};