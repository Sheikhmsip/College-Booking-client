import React from 'react';
import img from '../../../assets/Img/banner-img.png'
const Header = () => {
    return (
        <>
            <div className='bg-[#F5E1C7] grid md:grid-cols-2 grid-cols-1 items-center justify-evenly px-5'>
                <div>
                    <h3 className='uppercase primary-text'>Knowledge is the best gift</h3>
                    <p className='md:text-8xl text-6xl font-bold secondary-text'>
                        <span>Be educated</span><br />
                        <span>and feel the</span><br />
                        empowered!
                    </p>
                    <p className='mt-5 w-[70%] text-[#7A8AA2]'>
                        Totam corporis taciti rhoncus sapien odio magnam urna autem? Placeat sunt erat eiusmod curabitur facilis.
                    </p>
                    <div className='flex justify-center md:justify-start gap-5 pt-5'>
                        <button className='btn primary-bg text-white'>
                            learn more
                        </button>
                        <button className='btn secondary-bg text-white'>
                            Join us now
                        </button>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className=' secondary-bg rounded-bl-[6rem] rounded-br-[6rem] py-10 px-5 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 p-5 text-white'>
                    <div className=' border border-dashed border-[#47496C] p-10 font-bold md:mb-5 rounded-3xl'>
                        <p className='text-6xl '>15K+</p><br />
                        <p>*****</p>
                        <p>Happy students</p>
                    </div>
                    <div className='border border-dashed border-[#47496C] md:mt-5 my-5 p-14 font-bold rounded-3xl'>
                        <p className='text-6xl'>4.7</p>
                        <p>*****</p>
                        <p>Positive Rating</p>
                    </div>
                </div>
                <div>
                    <h3 className='primary-text'>OUR ACHIEVEMENT</h3>
                    <p className='font-bold md:text-5xl text-3xl text-white py-5 md:leading-[3.5rem]'>
                        <span>Trusted by 25,000+ happy</span><br />
                        <span>students are joining with us</span><br />
                        <span>to achieve their goal</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Header;