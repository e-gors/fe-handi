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
  Tooltip,
  Typography,
} from "@mui/material";

import React, { memo, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

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
    onRevoked,
    onView,
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
    rowsPerPageOptions: [10, 20, 50, 100, 250],
    component: "div",
    count: 1,
    rowsPerPage: 10,
    page: 1,
    ...rest,
  };

  const handleView = (item) => {
    setSelectedItem(item);
    onView && onView(item);
  };
  const handleRevoked = (item) => {
    setSelectedItem(item);
    onRevoked && onRevoked(item);
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
                    <TableCell
                      size="small"
                      align="center"
                      sx={{ whiteSpace: "noWrap" }}
                    >
                      {withNumber && itemIndex + 1}
                      {onView && (
                        <Tooltip title="View Proposal" arrow>
                          <IconButton
                            size="small"
                            color="primary"
                            onClick={() => handleView(item)}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {onRevoked && (
                        <Tooltip title="Cancel Proposal" arrow>
                          <IconButton
                            size="small"
                            sx={{ color: "gray" }}
                            onClick={() => handleRevoked(item)}
                          >
                            <DeleteSweepIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {onEdit && (
                        <Tooltip title="Edit Proposal" arrow>
                          <IconButton
                            size="small"
                            sx={{ color: "#00c853" }}
                            onClick={() => handleEdit(item)}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {onDelete && (
                        <Tooltip title="Delete Proposal" arrow>
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => handleDelete(item)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </TableCell>
                  )}

                  {columns.map((col, colIndex) => {
                    const cellValue = getCellValue(item, col);
                    const isStatusColumn = col.name === "status"; // Assuming "status" is the column identifier

                    let cellColor = "inherit";
                    if (isStatusColumn) {
                      if (cellValue === "pending") {
                        cellColor = "red";
                      } else if (cellValue === "accepted") {
                        cellColor = "green";
                      } else if (cellValue === "declined") {
                        cellColor = "orange";
                      } else if (cellValue === "withdrawn") {
                        cellColor = "gray";
                      }
                    }
                    return (
                      <TableCell
                        size="small"
                        key={`${colIndex}-${col.name}`}
                        sx={{
                          whiteSpace: "noWrap",
                          fontWeight: isStatusColumn ? "bold" : "normal",
                          color: cellColor,
                        }}
                      >
                        {col.customBodyRender
                          ? col.customBodyRender(
                              cellValue,
                              item,
                              colIndex,
                              itemIndex
                            )
                          : cellValue}
                      </TableCell>
                    );
                  })}
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
