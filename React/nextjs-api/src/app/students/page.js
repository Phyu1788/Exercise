//create table
"use client";

import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function Student() {
  const getStudentList = async () => {
    try {
      const response = await axios.get("/api/students");
      console.log(response.data);
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <Box padding={2}>
      <Stack alignItems={"flex-end"}>
        <Link passHref href="/students/create">
          <Button variant="contained" sx={{ mb: 2 }}>
            ADD STUDENT
          </Button>
        </Link>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>BOD</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Major</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Sweet</TableCell>
              <TableCell>0989898989</TableCell>
              <TableCell>2001.8.8</TableCell>
              <TableCell> U Soe</TableCell>
              <TableCell>23</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>Mawlamyine</TableCell>
              <TableCell>Science</TableCell>
              {/* <TableCell>Action</TableCell> */}
              <TableCell align="center">
                <Link href={"/students/1"} passHref>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </Link>
                <Link href={"/students/1/edit"} passHref>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
