export const SearchModal = ({ data = [], loading, query }) => {
  // console.log(data, loading);

  return (
    <div
      className={`h-3 w-full ml-12 z-30 ${
        query?.length >= 3 ? 'opacity-1' : 'opacity-0'
      }`}
    >
      <ul className='flex flex-col border-2'>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className='flex mx-3 py-1'
            >
              <img
                src={item.thumbnail}
                className='h-6 w-6 mx-3'
              />
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
