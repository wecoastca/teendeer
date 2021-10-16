// fallback from typed-css-modules-loader
declare module '*.less' {
    interface IClassNames {
      [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
  }