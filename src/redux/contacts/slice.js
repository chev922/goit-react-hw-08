import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(addContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
                state.items.push(action.payload);
            })
            .addCase(addContacts.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
                const index = state.items.findIndex(
                    (task) => task.id === action.payload.id
                );
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.isLoading = false;
                state.error = false;
            });
    },
});

export default contactsSlice.reducer;