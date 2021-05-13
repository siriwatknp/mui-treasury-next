import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";

import MailOutlined from "@material-ui/icons/MailOutlined";

export default {
  title: "Material-UI/Select",
} as Meta;

export const SelectField: Story = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <TextField
        label="Label"
        size="small"
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        helperText="This is a helper text"
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
      <br />
      <br />
      <TextField
        label="Label"
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        helperText="This is a helper text"
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
    </>
  );
};

export const SelectError: Story = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <TextField
        label="Label"
        size="small"
        error
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        helperText="This is a helper text"
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
      <br />
      <br />
      <TextField
        label="Label"
        error
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        helperText="This is a helper text"
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
    </>
  );
};

export const SelectIcon: Story = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <TextField
        label="Label"
        size="small"
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
        margin="dense"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
      <TextField
        label="Label"
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
        margin="dense"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        sx={{ ml: 2 }}
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
      <br />
      <br />
      <TextField
        label="Label"
        size="small"
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
        margin="dense"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
      <TextField
        label="Label"
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
        margin="dense"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        sx={{ ml: 2 }}
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
    </>
  );
};
