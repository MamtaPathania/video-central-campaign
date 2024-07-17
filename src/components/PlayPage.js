import React from 'react';

function PlayPage() {
  return (
    <div className='flex justify-center items-center lg:h-screen '>
      <div className='border-4 border-black lg:m-4 m-9 sm:m-8 w-full sm:w-3/4 md:w-1/2 lg:w-[700px] p-4 sm:p-6 mx-4 sm:mx-8 text-center'>
        <h1 className='text-3xl font-bold mb-4'>
          How To Play
        </h1>
        <p className='font-bold text-md sm:text-base text-justify'>
        ●	To access premium video content, send "VD" to 20782 for the daily plan or "VW" for the weekly plan using your MTN line.<br/>
●	Upon successful subscription, the designated fee (N100 or N20 ) will be deducted from your account.<br/>
●	Enjoy a diverse range of engaging video content, including comedy and entertainment, catering to your varied preferences.<br/>
●	To unsubscribe, simply text "STOP VD" for the daily plan or "STOP VW" for the weekly plan.<br/>
●	Experience uninterrupted service with Video Central, bringing entertainment directly to your fingertips.<br/>


        </p>
      </div>
    </div>
  );
}

export default PlayPage;
