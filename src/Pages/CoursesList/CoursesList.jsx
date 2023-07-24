import React from 'react';

const CoursesList = () => {
    return (
        <div className='bg-[#F5E1C7] py-5'>
            <h3 className="primary-text font-medium text-center md:text-start w-[75%] mx-auto">FEATURES COURSES LIST </h3>
            <div className="grid py-4 md:grid-cols-2 grid-cols-1 justify-items-center items-center px-10">
                <h2 className="text-5xl secondary-text font-bold secondary-text">Best courses we provide</h2>
                <p className="common-text w-[70%]">Deserunt convallis hendrerit eligendi inventore nunc, enim, hymenaeos occaecat orci, nascetur enim nisi officiis, feugiat ipsa sagittis dignissim, exercitationem non, quas repellat iste.</p>
            </div>

            <div className="my-5 grid md:grid-cols-3 grid-cols-1 justify-items-center">
                <div className="rounded-2xl border border-dashed border-slate-300">
                    <img className="w-80 rounded-2xl px-5" src="http://demo.stairthemes.com/edumind/wp-content/uploads/sites/16/2023/06/image_06.jpg" alt="" />
                    <p>
                    Advance technology & information IT course
                    </p>
                    <div>
                        <img src="" alt="" />
                        <p>Prof. Alison Scott</p>
                        <p>*****</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-300">
                    <img className="w-80 rounded-2xl px-5" src="http://demo.stairthemes.com/edumind/wp-content/uploads/sites/16/2023/06/image_06.jpg" alt="" />
                    <p>
                    Advance technology & information IT course
                    </p>
                    <div>
                        <img src="" alt="" />
                        <p>Prof. Alison Scott</p>
                        <p>*****</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-300">
                    <img className="w-80 rounded-2xl px-5" src="http://demo.stairthemes.com/edumind/wp-content/uploads/sites/16/2023/06/image_06.jpg" alt="" />
                    <p>
                    Advance technology & information IT course
                    </p>
                    <div>
                        <img src="" alt="" />
                        <p>Prof. Alison Scott</p>
                        <p>*****</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesList;