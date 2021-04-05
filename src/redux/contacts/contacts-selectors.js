import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;

export const getLoading = (state) => state.contacts.loading;

export const getFilter = (state) => state.contacts.filter;

// ===== Мемоизация
export const getContactListFilter = createSelector(
  [getFilter, getContacts],
  (filter, items) => {
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// ==== До
// export const getContactListFilter = (state) => {
//   const filter = getFilter(state);
//   const items = getContacts(state);

//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
