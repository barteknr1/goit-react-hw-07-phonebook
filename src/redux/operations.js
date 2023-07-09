import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64a700fa096b3f0fcc80f580.mockapi.io/";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name, number });
            return response.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);