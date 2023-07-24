import React from 'react';
import { FaMicroscope } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { FcEngineering } from "react-icons/fc";
import { MdManageAccounts } from "react-icons/md";
import { GiHealing } from "react-icons/gi";

const PopularFaculty = () => {
    return (
        <div className='text-center my-8'>
            <div className='md:w-[50%] mx-auto '>
                <h4 className='primary-text uppercase'>Popular Faculty Sector</h4>
                <h1 className='secondary-text text-5xl font-bold my-3'>Top notch Faculties</h1>
                <p className='common-text'>Cum ultrices cupiditate fames donec potenti semper. Consequuntur nesciunt corporis viverra perferendis laborum natus vel</p>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-1 justify-items-center items-center my-10'>
                <div>
                    <div className='border border-dashed border-[#7A8AA2] p-8 rounded-3xl'>
                        <FaMicroscope className=' h-32 w-32'></FaMicroscope>
                    </div>
                    <p className='secondary-text text-2xl font-bold py-3'> Science Faculty</p>
                    <p className='common-text text-lg'>9 semester</p>
                    <p className='primary-text uppercase font-semibold'> Learn More</p>
                </div>
                <div>
                    <div className='border border-dashed border-[#7A8AA2] p-8 rounded-3xl'>
                        <FcEngineering className=' h-32 w-32'></FcEngineering>
                    </div>
                    <p className='secondary-text text-2xl font-bold py-3'> Engineering</p>
                    <p className='common-text text-lg'>8 semester</p>
                    <p className='primary-text uppercase font-semibold'> Learn More</p>
                </div>
                <div>
                    <div className='border border-dashed border-[#7A8AA2] p-8 rounded-3xl'>
                        <GrTechnology className="w-32 h-32"></GrTechnology>
                    </div>
                    <p className='secondary-text text-2xl font-bold py-3'> IT Technology</p>
                    <p className='common-text text-lg'>6 semester</p>
                    <p className='primary-text uppercase font-semibold'> Learn More</p>
                </div>
                <div>
                    <div className='border border-dashed border-[#7A8AA2] p-8 rounded-3xl'>
                        <MdManageAccounts className="w-32 h-32 text-[#FF9800]"></MdManageAccounts>
                    </div>
                    <p className='secondary-text text-2xl font-bold py-3'> Business Field</p>
                    <p className='common-text text-lg'>5 semester</p>
                    <p className='primary-text uppercase font-semibold'> Learn More</p>
                </div>
                <div>
                    <div className='border border-dashed border-[#7A8AA2] p-8 rounded-3xl'>
                        <GiHealing className="w-32 h-32"></GiHealing>
                    </div>
                    <p className='secondary-text text-2xl font-bold py-3'> Health Sector</p>
                    <p className='common-text text-lg'>10 semester</p>
                    <p className='primary-text uppercase font-semibold'> Learn More</p>
                </div>
            </div>
            <div>
                <button className='p-4 primary-bg text-white rounded-3xl'> More Category</button>
            </div>
        </div>
    );
};

export default PopularFaculty;