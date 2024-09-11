import React from "react";
import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const input = ({
  name,
  label,
  type,
  half,
  handleChange,
  handleShowPassword,
  autoFocus,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        variant="outlined"
        onChange={handleChange}
        autoFocus={autoFocus}
        required
        type={type}
        InputProps={
          name == "password" ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          } : null
        }
      />
    </Grid>
  );
};

export default input;
