import { IoCardOutline } from 'react-icons/io5';

import { ActionButtonWithIcon } from '@/components/buttons/';
import { InputComponent } from '@/components/inputs/';
import { LeftArrow } from '@/components/navigation/';

export const PaymentScreen = () => {
  return (
    <>
      <LeftArrow />

      <h2 className='flex justify-center my-10 text-2xl'>Add Your Info:</h2>

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
          Icon={IoCardOutline}
        />
      </form>
    </>
  );
};
