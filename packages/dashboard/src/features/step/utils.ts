import { StepAction } from "@teendeer/types";

export const getStepActionName = (type: string) => {
  switch (type) {
    case StepAction.CHECK_EXAMPLES:
      return 'Посмотреть примеры';
    case StepAction.UPLOAD:
      return 'Загрузить файл';
    case StepAction.WRITE_TEXT:
      return 'Написать текст';
    case StepAction.PUBLISH:
      return 'Выбор времени';
    case StepAction.TASK_SUCCESS:
      return 'Успешное выполнение';
    default:
      return 'Неизвестно';
  }
};