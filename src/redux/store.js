import { configureStore } from "@reduxjs/toolkit";

import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filterSlice";
//Код файла создания стора импортирует и использует корневой редюсер.

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		filters: filtersReducer,
	},
});
