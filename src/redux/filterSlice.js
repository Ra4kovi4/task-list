import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
const filtersInitialState = {
	status: statusFilters.all,
};
export const filtersSlice = createSlice({
	name: "filters",
	initialState: filtersInitialState,
	reducers: {
		setStatusFilter(state, action) {
			// ✅ Immer заменит это на операцию обновления
			state.status = action.payload;
		},
	},
});
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
