import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import Heading from "./components/Heading";
import formData from "./DynamicForm";
import { createYupSchema } from "./lib/createSchema";
import * as yup from "yup";
import { useState } from "react";

function App() {
  const [personDetails, setPersonDetails] = useState(null);
  const initialValues = {};
  formData.forEach((item) => {
    initialValues[item.id] = item.value || "";
  });
  const yepSchema = formData.reduce(createYupSchema, {});
  const validateSchema = yup.object().shape(yepSchema);

  return (
    <Box p={4} display={"flex"}>
      <Stack
        direction={"row"}
        sx={{ flexDirection: { xs: "column", sm: "row" }, flex: 1 }}
        gap={4}
      >
        <Box sx={{ flex: 1 }}>
          <Stack rowGap={4}>
            <Heading label={"Form"} />
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                setPersonDetails(values);
              }}
              validationSchema={validateSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                resetForm,
              }) => {
                return (
                  <form
                    onSubmit={handleSubmit}
                    onReset={() => {
                      resetForm();
                      setPersonDetails(null);
                    }}
                  >
                    {formData.map((item, index) => {
                      switch (item.type) {
                        case "text":
                        case "number":
                          return (
                            <TextField
                              {...item}
                              name={item.id}
                              defaultValue=""
                              margin="normal"
                              onChange={handleChange}
                              fullWidth
                              error={
                                touched[item.id] && Boolean(errors[item.id])
                              }
                              helperText={touched[item.id] && errors[item.id]}
                            />
                          );
                        case "radio":
                          return (
                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label">
                                {item.label}
                              </FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="male"
                                name={item.id}
                                onChange={handleChange}
                              >
                                {item.options.map((option) => (
                                  <FormControlLabel
                                    {...option}
                                    control={<Radio />}
                                  />
                                ))}
                              </RadioGroup>
                            </FormControl>
                          );
                        case "select":
                          return (
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                {item.label}
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values[item.id]}
                                label={item.label}
                                onChange={handleChange(item.id)}
                              >
                                {item.options.map((option) => (
                                  <MenuItem value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          );
                        default:
                          return <div></div>;
                      }
                    })}
                    <Box
                      sx={{
                        flex: 1,
                        justifyContent: "center",
                        p: 4,
                        textAlign: "center",
                      }}
                    >
                      <Button variant="outlined" type="submit">
                        Submit
                      </Button>
                      <Button variant="outlined" type="reset">
                        Reset
                      </Button>
                    </Box>
                  </form>
                );
              }}
            </Formik>
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Heading label={"Preview"} />
          <Box sx={{ p: 4 }}>
            {personDetails &&
              formData.map((field, index) => (
                <Stack direction={"row"} alignItems="center">
                  <Typography sx={{ fontSize: 18 }}>
                    {field.label} :{" "}
                  </Typography>
                  <Typography>{personDetails[field.id]} </Typography>
                </Stack>
              ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
