import { useSelector } from "react-redux";

import { selectVisibleTask } from "../../redux/selectors";

import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

export const TaskList = () => {
	// Получаем массив задач из состояния Redux
	const tasks = useSelector(selectVisibleTask);

	// Вычисляем массив задач которые необходимо отображать в интерфейсе

	console.log(tasks);
	return (
		<>
			<ul className={css.list}>
				{tasks.map((task) => (
					<li className={css.listItem} key={task.id}>
						<Task task={task} />
					</li>
				))}
			</ul>
		</>
	);
};
