import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const Driver = () => {

    const dataFields = [
        { field: 'id', headerName: 'User ID', width: 150 },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'address', headerName: 'Location', width: 150 },
    ]
    const [driver, setDriver] = useState([]);
    const [pageSize, setPageSize] = useState(10);

    const handleDelete = (id) => {
        setDriver(driver.filter((drivers) => drivers.id !== id));
        fetch(`/drivers${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => handleDelete(id))
    }

    useEffect(() => {
        fetch("/drivers")
            .then((response) => response.json())
            .then((data) => setDriver(data));
    }, []);

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (driver) => {
                return (
                    <div>
                        <button
                            className='deleteButton'
                            onClick={() => handleDelete(driver.id)}
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
            <h1>Driver</h1>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={driver}
                    columns={dataFields.concat(actionColumn)}
                    pageSize={pageSize}
                    rowsPerPageOptions={[8, 10, 10]}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    checkboxSelection
                    disableSelectionOnClick
                />

            </Box>
        </div>
    )
}

export default Driver