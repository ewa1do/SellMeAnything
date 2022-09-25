export interface ButtonClass {
  button: string;
  icon?: string;
  value?: string;
}

interface ButtonObj {
  [key: string]: ButtonClass;
}

export const classes: ButtonObj = {
  default: {
    button: 'flex items-center justify-center py-1 min-w-max bg-gray-800 rounded hover:bg-slate-900 duration-300 my-2',
    icon: 'text-slate-200 text-lg',
    value: 'mx-4 text-slate-200',
  },

  rounded: {
    button: 'flex items-center text-xl text-slate-200 bg-slate-700 px-5 py-1 rounded-2xl',
    icon: 'pr-3 text-slate-200 text-lg',
    value: 'px-2',
  },

  incrementDecrement: {
    button: 'text-xl px-2 text-slate-800',
  },
};
