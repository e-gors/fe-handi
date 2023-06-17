import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import FormField from "../../../../components/FormField";
import ReeValidate from "ree-validate-18";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch } from "react-redux";
import Http from "../../../../utils/Http";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import { updateUser } from "../../../../redux/actions/userActions";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";

const validator = new ReeValidate.Validator({
  position: "required",
  start_date: "required",
  end_date: "required",
  notes: "required|min:50",
});

function UpdateWorkExperience(props) {
  const { handleClose, onConfirm, expers } = props;

  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      position: "",
      start_date: "",
      end_date: "",
      notes: "",
    },
    errors: validator.errors,
  });

  React.useEffect(() => {
    if (expers) {
      setFormValues((prev) => ({
        ...prev,
        values: {
          position: expers.position,
          start_date: dayjs(expers.start_date),
          end_date: dayjs(expers.end_date),
          notes: expers.notes,
        },
      }));
    }
  }, [expers]);

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = validator;

    validator.validate(name, value).then(() => {
      setFormValues((prev) => ({
        ...prev,
        errors,
      }));
    });
  };
  const handleSubmit = () => {
    setLoading(true);
    Http.post("/experience/add", formValues.values)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          dispatch(updateUser(res.data.user));
          onConfirm();
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

  const handleUpdate = () => {
    setLoading(true);
    Http.post(`/experience/update/${expers.id}`, formValues.values)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          dispatch(updateUser(res.data.user));
          onConfirm();
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

  const handleValidate = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
        if (expers) {
          handleUpdate();
        } else {
          handleSubmit();
        }
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  return (
    <Box>
      <ToastNotificationContainer />
      <Box>
        <Box>
          <Typography>Job Position *</Typography>
          <FormField
            fullWidth
            name="position"
            label="Position"
            value={formValues.values.position}
            errors={formValues.errors}
            onChange={(e) => handleChange("position", e.target.value)}
          />
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Typography sx={{ mt: 2, mb: 2, fontSize: 13 }}>
            Start date is the date you started your work.
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
                value={formValues.values.start_date}
                errors={formValues.errors}
                required
                name="start_date"
                onChange={(date) => handleChange("start_date", date)}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <DatePicker
                sx={{ width: "100%" }}
                label="End Date"
                value={formValues.values.end_date}
                errors={formValues.errors}
                required
                name="end_date"
                onChange={(date) => handleChange("end_date", date)}
              />
            </Box>
          </Box>
        </LocalizationProvider>
        <Box>
          <Typography>Note Position *</Typography>
          <FormField
            multiline
            fullWidth
            name="notes"
            label="Notes"
            value={formValues.values.notes}
            errors={formValues.errors}
            onChange={(e) => handleChange("notes", e.target.value)}
            rows={4}
            placeholder="Do you have any interesting memos to briefly describe this position?"
          />
        </Box>
      </Box>

      <Box
        align="right"
        sx={{ backgroundColor: "#F4F5FB", p: 2, borderRadius: 3, mt: 5 }}
      >
        <Button size="small" variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ ml: 1 }}
          onClick={handleValidate}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "white" }} thickness={5} />
          ) : (
            "Save"
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default UpdateWorkExperience;
