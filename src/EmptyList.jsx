import React from 'react'
import emptySvg from "./assets/empty.svg";

const EmptyList = () => {
  return (
    <div className="empty-stage py-5 hidden  last:flex justify-center flex-col items-center gap-3 ">
          <img width={100} src={emptySvg} alt="empty stage image" />
          <p>There is no list</p>
        </div>
  )
}

export default EmptyList