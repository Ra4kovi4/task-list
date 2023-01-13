import { statusFilters } from "./constants";
import {
	addTask,
	deleteTask,
	toggleCompleted,
	setStatusFilter,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const tasksInitialState = [
	{ id: 0, text: "Learn HTML and CSS", completed: true },
	{ id: 1, text: "Get good at JavaScript", completed: true },
	{ id: 2, text: "Master React", completed: false },
	{ id: 3, text: "Discover Redux", completed: false },
	{ id: 4, text: "Build amazing apps", completed: false },
];

//Библиотека IMMER (п умолчанию под капотом)
export const tasksReducer = createReducer(tasksInitialState, {
	[addTask]: (state, action) => {
		// ✅ Immer заменит это на операцию обновления
		state.push(action.payload);
	},
	[deleteTask]: (state, action) => {
		// ✅ Immer заменит это на операцию обновления
		const index = state.findIndex((task) => task.id === action.payload);
		state.splice(index, 1);
	},
	[toggleCompleted]: (state, action) => {
		// ✅ Immer заменит это на операцию обновления
		for (const task of state) {
			if (task.id === action.payload) {
				task.completed = !task.completed;
			}
		}
	},
});

// Отвечает только за обновление свойства tasks
// Теперь значением параметра state будет массив задач
// export const tasksReducer = createReducer(tasksInitialState, {
// 	[addTask]: (state, action) => {
// 		return [...state, action.payload];
// 	},
// 	[deleteTask]: (state, action) => {
// 		return state.filter((task) => task.id !== action.payload);
// 	},
// 	[toggleCompleted]: (state, action) => {
// 		return state.map((task) => {
// 			if (task.id !== action.payload) {
// 				return task;
// 			}
// 			return { ...task, completed: !task.completed };
// 		});
// 	},
// });
const filtersInitialState = {
	status: statusFilters.all,
};
export const filtersReducer = createReducer(filtersInitialState, {
	[setStatusFilter]: (state, action) => {
		// ✅ Immer заменит это на операцию обновления
		state.status = action.payload;
	},
});
// 	[setStatusFilter]: (state, action) => {
// Отвечает только за обновление свойства filters
// Теперь значением параметра state будет объект фильтров
// export const filtersReducer = createReducer(filtersInitialState, {
// 	[setStatusFilter]: (state, action) => {
// 		return {
// 			...state,
// 			status: action.payload,
// 		};
// 	},
// });

// Код редюсеров tasksReducer и filtersReducer

// export const rootReducer = (state = {}, action) => {
// 	// Возвращаем объект состояния
// 	return {
// 		// Обоим редюсерам передаем только часть состояния за которую они отвечают
// 		tasks: tasksReducer(state.tasks, action),
// 		filters: filtersReducer(state.filters, action),
// 	};
// };
