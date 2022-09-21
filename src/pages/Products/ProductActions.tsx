import { IoBagAdd, IoHeartSharp } from 'react-icons/io5';
import { ButtonComponent } from '../../components/buttons/ButtonComponent';

type onClick = {
  onClick: () => void;
};

interface Props {
  actions: any[];
}

export const ProductActions = ({ actions }: Props) => {
  return (
    <div className='flex flex-col my-3 mt-12 px-2'>
      <ButtonComponent
        Icon={IoBagAdd}
        onClick={actions[0]}
      />

      <ButtonComponent
        Icon={IoHeartSharp}
        value='Add to Favorites'
        onClick={actions[1]}
      />
    </div>
  );
};
