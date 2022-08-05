export const MainHeading = ({ title }) => {
  return (
    <div className='flex justify-center my-8'>
      <h2
        className="text-3xl font-medium uppercase relative z-10 
        after:absolute after:-bottom-2 after:right-0 after:-z-10 after:h-0.5 
        after:w-full after:-translate-y-1 after:bg-[#777] after:content-['']"
      >
        {title}
      </h2>
    </div>
  );
};
