import React, { useState } from 'react'
import Page from "../Layouts/Pages";
import {AiOutlineBell} from "react-icons/ai"
import {BsPersonSlash} from "react-icons/bs"
import {VscKey} from "react-icons/vsc"
import ProfileLock from './ProfileLock';
import SetPassword from '../Components/SetPassword';
import BlockedAccounts from './BlockedAccounts';

const Settings = () => {

    const [changePin, setChangePin] =useState(false);
    const [changePass, setChangePass] =useState(false);
    const [changeNotification, setChangeNotification] = useState(false);
    const [changeBlockedAcc, setChangeBlockedAcc] =useState(false);
    const handleChangePin =()=>{
        setChangePin(true);
        setChangePass(false);
        setChangeNotification(false);
        setChangeBlockedAcc(false);
    }

    const handleChangePass =()=>{
        setChangePass(true);
        setChangeNotification(false);
        setChangeBlockedAcc(false);
        setChangePin(false);
    }
    const handleChangeNotification =()=>{
        setChangeNotification(true);
        setChangeBlockedAcc(false);
        setChangePin(false);
        setChangePass(false);
    }
    const handleChangeBlockedAcc =()=>{
        setChangeNotification(false);
        setChangeBlockedAcc(true);
        setChangePin(false);
        setChangePass(false);
    }
    
  return (
    <Page
    pageContent={(
        <>
                <div className=' flex flex-col bg-[#FFF6FB] h-[100%] w-[100%]'>
                    {/* background */}
                    <div className='px-20 py-6'><h1 className='font-[600] text-[30px] '>Settings/ Change your Pin</h1></div>
                    <div className='flex flex-row items-start justify-center h-calc(100% -[50px]) w-full mx-20 gap-10'>
                    <div className=' flex-col flex  w-[35%]'>
                    {/* left side settings */}
                    <div className='flex flex-col'>
                        <div className='flex flex-col bg-white rounded-[25px] border-[0.5px] border-[#dfdede] cursor-pointer' style={{boxShadow:'0px 10px 30px 0px rgba(0, 0, 0, 0.05)'}}>
                           {/* notification */}
                           
                            <div className='flex flex-row gap-3 pb-4 pt-6 px-8 rounded-t-[25px] hover:bg-[#C31A7F]/25'>
                            <div className='flex pt-[4px]'><AiOutlineBell size={20} className='text-[#C31A7F]'/></div>
                            <div className=' flex flex-col'>
                                <h3 className='font-semibold text-[18px]'>Notification</h3>
                                <p className='text-[14px] text-[#7E7E7E] '>Select the kinds of notifications you get about your activities, interests, and recommendations.</p>
                                
                            
                            </div>
                            </div>
                            <hr/>
                            {/* blocked accounts */}
                            <div className='flex flex-row gap-3 py-4 px-8 hover:bg-[#C31A7F]/25' onClick={handleChangeBlockedAcc}>
                            <div className='flex pt-[4px]'><BsPersonSlash size={20} className='text-[#C31A7F]'/></div>
                            <div className=' flex flex-col'>
                                <h3 className='font-semibold text-[18px]'>Blocked Accounts</h3>
                                <p className='text-[14px] text-[#7E7E7E]'>Manage the accounts, words, and notifications that you’ve blocked.</p>
                                
                            </div>
                            </div>
                            <hr/>
                            {/* Change your Password */}
                            <div className='flex flex-row gap-3 py-4 px-8 hover:bg-[#C31A7F]/25' onClick={handleChangePass} >
                            <div className='flex pt-[4px]'><VscKey size={20} className='text-[#C31A7F]'/></div>
                            <div className=' flex flex-col'>
                            <h3 className='font-semibold text-[18px]'>Change Your Password</h3>
                                <p className='text-[14px] text-[#7E7E7E]'>Change your password at any time.</p>
                                
                            </div>
                            </div>
                            <hr/>
                            {/* change your pin */}
                            <div className='flex flex-row gap-3 pb-6 pt-4 px-8 rounded-b-[25px] hover:bg-[#C31A7F]/25' onClick={handleChangePin}>
                            <div className='flex pt-[4px]'><VscKey size={20} className='text-[#C31A7F]'/></div>
                            <div className=' flex flex-col'>
                            <h3 className='font-semibold text-[18px]'>Change your pin</h3>
                                <p className='text-[14px] text-[#7E7E7E]'>Change your pin at any time.</p>
                            </div>
                            </div>
                            </div>
                    </div>
                   
                    </div>
                
                {/* right side  */}

                <div className='flex-col justify-center items-start flex w-[60%] '>
                    {/* change password code */}
                    {changePass && (
                        <SetPassword/>
                    ) }

                    {/* change Pin code */}
                    {changePin && (
                        <ProfileLock/>
                    )
                    }
                    {changeBlockedAcc && (
                        <BlockedAccounts/>
                    )
                    }

                </div>
                </div>
                </div>
                        </> 
                        )}/>

  )
}

export default Settings