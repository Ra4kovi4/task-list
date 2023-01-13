import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { useEffect } from "react";
import { selectLoading, selectError } from "./redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations";

export const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);
	// return (
	// 	<div>
	// 		{isLoading && <b>Loading tasks...</b>}
	// 		{error && <b>{error}</b>}
	// 		<p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
	// 	</div>
	// );
	return (
		<Layout>
			<AppBar />
			<TaskForm />
			{isLoading && !error && <b>Request in progress...</b>}
			<TaskList />
		</Layout>
	);
};
