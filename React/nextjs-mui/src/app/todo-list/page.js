"use client";

import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";

export default function TodoListPage() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (!taskInput.trim()) return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = taskInput;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, taskInput]);
    }
    setTaskInput("");
  };

  const handleEdit = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    if (editIndex === index) {
      setTaskInput("");
      setEditIndex(null);
    }
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 600, margin: "auto", mt: 5 }}>
      <h2>To-Do List</h2>
      <div style={{ display: "flex", gap: '1rem', marginBottom: "1rem" }}>
        <TextField
          fullWidth
          label="Task Name"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        {/* <IconButton variant="contained" color="success" onClick={handleAddOrUpdate}>
          {editIndex !== null ? <UpdateIcon/> :<AddIcon/>}
          
        </IconButton> */}

        <Button variant="contained" color="success" onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update": "Add"}
          
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {/* <TableCell>Task</TableCell>   */}
              <TableCell align="left">Task</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task}</TableCell>
                <TableCell align="right">
                  {/* <IconButton
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(index)}
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton> */}

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(index)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>

                  {/* <IconButton
                    variant="contained"
                    color="error"
                    onClick={() => handleRemove(index)}
                  >
                    <DeleteIcon />
                  </IconButton> */}

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleRemove(index)}
                  >
                   Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
