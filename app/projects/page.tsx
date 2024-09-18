import Link from 'next/link';
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';

import AllProjects from '@/components/AllProjects';

const Projects = () => {
  return (
    <div>
      <Link href={'/'} replace={false} className='fixed top-5 left-10 z-10'>
        <button>
          <BsArrowLeft className='h-10 w-10' />
        </button>
      </Link>

      <div className='relative mx-auto flex max-w-2xl flex-col items-center pt-24'>
        <h2 className='text-center text-3xl font-medium sm:text-6xl text-light dark:text-dark'>PROJECTS</h2>
      </div>
      <AllProjects />
    </div>
  );
}

export default Projects;