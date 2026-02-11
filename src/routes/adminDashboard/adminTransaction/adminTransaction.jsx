import React, { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';

import axios from "axios";
import "./adminTransaction.scss";

const AdminTransaction = () => {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    userId: "",
    type: "",
    amount: "",
    status: "",
    date: null,
    time: null,
  });

  const [transactionMessage, setTransactionMessage] = useState("");
  const thisYear = new Date().getFullYear();

  const TypeData = ["Deposit", "Withdrawal", "Profit", "Bonus"];
  const StatusData = ["Success"];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/allUsers/users"
        );
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (value) => {
    setForm({
      ...form,
      date: value ? value.toISOString() : null,
    });
  };

  const handleTimeChange = (value) => {
    setForm({
      ...form,
      time: value ? value.toISOString() : null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/transactions/transaction",
        {
          ...form,
          amount: Number(form.amount),
        }
      );

      setTransactionMessage("✅ Transaction successful");
    } catch (err) {
      setTransactionMessage(
        "❌ Transaction failed. Please try again."
      );
    }
  };

  return (
    <div className="adminTransaction">
      <form onSubmit={handleSubmit}>
        <h1>Manage Transactions</h1>

        {/* USER */}
        <FormControl fullWidth >
          <InputLabel>Select User</InputLabel>
          <Select
            name="userId"
            value={form.userId}
            onChange={handleChange}
            label="Select User"
          >
            {users.map((user) => (
              <MenuItem key={user._id} value={user._id}>
                {user.userName} ({user.email})
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* TYPE + AMOUNT */}
        <div className="row">
          <FormControl fullWidth>
            <InputLabel>Select Type</InputLabel>
            <Select
              name="type"
              value={form.type}
              onChange={handleChange}
              label="Select Type"
            >
              {TypeData.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              type="number"
              placeholder="enter amount"
            />

          

        </div>

        {/* STATUS + DATE + TIME */}
         
          <div className="row">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Day"
              value={form.date ? dayjs(form.date) : null}
              onChange={handleDateChange}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Time"
              value={form.time ? dayjs(form.time) : null}
              onChange={handleTimeChange}
            />
          </LocalizationProvider>

          </div>
            <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                name="status"
                value={form.status}
                onChange={handleChange}
                label="Status"
              >
              {StatusData.map((status, index) => (
                <MenuItem key={index} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          
  

        <button type="submit">Set Transaction</button>

        <p className={transactionMessage.includes("✅") ? "success": "fail"}>
          {transactionMessage}
        </p>

        <p>
          &copy; {thisYear} Lyft FX. All Rights Reserved.
        </p>
      </form>
    </div>
  );
};

export default AdminTransaction;
