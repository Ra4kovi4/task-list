import { statusFilters } from "./constants";
import { createSelector } from "@reduxjs/toolkit";
export const selectTasks = (state) => state.tasks.items;
export const selectLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;
export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleTask = createSelector(
	[selectTasks, selectStatusFilter],
	(tasks, statusFilter) => {
		console.log("Calculating visible tasks. Now memoized!");
		switch (statusFilter) {
			case statusFilters.active:
				return tasks.filter((task) => !task.completed);

			case statusFilters.completed:
				return tasks.filter((task) => task.completed);

			default:
				return tasks;
		}
	}
);

export const selectTaskCounter = createSelector([selectTasks], (tasks) => {
	return tasks.reduce(
		(acc, task) => {
			if (task.completed) {
				acc.completed += 1;
			} else {
				acc.active += 1;
			}
			return acc;
		},
		{ active: 0, completed: 0 }
	);
});
