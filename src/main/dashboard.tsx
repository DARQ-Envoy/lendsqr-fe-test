import React from 'react';
import { Header } from '../components/header';
import { LenderNav } from '../components/lender-nav';
import { Users } from '../components/users';

const Dashboard:React.FC = () => {
  return (
        <div id='dashboard' className='relative'>
                      <LenderNav/>
                        <div id='page-content'>
                        <Header/>
                        <Users/>
                        </div>


        </div>
  )
}

export {Dashboard}