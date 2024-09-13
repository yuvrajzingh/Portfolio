import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
  };

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className=" flex text-light text-xl font-bold sm:text-center sm:text-2xl dark:text-dark">
      {children}
    </h2>
  )
}

export default SectionHeading