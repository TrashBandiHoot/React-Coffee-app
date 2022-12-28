import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { CoffeeForm } from '../CoffeeForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  { field: 'name', headerName: 'Coffee Name', flex: 1 },
  { field: 'cream', headerName: 'Cream', flex: 1 },
  { field: 'added_flavor', headerName: 'Extra Ingredients', flex: 2 },
];

interface gridData {
  data: {
    id?: string
  }
}

export const DataTable = () => {

  let { contactData, getData } = useGetData();
  let [ open, setOpen ] = useState(false);
  let [ gridData, setData ] = useState<gridData>({data: {}});
  const [ selectionModel, setSelectionModel ] = useState<any>([]);

  let handleOpen = () => {
    setOpen(true)
  };

  let handleClose = () => {
    setOpen(false)
  };

  let deleteData = () => {
    server_calls.delete(selectionModel);
    getData();
    setTimeout( () => {window.location.reload(); }, 1000)
  }
  console.log('is broke here')
  console.log(gridData.data.id!);
  console.log(`testing for data ${contactData}`);

  return (
    <div style = {{ height: 400, width: '100%' }}>
      <h2>My Coffee</h2>

      <DataGrid rows={contactData} columns = { columns } pageSize = { 5 } rowsPerPageOptions={ [5, 10, 15] } checkboxSelection = {true}
      onSelectionModelChange = { (item) => {
        setSelectionModel(item)
      }} />

      <Button onClick={handleOpen}>Update</Button>
      <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

      {/* Dialog pop-up */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Coffee {selectionModel}</DialogTitle>
        <DialogContent>
          <DialogContentText>Update Coffee</DialogContentText>
            <CoffeeForm id={selectionModel!} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Done</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}
