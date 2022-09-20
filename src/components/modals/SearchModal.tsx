import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export const SearchModal = ({ data = [], query }) => {
  return (
    <div
      className={`h-3 w-full ml-12 z-30 ${
        query?.length >= 3 ? 'opacity-1' : 'opacity-0'
      }`}
    >
      <ul className='flex flex-col border-2 py-2 bg-slate-50'>
        {data.map((item) => {
          return (
            <Link
              to={`/product/${item.id}`}
              key={uuid()}
            >
              <li className='flex py-1 hover:bg-slate-200'>
                <img
                  src={item.thumbnail}
                  className='h-6 w-6 mx-3'
                />
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
