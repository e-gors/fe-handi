import * as React from "react";
import {
  Button,
  CssBaseline,
  Box,
  Container,
  CircularProgress,
} from "@mui/material";
import Http from "../../../utils/Http";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { isAuth } from "../../../utils/helpers";
import { useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import ReeValidate from "ree-validate-18";
import { styles } from "../../../assets/styles/styles";
import { options } from "../../../components/options";

const validator = new ReeValidate.Validator({
  email: "required|email",
  letter: "required",
});

const theme = createTheme();

export default function ContactUs() {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      email: "",
      letter: "",
    },
    errors: validator.errors,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

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
    Http.post("/contact-us", formValues.values)
      .then((res) => {
        if (res.data.code === 200) {

        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        ToastNotification("error", err, options);
      });
  };

  const handleValidate = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
        handleSubmit();
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastNotificationContainer />
      <Container maxWidth="md">
        <CssBaseline />
        <Box>
          <Box component="form">
            <FormField
              variant="standard"
              required
              name="email"
              errors={formValues.errors}
              onChange={handleChange}
              value={formValues.values.email}
              size="small"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              InputProps={{
                style: {
                  background: "rgba(255, 255, 255, 0.5)",
                  color: "black",
                },
              }}
            />
            <FormField
              variant="standard"
              multiline
              required
              name="letter"
              errors={formValues.errors}
              value={formValues.values.letter}
              onChange={handleChange}
              size="small"
              margin="normal"
              fullWidth
              label="Message"
              id="letter"
              autoComplete="letter"
              InputProps={{
                style: {
                  background: "rgba(255, 255, 255, 0.5)",
                  coor: "black",
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={styles.customBlueButton}
              onClick={handleValidate}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Submit"}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
