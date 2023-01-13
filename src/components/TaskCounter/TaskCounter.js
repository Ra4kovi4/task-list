import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { selectTaskCounter } from "../../redux/selectors";

export const TaskCounter = () => {
	const count = useSelector(selectTaskCounter);

	return (
		<div>
			<p className={css.text}>Active: {count.active}</p>
			<p className={css.text}>Completed: {count.completed}</p>
		</div>
	);
};
