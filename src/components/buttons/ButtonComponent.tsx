import { ButtonClass } from './classes';

interface Props {
  Icon?: JSX.Element;
  value?: string;
  className: ButtonClass;
  onClick: () => void;
}

export const ButtonComponent = ({ Icon, value, className, onClick }: Props) => {
  const buttonWithValue = (
    <button
      className={className.button}
      onClick={onClick}
    >
      <span className={className.value}>{value}</span>
      <i className={className.icon}>{Icon}</i>
    </button>
  );

  return buttonWithValue;
};
