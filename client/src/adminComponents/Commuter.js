import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';


const Commuter = () => {

  const dataFields = [
    { field: "id", headerName: "User ID", width: 150 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "username", headerName: "Username", width: 200 },
  ]

  const [commuter, setCommuter] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  const handleDelete = (id) => {
    setCommuter(commuter.filter((commuters) => commuters.id !== id));
    fetch(`/commuters${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => handleDelete(id))
  }

  useEffect(() => {
    fetch("/commuters")
      .then((response) => response.json())
      .then((data) => setCommuter(data));
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (commuter) => {
        return (
          <div>
            <button
              className='deleteButton'
              onClick={() => handleDelete(commuter.id)}
            >
              Delete
            </button>
          </div>
        )
      }
    }
  ]

  return (
    <div>
      <h1>Commuter</h1>
      <Box sx={{height:400, width:'100%'}}>
        <DataGrid
        rows={commuter}
        columns={dataFields.concat(actionColumn)}
        pageSize={pageSize}
        rowsPerPageOptions={[8,5,10]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        checkboxSelection
        disableSelectionOnClick
         />
        {/* < DataGrid
        rows={commuter}
        pageSize={pageSize}
        rowsPerPageOptions={[8,5,10]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        columns={dataFields.concat(actionColumn)}
        /> */}
      </Box>
    </div>
  )
}

export default Commuter