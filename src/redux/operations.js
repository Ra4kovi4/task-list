import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk(
	"tasks/fetchAll",
	// Используем символ подчеркивания как имя первого параметра,
	// потому что в этой операции он нам не нужен
	async (_, thunkAPI) => {
		try {
			const response = await axios("/tasks");
			// При успешном запросе возвращаем промис с данными

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addTask = createAsyncThunk(
	"task/addTask",
	async (text, thunkAPI) => {
		try {
			const response = await axios.post("/tasks", { text });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteTask = createAsyncThunk(
	"task/deleteTask",
	async (taskId, thunkAPI) => {
		try {
			const response = await axios.delete(`/tasks/${taskId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const toggleCompleted = createAsyncThunk(
	"tasks/toggleCompleted",
	async (task, thunkApi) => {
		try {
			const response = await axios.put(`/tasks/${task.id}`, {
				completed: !task.completed,
			});
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
