import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
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
import AddTaskIcon from "@mui/icons-material/AddTask";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

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
    onComplete,
    onRevoked,
    onWithdrawn,
    onCancel,
    onView,
    onAccept,
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
      value = value[key] !== undefined && value[key] !== null ? value[key] : "";
    });

    // Check if the value is an array (multiple locations)
    if (Array.isArray(value)) {
      // Join the locations with a comma
      value = value.join(", ");
    }

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

  const handleAccept = (item) => {
    setSelectedItem(item);
    onAccept && onAccept(item);
  };

  const handleComplete = (item) => {
    setSelectedItem(item);
    onComplete && onComplete(item);
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
  const handleCancel = (item) => {
    setSelectedItem(item);
    onCancel && onCancel(item);
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
              {(onDelete ||
                onComplete ||
                onEdit ||
                onCancel ||
                onView ||
                onRevoked ||
                withNumber) && (
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
              data.map((item, itemIndex) => {
                const accept = item.status === "accept";
                const decline = item.status === "decline";
                const withdrawn = item.status === "withdrawn";
                const complete = item.status === "complete";
                const pending = item.status === "pending";
                const inProgress = item.status === "in progress";

                return (
                  <TableRow key={itemIndex}>
                    {(onDelete ||
                      onEdit ||
                      onCancel ||
                      onView ||
                      onComplete ||
                      onRevoked ||
                      withNumber) && (
                      <TableCell
                        size="small"
                        align="center"
                        sx={{ whiteSpace: "noWrap" }}
                      >
                        {withNumber && itemIndex + 1}
                        {onView && (
                          <Tooltip title="View" arrow>
                            <IconButton
                              size="small"
                              color="primary"
                              onClick={() => handleView(item)}
                            >
                              <VisibilityIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                        {onAccept && pending && (
                          <Tooltip title="Accept" arrow>
                            <IconButton
                              size="small"
                              color="primary"
                              onClick={() => handleAccept(item)}
                            >
                              <CheckCircleOutlineOutlinedIcon
                                xs={{ color: "green" }}
                              />
                            </IconButton>
                          </Tooltip>
                        )}
                        {onCancel && pending && !withdrawn && (
                          <Tooltip title="Decline" arrow>
                            <IconButton
                              size="small"
                              sx={{ color: "gray" }}
                              onClick={() => handleCancel(item)}
                            >
                              <HighlightOffRoundedIcon color="warning" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {onComplete && inProgress && (
                          <Tooltip title="Complete contract?" arrow>
                            <IconButton
                              size="small"
                              color="primary"
                              onClick={() => handleComplete(item)}
                            >
                              <AddTaskIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                        {onRevoked && pending && !decline && (
                          <Tooltip title="Withdrawn" arrow>
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
                          <Tooltip title="Edit" arrow>
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
                          <Tooltip title="Delete" arrow>
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
                        } else if (
                          cellValue === "accepted" ||
                          cellValue === "in progress" ||
                          cellValue === "posted"
                        ) {
                          cellColor = "green";
                        } else if (cellValue === "completed") {
                          cellColor = "blue";
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
                );
              })}
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
