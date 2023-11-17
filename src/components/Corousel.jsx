import { Carousel } from "@material-tailwind/react";
import DialogWithImage from "./PopOut";

export default function CarouselCustomNavigation() {
  // const ImgStyle = { objectFit: "cover",maxWidth:`100%`,height:`auto`};
  const imgUrl = ['https://cdn.discordapp.com/attachments/1096324843877703713/1172818558527479839/1.png?ex=6561b366&is=654f3e66&hm=9032d997f23eaa885dd885a8bcc271ed041eb5f56463472628f4ebc3ee1dc7b3&',
'https://cdn.discordapp.com/attachments/1096324843877703713/1172818559278272522/3.png?ex=6561b366&is=654f3e66&hm=cde5d8d13067362e134eac734b89f060ee021161c3fd65798021fb09329212de&',
'https://cdn.discordapp.com/attachments/1096324843877703713/1172818560079364156/5.png?ex=6561b366&is=654f3e66&hm=be3bf3be31fbe806a36b873cd554149be1ba0f9c0bb86798c6da6ef67195fda5&',
'https://cdn.discordapp.com/attachments/1096324843877703713/1172818560960176158/4.png?ex=6561b366&is=654f3e66&hm=a9828c3bb189ec15694fd2f3c1ba195d28016e345561cb701f0998381f895b89&',

]
  return (
    <Carousel
      className="rounded-3xl  overflow-hidden   w-[100%] h-[30rem]  lg:w-[100%] lg:h-[100%] relative z-20"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="relative bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {/* <DialogWithImage url='https://cdn.discordapp.com/attachments/1096324843877703713/1171499178099224727/WhatsApp_Image_2023-11-03_at_22.39.58_dd28d378.jpg?ex=655ce6a1&is=654a71a1&hm=232dd53a349c84487a44d25ac21fa0630c749a9d7c2ac53c24c1f12b8d043bc8&' />
      <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1171499178099224727/WhatsApp_Image_2023-11-03_at_22.39.58_dd28d378.jpg?ex=655ce6a1&is=654a71a1&hm=232dd53a349c84487a44d25ac21fa0630c749a9d7c2ac53c24c1f12b8d043bc8&"
        alt="image 1"
        className="object-cover md:w-full md:h-full lg:w-[50rem] "
        style={ImgStyle} 
        height={`1580px`}
        width={`1600px`}
    
      /> */}
      {imgUrl.map( (img)=>{
        return <DialogWithImage key={img*100} url={img}/>
      } )}
       {/* <img
        src="https://media.discordapp.net/attachments/1096324843877703713/1170620628412403772/image.png?ex=6559b46a&is=65473f6a&hm=c260b6f0c4a6f0bb15e99afa9920d232a8403bf9f17536d1d78174ef6bdfcdf6&=&width=971&height=662"
        alt="image 1"
        className="object-cover "
        style={ImgStyle} 
        height={`563px`}
        width={`825px`}
      />
       <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1170748291554746519/cascade_pic1.jpg?ex=655a2b50&is=6547b650&hm=5b37b6bc6af8adf9d43f8f46144529fc27a1cd2c53bce4322357a0afe8f36e9b&"
        alt="image 1"
        className="object-cover "
        style={ImgStyle} 
        height={`537px`}
        width={`715px`}

      />
       <img
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1171546484831948820/image_Custom.png?ex=655d12b0&is=654a9db0&hm=9b6c424394dfd4609f7037b611620427c4234a920df456ca719493d84f2992a2&"
        alt="image 1"
        className="object-cover "
        style={ImgStyle} 
        height={`1580px`}
        width={`1600px`}

      />
      <DialogWithImage/> */}
      
    </Carousel>
  );
}
