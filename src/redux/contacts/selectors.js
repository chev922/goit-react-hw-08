import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/selectors";

export const selectItems = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectItems, selectNameFilter],
    (contacts, textFilter) => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(textFilter.toLowerCase())
        );
    }
);