import React from 'react'
import FullStack from './FullStack'
import DataScience from './DataScience'
import Cyber from './Cyber'


function AllCourses() {
  return (
    <div>
        <h1>All Courses</h1>
        <div className='allCourses'>
    <FullStack/>
    <DataScience/>
    <Cyber/>
    
    </div>
    </div>
  )
}

export default AllCourses