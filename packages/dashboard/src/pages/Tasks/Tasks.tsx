import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import TaskForm from '../../features/task/TaskForm';
import TasksList from '../../features/task/TasksList';

const Tasks = () => {
  return (
    <React.Fragment>
      <AppPageHeader title="Задачи" />
      <TaskForm />
      <TasksList />
    </React.Fragment>
  );
};

export default Tasks;
