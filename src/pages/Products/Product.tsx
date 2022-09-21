interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const Product = ({ children }: Props) => {
  return <div className='flex flex-col mt-6 p-2 w-4/6 shadow-leever-shadow rounded-lg'>{children}</div>;
};
