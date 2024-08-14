import React, { useState } from 'react';
import { TextField, Tooltip, InputAdornment, Box } from '@mui/material';

export const ColorPickerField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  description: string;
}> = ({ label, value, onChange, description }) => {
  const [colorValue, setColorValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setColorValue(newValue);

    // Validate full hex color code before triggering onChange
    if (/^#[0-9A-Fa-f]{6}$/i.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <Tooltip title={description} arrow>
      <TextField
        label={label}
        variant="outlined"
        value={colorValue}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: /^#[0-9A-Fa-f]{6}$/i.test(colorValue) ? colorValue : '#ffffff',
                  border: '1px solid #ccc',
                  marginRight: '8px',
                }}
              />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ shrink: true }}
        sx={{ minWidth: '300px', marginBottom: 2 }}
      />
    </Tooltip>
  );
};

export default ColorPickerField;