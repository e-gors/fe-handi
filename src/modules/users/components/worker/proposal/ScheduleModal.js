import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CancelIcon from "@mui/icons-material/Cancel";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ToastNotificationContainer from "../../../../../components/ToastNotificationContainer";
import ToastNotification from "../../../../../components/ToastNotification";
import { options } from "../../../../../components/options";
import Http from "./.././../../../../utils/Http";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../../redux/actions/userActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", md: "60%" },
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
};

const styles = {
  exitIconWrapper: { p: 2, position: "relative" },
  exitIconButton: { position: "absolute", top: 2, right: 2 },
  jobTypeWrapper: {
    display: "flex",
    flexWrap: { xs: "wrap", md: "noWrap" },
    justifyContent: "space-between",
  },
  jobTypeCard: {
    border: "1px solid blue",
    borderRadius: 2,
    p: 1,
    width: { xs: "100%", md: "48%" },
    m: 1,
  },
  card: {
    width: "100%",
    position: "relative",
    backgroundColor: "green",
  },
  input: { position: "absolute", top: 0, right: 0 },
  cardDesWrapper: { display: "flex", alignItems: "center" },
  typeIcon: { fontSize: 36, mr: 1 },
  cardTitle: { fontWeight: "bold", fontSize: 14 },
  cardDescription: { fontSize: 12 },

  buttonWrapper: {
    display: "flex",
    justifyContent: "right",
    mt: 5,
  },
  cancel: {
    mr: 2,
  },
  next: {
    maxWidth: 200,
    background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
    transition: "1s",
    backgroundColor: "green",

    "&:hover": {
      background: `linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)`,
    },
  },
};

const today = dayjs();

function ScheduleModal(props) {
  const { open, handleClose, selectedItem, bid } = props;

  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const [schedule, setSchedule] = React.useState({
    values: {
      type: "Default",
      start_date: "",
      end_date: "",
    },
  });

  const handleChange = (name, value) => {
    setSchedule((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const calculateDates = () => {
    const currentDate = new Date();
    const daysRange = selectedItem?.days;

    // Calculate the next Monday
    const nextMonday = new Date();
    nextMonday.setDate(currentDate.getDate() + (1 + 7 - currentDate.getDay()));
    const startDate =
      schedule.values.type === "Default"
        ? nextMonday
        : schedule.values.start_date;

    if (daysRange) {
      const [startDay, endDay] = daysRange
        .split("-")
        .map((str) => parseInt(str));

      const endDate = dayjs(startDate).add(endDay, "day");

      return {
        startDate: dayjs(startDate),
        endDate: endDate,
      };
    } else {
      return {
        startDate: dayjs(startDate),
        endDate: dayjs(startDate).add(41, "day"),
      };
    }
  };

  const { startDate, endDate } = calculateDates();

  const handleSubmit = (dates) => {
    setLoading(true);
    Http.post(`/choose/proposal/${bid.id}/${selectedItem.id}`, dates)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
          handleClose();
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        ToastNotification("error", err.message, options);
      });
  };

  const handleValidate = (dates) => {
    const startDate = dates.startDate.format("MM", "DD", "YYYY");
    if (!startDate) {
      ToastNotification("error", "Start date is required!", options);
    } else {
      handleSubmit(dates);
    }
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ToastNotificationContainer />
          <Box
            sx={{
              mt: 2,
            }}
          >
            <Box sx={styles.exitIconWrapper}>
              <IconButton onClick={handleClose} sx={styles.exitIconButton}>
                <CancelIcon color="error" />
              </IconButton>
            </Box>
            <Box sx={{ p: 2 }}>
              <Box>
                <Typography>Schedule Type *</Typography>
                <Box sx={styles.jobTypeWrapper}>
                  <Box sx={styles.jobTypeCard}>
                    <Box component="label" htmlFor="default" sx={styles.card}>
                      <input
                        id="default"
                        type="radio"
                        name="type"
                        value="Default"
                        checked={schedule.values.type === "Default"}
                        onChange={(e) => handleChange("type", e.target.value)}
                        style={styles.input}
                      />
                      <Box sx={styles.cardDesWrapper}>
                        <CalendarTodayIcon
                          color="primary"
                          sx={styles.typeIcon}
                        />
                        <Box>
                          <Typography sx={styles.cardTitle}>
                            Default Date
                          </Typography>
                          <Typography sx={styles.cardDescription}>
                            Start your job schedule next week by the Monday!
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={styles.jobTypeCard}>
                    <Box component="label" htmlFor="custom" sx={styles.card}>
                      <input
                        id="custom"
                        type="radio"
                        name="type"
                        value="Custom Date"
                        checked={schedule.values.type === "Custom Date"}
                        onChange={(e) => handleChange("type", e.target.value)}
                        style={styles.input}
                      />
                      <Box sx={styles.cardDesWrapper}>
                        <CalendarMonthIcon
                          color="primary"
                          sx={styles.typeIcon}
                        />
                        <Box>
                          <Typography sx={styles.cardTitle}>
                            Custom Date
                          </Typography>
                          <Typography sx={styles.cardDescription}>
                            You can add custom schedule for your project.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {schedule.values.type === "Default" && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Typography sx={{ mt: 2, mb: 2, fontSize: 13 }}>
                    You will not be able to edit the schedule below.
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "95%" }}>
                      <DatePicker
                        sx={{ width: "95%" }}
                        label="Start Date"
                        value={startDate}
                        disablePast
                        readOnly
                        required
                        name="start_date"
                      />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <DatePicker
                        sx={{ width: "100%" }}
                        label="End Date"
                        value={endDate}
                        disablePast
                        readOnly
                        required
                        name="end_date"
                      />
                    </Box>
                  </Box>
                </LocalizationProvider>
              )}
              {schedule.values.type === "Custom Date" && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Typography sx={{ mt: 2, mb: 2, fontSize: 13 }}>
                    You are required to add a start date for your schedule.
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "95%" }}>
                      <DatePicker
                        sx={{ width: "95%" }}
                        label="Start Date"
                        value={schedule.values.start_date}
                        onChange={(date) => handleChange("start_date", date)}
                        disablePast
                        minDate={today.add(3, "days")}
                        name="start_date"
                        required
                      />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <DatePicker
                        sx={{ width: "100%" }}
                        label="End Date"
                        value={endDate}
                        disablePast
                        readOnly
                        required
                        name="end_date"
                      />
                    </Box>
                  </Box>
                </LocalizationProvider>
              )}

              <Box sx={styles.buttonWrapper}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                  size="small"
                  sx={styles.cancel}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleValidate(calculateDates())}
                  size="small"
                  sx={styles.next}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Submit"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default ScheduleModal;
