"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  Container,
} from "@mui/material";
import { schema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const TOWNSHIPS = [
  { value: "yangon", label: "Yangon" },
  { value: "mawlamyine", label: "Mawlamyine" },
  { value: "mandalay", label: "Mandalay" },
];

const CITYS = [
  { value: "insein", label: "Insein" },
  { value: "mon", label: "Mon" },
  { value: "mandalay", label: "Mandalay" },
];

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      role: "",
    },
  });

  const onSubmit = (formData) => {
    console.log("formData", formData);
    console.log("Name Input Data", formData.name);
    reset();
  };

  return (
    <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        fullWidth
        sx={{ mb: 2 }}
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        fullWidth
        sx={{ mb: 2 }}
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Phone No"
        fullWidth
        sx={{ mb: 2 }}
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        label="Address"
        fullWidth
        sx={{ mb: 2 }}
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
      />

      <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.city}>
        <Controller
          name="city"
          control={control}
          error={!!errors.city}
          render={({ field }) => (
            <Select
              {...field}
              labelId="city-label"
              label="City"
              value={field.value || ""} //Ensure controller value
            >
              {CITYS.map((city, index) => (
                <MenuItem key={index} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <InputLabel id="city-label">City</InputLabel>

        <FormHelperText>{errors.city?.message}</FormHelperText>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.township}>
        <Controller
          name="township"
          control={control}
          error={!!errors.township}
          render={({ field }) => (
            <Select
              {...field}
              labelId="township-label"
              label="Township"
              value={field.value || ""} //Ensure controller value
            >
              {TOWNSHIPS.map((township, index) => (
                <MenuItem key={index} value={township.value}>
                  {township.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <InputLabel id="township-label">Township</InputLabel>

        <FormHelperText>{errors.township?.message}</FormHelperText>
      </FormControl>

      <Button variant="contained" type="submit">
        SUBMIT
      </Button>
    </Box>
  );
}
