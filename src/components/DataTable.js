import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import React, { memo, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function DataTable(props) {
  const {
    data = [],
    columns = [],
    onChangePage,
    rowsPerPage,
    onRowsChangePage,
    withPagination = false,
    withNumber,
    onDelete,
    onEdit,
    loading,
    ...rest
  } = props;

  const [selectedItem, setSelectedItem] = useState({});

  const getCellValue = (item, col) => {
    const keys = (col.name && col.name.split(".")) || [];

    if (keys.length === 0) {
      return "";
    }

    let value = item;

    keys.forEach((key) => {
      value =
        value[key] !== undefined &&
        value[key] !== null &&
        col.name !== "qrcode_url"
          ? value[key]
          : "";
    });

    return value;
  };

  const handleChangePage = (event, newPage) => {
    onChangePage && onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    onRowsChangePage && onRowsChangePage(event.target.value);
  };

  const paginationProps = {
    rowsPerPageOptions: [25, 50, 100, 150, 250],
    component: "div",
    count: 1,
    rowsPerPage: 25,
    page: 1,
    ...rest,
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    onEdit && onEdit(item);
  };
  const handleDelete = (item) => {
    setSelectedItem(item);
    onDelete && onDelete(item);
  };

  return (
    <Box {...rest} sx={{ border: "1px solid #BEBEBE", boxShadow: 10 }}>
      <TableContainer>
        <Table stickyHeader>
          <TableHead
            sx={{
              "& th": {
                color: "black",
                backgroundColor: "#E3E4E9",
                fontWeight: "bold",
              },
            }}
          >
            <TableRow>
              {(onDelete || onEdit || withNumber) && (
                <TableCell size="small" align="center">
                  #
                </TableCell>
              )}
              {columns.map((column, index) => (
                <TableCell
                  size="small"
                  key={index}
                  sx={{ whiteSpace: "noWrap" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading &&
              data.map((item, itemIndex) => (
                <TableRow key={itemIndex}>
                  {(onDelete || onEdit || withNumber) && (
                    <TableCell size="small" align="center">
                      {withNumber && itemIndex + 1}
                      {onEdit && (
                        <IconButton
                          size="small"
                          sx={{ color: "#00c853" }}
                          onClick={() => handleEdit(item)}
                        >
                          <EditIcon />
                        </IconButton>
                      )}
                      {onDelete && (
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDelete(item)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  )}

                  {columns.map((col, colIndex) => (
                    <TableCell size="small" key={colIndex}>
                      {col.customBodyRender
                        ? col.customBodyRender(
                            getCellValue(item, col),
                            item,
                            colIndex,
                            itemIndex
                          )
                        : getCellValue(item, col)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {!loading && data.length === 0 && (
          <Typography align="center">No item(s) at the moment</Typography>
        )}
      </TableContainer>
      {withPagination && (
        <TablePagination
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          {...paginationProps}
        />
      )}
      {loading && (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      )}
    </Box>
  );
}

export default memo(DataTable);
