import React, { useState, useEffect } from "react";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./adminSubscription.scss";

const AdminSubscription = () => {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    userId: "",
    planName: "",
    amount: "",
    profitPercent: "",
    duration: "",
    status: "",
    startDate: null,
    endDate: null,
  });

  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const thisYear = new Date().getFullYear();

  const StatusData = ["Active", "Inactive"];
  const PlansData = ["Basic", "Standard", "Premium"];
  const AmountData = [5000, 7500, 10000];
  const DurationData = [30];
  const ProfitPercentData = [2.5, 5, 7.5];

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

  const handleDateChange = (name, value) => {
    setForm({ ...form, [name]: value ? value.toISOString() : null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/subscribe/create",
        form
      );

      setSubscriptionMessage("✅ Subscription successful");
    } catch (err) {
      setSubscriptionMessage("❌ Subscription failed. Please try again.");
    }
  };

  return (
    <div className="adminSubscription">
      <form onSubmit={handleSubmit}>
        <h1>Manage Subscriptions</h1>

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

        {/* PLAN & AMOUNT */}
        <div className="row">
          <FormControl fullWidth >
            <InputLabel className="input">Select Plan</InputLabel>
            <Select
              name="planName"
              value={form.planName}
              onChange={handleChange}
              label="Select Plan"
              className="select"

            >
              {PlansData.map((plan, index) => (
                <MenuItem className="menu" key={index} value={plan}>
                  {plan}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth >
            <InputLabel>Amount</InputLabel>
            <Select
              name="amount"
              value={form.amount}
              onChange={handleChange}
              label="Amount"
            >
              {AmountData.map((amount, index) => (
                <MenuItem key={index} value={amount}>
                  $ {amount}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* PROFIT & DURATION */}
        <div className="row">
          <FormControl fullWidth>
            <InputLabel>Profit %</InputLabel>
            <Select
              name="profitPercent"
              value={form.profitPercent}
              onChange={handleChange}
              label="Profit %"
            >
              {ProfitPercentData.map((percent, index) => (
                <MenuItem key={index} value={percent}>
                  {percent}%
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Duration</InputLabel>
            <Select
              name="duration"
              value={form.duration}
              onChange={handleChange}
              label="Duration"
            >
              {DurationData.map((days, index) => (
                <MenuItem key={index} value={days}>
                  {days} days
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* DATES */}
        <div className="row">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              value={form.startDate ? dayjs(form.startDate) : null}
              onChange={(value) => handleDateChange("startDate", value)}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              value={form.endDate ? dayjs(form.endDate) : null}
              onChange={(value) => handleDateChange("endDate", value)}
            />
          </LocalizationProvider>
        </div>

        {/* STATUS */}
        <FormControl fullWidth >
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

        <button className="button" type="submit">Subscribe</button>

        <p className={subscriptionMessage.includes("✅") ? "success" : "fail" } >{subscriptionMessage} </p>

        <p>&copy; {thisYear} Lyft Fx. All Rights Reserved.</p>
      </form>
    </div>
  );
};

export default AdminSubscription;
