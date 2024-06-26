import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'; //
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';

export default function Dashboard() {
  const location = useLocation();// to find out which tab we are in.
  const [tab, setTab] = useState('')//initial val - ''(empty string)
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  }, [location.search] // any time location.search change, we want to render this use effect
  );
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:w-56">
      {/* sidebar */}
      <DashSidebar/>
      </div>
      {/* profile..... */}
      {tab === 'profile' && <DashProfile/>}
      {tab === 'posts' && <DashPosts/>}

    </div>
  )
}
