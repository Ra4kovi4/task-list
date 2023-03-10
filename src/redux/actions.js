// import { nanoid } from "nanoid";
import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", (text) => {
	return {
		payload: {
			text,
			id: nanoid(),
			complete: false,
		},
	};
});

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");
