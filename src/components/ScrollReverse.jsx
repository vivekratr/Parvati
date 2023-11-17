import React from 'react'



const ScrollCarousel = () => {
    const imgLinks =[
        'https://cdn.discordapp.com/attachments/1096324843877703713/1172242728415920176/image.png?ex=655f9b1d&is=654d261d&hm=e1eb0e129fbe7e7b1d6b88f19c03837e6a153984d4534c04ab35a08d349e76aa&',
        'https://cdn.discordapp.com/attachments/1096324843877703713/1172242669871845496/image.png?ex=655f9b0f&is=654d260f&hm=0b96d0808115c73832acd5b8e459e719577401c8ab5e896a1d0e9055d10a76e0&',
        'https://cdn.discordapp.com/attachments/1096324843877703713/1172242548648050748/image.png?ex=655f9af2&is=654d25f2&hm=bd9c38c768c7c3a18765f81179e57bb85cfe83cf8ffcd028a92bd3efe158c753&',
        'https://cdn.discordapp.com/attachments/1096324843877703713/1172242483489558618/image.png?ex=655f9ae3&is=654d25e3&hm=9e65df7e07cf81292ce507d1ea2f4ec549607b4ec5a16f13f9af41b2db589c4c&',
        'https://cdn.discordapp.com/attachments/1096324843877703713/1172242784929984584/image.png?ex=655f9b2b&is=654d262b&hm=4c962b4476a623e3b88e6872d0922f144ac8a4807abbf741ce22b081a507b520&',
        'https://cdn.discordapp.com/attachments/1096324843877703713/1172242278392266865/image.png?ex=655f9ab2&is=654d25b2&hm=f7482e470f09ba7527d0bff14313259e2765c45a7c954cd9b2a74c62720f6d6b&',
        'https://cdn.discordapp.com/attachments/1096324843877703713/1172242616142790777/image.png?ex=655f9b02&is=654d2602&hm=6617135f4fd9feeeb66236e963d604fbc2a5589e0b1891d6c4915497b049d634&',
]
  return (
    <>
        <div className='mb-96'>
            <div className="relative w-full p-16  overflow-x-hidden">
                <div className="flex  relative right-0 animate-marquees-infinite">
                    <div className=' flex w-[150%] mr-[29rem] lg:mr-[2rem] justify-around gap-12'>
                    
                 
                    {imgLinks.map((img)=>{
                        return(
                            <img src={img} alt="" class="w-[14rem] lg:w-[31rem] h-[2rem] lg:h-[5rem] object-fill "/>

                        )
                    })}
                    </div>
                    <div className=' flex  w-[150%] justify-around gap-9'>
                    {imgLinks.map((img)=>{
                        return(
                            <img src={img} alt="" class="w-[4rem] lg:w-[31rem] h-[2rem] lg:h-[5rem] object-fill "/>

                        )
                    })}
                 
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ScrollCarousel;