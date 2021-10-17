// fallback from typed-css-modules-loader
declare module '*.less' {
    interface IClassNames {
      [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
  }

declare enum ActionType {
    CHECK_EXAMPLES = 'checkExamples',
    UPLOAD = "upload",
    WRITE_TEXT = "writeText",
    PUBLISH = "publish",
    TASK_SUCCESS = "taskSuccess"
};