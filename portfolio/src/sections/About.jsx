import React from 'react'

const About = () => {
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid1.png' alt='dasda' className='w-full sm:h-[276px] h-fit object-contain'></img>
                    <div>
                        <p className='grid-headtext'>Hi, I'm Diogo</p>
                        <p className='grid-subtext'>With 2 year on College </p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid2.png' className='w-full sm:w-[276px] h-fit object-contain'></img>
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>fhsjdhfshfsdhfuisdh fsdjkfsdfh sdf sdfb sd fsdf sd bfsdfbsdfh sd bfsdbgsdb g sdbf hsdf sdgsdfg bsdhj fghsdb hj</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>

                    </div>
                    <img src='/assets/grid2.png' className='w-full sm:w-[276px] h-fit object-contain'></img>
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>fhsjdhfshfsdhfuisdh fsdjkfsdfh sdf sdfb sd fsdf sd bfsdfbsdfh sd bfsdbgsdb g sdbf hsdf sdgsdfg bsdhj fghsdb hj</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About