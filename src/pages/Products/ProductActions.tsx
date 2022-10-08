import { IoBagAdd, IoHeartSharp } from 'react-icons/io5';
import { ButtonComponent } from '@/components/';
import { classes } from '@/components/buttons';

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
        Icon={<IoBagAdd />}
        value='Add To Bag'
        onClick={actions[0]}
        className={classes.default}
      />

      <ButtonComponent
        Icon={<IoHeartSharp />}
        value='Add To Favorites'
        onClick={actions[1]}
        className={classes.default}
      />
    </div>
  );
};
