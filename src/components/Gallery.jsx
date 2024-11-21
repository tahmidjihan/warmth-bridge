import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gallery() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <>
      <section id='gallery' className='py-20' data-aos='fade-up'>
        <h1 className='text-5xl font-bold text-center my-10 flex flex-col max-w-md mx-auto'>
          Real Stories, <br /> Real Impact
          <span className='text-sm font-normal'>
            See how your donations are changing lives.
          </span>
        </h1>
        <div className='container mx-auto w-10/12'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='grid gap-4'>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.pexels.com/photos/13232298/pexels-photo-13232298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1P'
                  alt=''
                />
              </div>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.pexels.com/photos/12678329/pexels-photo-12678329.jpeg?auto=compress&cs=tinysrgb&w=600'
                  alt=''
                />
              </div>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1577896852336-e749dd04f202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheWdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D'
                  alt=''
                />
              </div>
            </div>
            <div className='grid gap-4'>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.pexels.com/photos/29406499/pexels-photo-29406499/free-photo-of-peaceful-reading-by-lake-annecy-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600'
                  alt=''
                />
              </div>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.pexels.com/photos/28244701/pexels-photo-28244701/free-photo-of-rostro-de-sabiduria-andina-el-tiempo-reflejado-en-el-rostro-de-esta-mujer-de-la-zona-rural-su-mirada-profunda-y-serena-es-testimonio-de-una-vida-marcada-por-el-trabajo-la-tradicion-y.jpeg?auto=compress&cs=tinysrgb&w=600'
                  alt=''
                />
              </div>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1619111533036-05061ba63f41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dlYXRlciUyMGZvciUyMHBvb3JzfGVufDB8fDB8fHww'
                  alt=''
                />
              </div>
            </div>
            <div className='grid gap-4'>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.pexels.com/photos/11587929/pexels-photo-11587929.jpeg?auto=compress&cs=tinysrgb&w=600'
                  alt=''
                />
              </div>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1453342664588-b702c83fc822?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpc2FibGUlMjBraWR8ZW58MHx8MHx8fDA%3D'
                  alt=''
                />
              </div>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1631625327330-3cb0fa4a1a59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlYXRlciUyMGZvciUyMHBvb3JzfGVufDB8fDB8fHww'
                  alt=''
                />
              </div>
            </div>
            <div className='grid gap-4'>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1621795165885-230c2b1aebbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dlYXRlciUyMGZvciUyMHBvb3JzfGVufDB8fDB8fHww'
                  alt=''
                />
              </div>
              <div>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzYWJsZSUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
