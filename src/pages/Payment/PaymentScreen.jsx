import { IoCardOutline } from 'react-icons/io5';

import { LeftArrow } from '../UI/LeftArrow';
import { InputComponent } from '../UI/InputComponent';
import { ActionButtonWithIcon } from '../UI/ActionButtonWithIcon';

export const PaymentScreen = () => {
  return (
    <>
      <LeftArrow />

      <h2 className='flex justify-center my-10 text-2xl'>
        Add Your Info:
      </h2>

      <form className='flex flex-col items-center'>
        <InputComponent
          placeholder='Your Name'
          type='text'
        />
        <InputComponent
          placeholder='Email Address'
          type='email'
        />
        <InputComponent
          placeholder='Billing Address'
          type='text'
        />

        <ActionButtonWithIcon
          value='Pay'
          icon={<IoCardOutline />}
        />
      </form>
    </>
  );
};
