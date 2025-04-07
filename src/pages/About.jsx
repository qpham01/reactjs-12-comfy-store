const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:ga-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-light'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laborum,
        vero sit doloribus voluptates quibusdam iure labore, recusandae ullam
        enim eaque non reiciendis corporis, saepe eum error! Animi nam corporis
        vel nihil tenetur, veniam ullam adipisci perspiciatis provident
        voluptatem facere.
      </p>
    </>
  );
};
export default About;
