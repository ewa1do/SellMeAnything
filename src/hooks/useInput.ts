import { useState } from 'react';

export const useInput = (initialState = {}) => {
  const [inputState, setInputState] = useState({});

  const handleInputChange = ({ target }) => {
    setInputState({
      ...inputState,
      [target.name]: target.value,
    });
  };

  const resetInput = () => setInputState(initialState);

  return { inputState, handleInputChange, resetInput };
};
