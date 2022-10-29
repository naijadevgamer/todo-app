import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ReactComponent as CrossIcon } from "../images/icon-cross.svg";
import { ReactComponent as CheckIcon } from "../images/icon-check.svg";
import { ReactComponent as EmptyIcon } from "../images/icon-empty.svg";

const Tasks = ({ tasks, setTask, all, setAll, isEmpty, filter }) => {
  // handle delete task item
  const handleDelete = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
    setAll(all.filter((task) => task.id !== id));
  };

  // handle toggle completed
  const handleToggleCompleted = (id) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
    setAll(
      all.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const [reorderedItems] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderedItems);
    setTask(tasks);
  };

  return (
    <>
      {isEmpty === false ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="tasks"
              >
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="task"
                      >
                        <div
                          className={`task__circle ${
                            task.completed ? "task__completed" : ""
                          }`}
                          onClick={() => handleToggleCompleted(task.id)}
                        >
                          {task.completed ? <CheckIcon /> : ""}
                        </div>
                        <div className="task__circle-hover"></div>
                        <div
                          className={`task__item ${
                            task.completed ? "task__item-checked" : ""
                          }`}
                        >
                          {task.value}
                          <div
                            className="task__remove"
                            onClick={() => handleDelete(task.id)}
                          >
                            <CrossIcon className="task__remove-icon" />
                          </div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <ul className="tasks">
          <li className="task__empty">
            <EmptyIcon className="task__empty-icon" />
            <span className="task__empty-text">
              {filter === "all"
                ? "No task found"
                : filter === "active"
                ? "Well done! You have no active task left"
                : "No task is completed yet"}
            </span>
          </li>
        </ul>
      )}
    </>
  );
};
export default Tasks;
