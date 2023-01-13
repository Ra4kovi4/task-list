import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const hadlePending = (state) => {
	state.isLoading = true;
};
const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};
export const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		isLoading: false,
		items: [],
		error: null,
	},
	// Добавляем обработку внешних экшенов
	extraReducers: {
		[fetchTasks.pending]: hadlePending,
		[addTask.pending]: hadlePending,
		[deleteTask.pending]: hadlePending,
		[toggleCompleted.pending]: hadlePending,
		[fetchTasks.rejected]: handleRejected,
		[addTask.rejected]: handleRejected,
		[deleteTask.rejected]: handleRejected,
		[toggleCompleted.pending]: handleRejected,

		[fetchTasks.fulfilled](state, action) {
			state.isLoading = false;
			state.items = action.payload;
			state.error = null;
		},

		[addTask.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.items.push(action.payload);
		},

		[deleteTask.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			const index = state.items.findIndex(
				(task) => task.id === action.payload.id
			);
			state.items.splice(index, 1);
		},

		[toggleCompleted.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			const index = state.items.findIndex(
				(task) => task.id === action.payload.id
			);
			state.items.splice(index, 1, action.payload);
		},
	},
});

export const tasksReducer = tasksSlice.reducer;
