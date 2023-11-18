import Header from "./Header";

import React, { useState, Fragment } from "react";
import Corousel from "./Corousel";
import ScrollCarousel from "./ScrollCorousel";
import ScrollReverse from "./ScrollReverse";
import HoverImage from "./HoverImg";
// import { saveAs } from "file-saver";
// import { Modal } from "flowbite";
import Modal from "./Modal";
// import TransitionExample from './Dialog'
// import { Link } from "react-scroll";
import DialogWithImage from "./PopOut";

export default function Mainpage() {
  // modal
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isPdfQuery, setIsPdfQuery] = useState(false);

  const phoneNumber = "9870303003";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    window.open(whatsappUrl, "_blank");
  };

  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172833940936065084/framing-landscape-while-traveling.jpg?ex=6561c1b9&is=654f4cb9&hm=a73075c37be4b9d75c1e12a00c9a55bc0c0ab4b6ddaa6602f72dcdd62c29155a&"
  );

  const smallImages = [
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172833940936065084/framing-landscape-while-traveling.jpg?ex=6561c1b9&is=654f4cb9&hm=a73075c37be4b9d75c1e12a00c9a55bc0c0ab4b6ddaa6602f72dcdd62c29155a&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172841425344409620/2150699513.jpg?ex=6561c8b2&is=654f53b2&hm=2e2433098d0a8bdd59b4e2f5cdc6e86c2e17dc2246709b941f615ad5f84e24c5&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172837458858217532/outdoor-patio-with-table-chair.jpg?ex=6561c500&is=654f5000&hm=eecfd3f3cbcc80672571302b5eda016268677a71de50949da54792af7ba9d0b7&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172837912795168798/park-with-wooden-pathway-benches.jpg?ex=6561c56c&is=654f506c&hm=239094644480434d62090591bec0084ef9ea3350174db1fa7bf334bff896d09e&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172839046624587817/public-park-with-gazebo-paved-walkways-surrounded-by-greenery_124507-141228.jpg?ex=6561c67b&is=654f517b&hm=3e2dfe5669f987d59463a84154053d4c3a967d4b58e3089c67ffce72624ff927&",
  ];

  const backgroundImageUrl =
    "https://cdn.discordapp.com/attachments/1096324843877703713/1169889030075326545/image_12.png?ex=65570b10&is=65449610&hm=15386f2762e0011dbe26eae3f532949505320da5aab46cec39e877b613a1acd4&";

  const [backgroundImage, setBackgroundImage] = useState(backgroundImageUrl);
  // const [screenSize, setScreenSize] = useState("");
  const [page3Selector, setPage3Selector] = useState(0);

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const [images, setImages] = useState([
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733523263131678/image.png?ex=655dc0e1&is=654b4be1&hm=be1350cdf701589eaa7a0b7575597a4a47469f5eb7ab84f2e43a383417beeca1&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733129459924992/image.png?ex=655dc083&is=654b4b83&hm=04f08b0d09b3a77b590ddf0fe85ce08230da9fbbd68ad15b4ac45a8a475d25f8&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733523946815488/image.png?ex=655dc0e1&is=654b4be1&hm=e9f3dd804054d34dc814b4b45e580a6fa49c839640d795698d5bc0b20d8432b7&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733523636428800/image.png?ex=655dc0e1&is=654b4be1&hm=27ea3b023858cf17d001a3a7884d8d8d1d57427e7deb4fb0d19b341b57b6529e&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733384817549343/image.png?ex=655dc0c0&is=654b4bc0&hm=14d04e5124e4000bec69dc4880acf49decc4d84ec3c7d4cbdfa528f41f32ef49&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1171733384368762890/image.png?ex=655dc0c0&is=654b4bc0&hm=0444844903e52246f2f793c48676c2b82a0b88df71ebcd131ff3faa5b7225389&",
  ]);
  const imageTitle = [
    "Gazebo",
    "Landscape",
    "Office Space",
    "Senior Citizens Area",
    "Yoga Area",
    "Turf Area",
  ];

  const [visibleImages, setVisibleImages] = useState(0);
  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
  };

  // const slides = [
  //   "https://cdn.discordapp.com/attachments/1096324843877703713/1170449806326509629/image.png?ex=65591553&is=6546a053&hm=39a63eb208dc06999a7b2deb3b330813fbe72caa16364ab341a2e7ff40b6f350&",
  //   "https://i.ibb.co/B3s7v4h/2.png",
  //   "https://i.ibb.co/XXR8kzF/3.png",
  //   "https://i.ibb.co/yg7BSdM/4.png",
  // ];

  const [is1BHKSelecteds, setIs1BHKSelecteds] = useState(true);
  const [isJodiSelected, setIsJodiSelected] = useState(false);
  const [is2BHKSelected, setIs2BHKSelected] = useState(false);

  const handle1BHKToggle = () => {
    setPage3Selector(0);
    if (is1BHKSelecteds === false) {
      setIs1BHKSelecteds(!is1BHKSelecteds);
    }
    setIsJodiSelected(false);
    setIs2BHKSelected(false);
  };

  const handleJodiToggle = () => {
    setPage3Selector(1);
    if (isJodiSelected === false) {
      setIsJodiSelected(!isJodiSelected);
    }

    setIs1BHKSelecteds(false);
    setIs2BHKSelected(false);
  };

  const handle2BHKToggle = () => {
    setPage3Selector(2);
    if (is2BHKSelected === false) {
      setIs2BHKSelected(!is2BHKSelected);
    }
    setIs1BHKSelecteds(false);
    setIsJodiSelected(false);
  };

  const [is1BHKSelected, setIs1BHKSelected] = useState(true);

  const handleToggle = () => {
    setIs1BHKSelected(!is1BHKSelected);
  };

  const [isVirualTourSelected, setIsVirualTourSelected] = useState(true);

  const handleToggleVirtualTour = () => {
    setIsVirualTourSelected(!isVirualTourSelected);
  };

  const page3ImgObj = {
    0: [
      "https://media.discordapp.net/attachments/1174781534163697777/1175414573646499851/colsal_broucher_8.png?ex=656b2520&is=6558b020&hm=439f668d164b521fbbfb3fa7d1b898dd730967e03453d92295446bfc700b64fd&=&width=1022&height=662",
      "https://cdn.discordapp.com/attachments/1174781534163697777/1175414573193511024/colsal_broucher_9.png?ex=656b2520&is=6558b020&hm=03b7c576c665d156df58df64c7e6f721efc21f6b4d304c40ae22f3edeb9fe52b&",
    ],
    1: [
      "https://media.discordapp.net/attachments/1174781534163697777/1175414576758673570/colsal_broucher_2.png?ex=656b2521&is=6558b021&hm=7843bf3ed313e7f6f324cf7eb644865d698f053d78305935bc23d26495938b33&=&width=1022&height=662",
      
    ],
    2: [
      "https://cdn.discordapp.com/attachments/1096324843877703713/1172222269922222111/image.png?ex=655f880f&is=654d130f&hm=fc8a3cef92226f735c75c3d5cdb419690443785143af4cdf6e4e7d2bfdf6a4fd&",
    ],
  };

  // location page
  const locationImg = [
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172565383711031306/image.png?ex=6560c79c&is=654e529c&hm=557fc4a675ea66ca88f1b6ea934807da9b76b0c67118ad2ac785c7aa1f9bd951&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172565384398901318/image.png?ex=6560c79c&is=654e529c&hm=47187210302ab9c12741e2dbcfa750a6a8b827a99897b68868c048defff78370&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172565385074180116/image.png?ex=6560c79d&is=654e529d&hm=d4605f4faeab1e570687177e187753605b86433121cdbe100d2d9890291bbd3c&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172565386793848902/image.png?ex=6560c79d&is=654e529d&hm=733a2ffa0699266a53280c7c448afb8f052c23cb44c1d03ae677bdf68caf256f&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172565386395385916/image.png?ex=6560c79d&is=654e529d&hm=cfe138bbb9fa4079f543ae917120910306ca9422681de392c12396c054598954&",
    "https://cdn.discordapp.com/attachments/1096324843877703713/1172565385711718520/image.png?ex=6560c79d&is=654e529d&hm=2e738b8c4d1b454810ae364126e010fc4d8385c3b70d6bff86267dae8f9c651e&",
  ];
  const locationText = {
    0: [
      `Malls & Shopping Centres`,
      `D-Mart - 2.7 km.`,
      `Hypercity - 2.7 km.`,
      `Viviana Mall - 9.4 km.`,
      `R-Mall - 63 km.`,
      `High Street Mall • 8.8 km.`,
      `Cinemax Wonder Mall - 8.2 km.`,
      `Koruna Mall - 112 km,`,
    ],
    1: [
      `Metro Station - 0.5 km `,
      `Thane Station - 14 km  `,
      `Eastern Express Highway - 8 km `,
      `Western Express Highway - 8 km  `,
      `Dahisar Check Naka - 14.4 km. `,
    ],

    2: [
      `IT & BUSINESS PARKS`,
      `Thane One Corporate IT Park - 8.6 km.`,
      `Lotus IT Park - 13 km.`,
      `Modi Business Park - 2.7 km.`,
      `Ashar IT Park - 12.5 km.`,
      `G. corp Tech Park - 2.7 km.`,
    ],

    3: [
      `SCHOOLS & COLLEGES`,
      `Euro School - 3.3 km.`,
      `The Tree House Playgroup & Nursery - 2.4 km.`,
      `A. P Shah Institute of Technology - 1.9 km.`,
      `Podar International School = 5.3 km.`,
      ` Dnyan Ganga Education Trust - 2.7 km.`,
      `Muchhala Polytechnic - 2.4 km.`,
      `DG International School - 2.7 km.`,
      ` New Horizon Scholars School - 2.9 km.`,
    ],
    4: [
      `HOSPITALS`,
      `Vedant Super Speciality Hospital - 1.3 km.`,
      `Hiranandani Hospital - 5.3 km.`,
      `Jupiter Hospital - 92 km.`,
      `Dhanwantari Multispeciality Hospital - 1.58 km.`,
      `Bethany Hospital - 92 km.`,
      `Metro Hospital - 5.6 km.`,
    ],

    5: [
      `FOOD AND DINING`,
      `Wine N Dine - 2.4 km.`,
      `The Plush - 1.7 km.`,
      `The Blue Roof Club - 1.1 km.`,
      `Harish Lunch Home - 2.1 km.`,
      `Veggies (Veg, Restaurant) - 1.5 km.`,
      `All major banks are within a 5 km. radius.`,
      `Metro Station - O.S km.`,
      `Ferry Station - 0.5 km.`,
    ],
  };

  // useEffect(() => {
  //   function getScreenSize() {
  //     const innerWidth = window.innerWidth;
  //     console.log("innerWidth", innerWidth);

  //     if (innerWidth >= 1200) {
  //       setScreenSize("large");
  //       return "large";
  //     } else if (innerWidth >= 768) {
  //       setScreenSize("medium");

  //       return "medium";
  //     } else {
  //       setScreenSize("small");

  //       console.log("small");
  //       return "small";
  //     }
  //   }
  //   const screenSize = getScreenSize();

  //   if (screenSize === "small") {
  //     setBackgroundImage(
  //       "https://cdn.discordapp.com/attachments/1096324843877703713/1170667695902048377/image.png?ex=6559e040&is=65476b40&hm=8225cf55ec24c1e09c4cfeb4d01662a123e19310152a8598f5578cbad0be4999&"
  //     );
  //   } else {
  //     setBackgroundImage(backgroundImageUrl);
  //   }
  // }, [ screenSize]);

  return (
    <Fragment>
      <div>
        <div
          className="relative  lg:h-full
      bg-center object-cover max-w-full  h-auto  md:min-h-[220vh] min-h-[170vh]  lg:min-h-[120vh]"
          style={backgroundStyles}
        >
          <Header a={setShowModal} />
          {/* <Button>Button</Button>; */}
          {/* <h1 className="color-white">Mainpage</h1> */}
          <div className="  w-full h-auto flex  flex-wrap  justify-between">
            <div className=" ml-0  w-[100%] xs:h-auto  h-max lg:max-w-[40%] flex justify-around ">
              {/* right side content */}
              <div
                style={{ borderRadius: "32px" }}
                className="  relative  p-7 bg-white w-[70%] lg:w-[65%] lg:ml-14 h-[31.19rem]  text-left text-[1.75rem] text-yellow-700 font-dm-serif-displays"
              >
                <div className="h-fit text-[1.7rem] font-dm-serif-display text-yellow-400 text-left">
                  CASCADE AVENUE
                </div>
                <div className="h-fit text-[0.8rem] font-dm-serif-display text-yellow-600 text-left">
                  KASARVADAVALI, GB ROAD, THANE[W] - 400615
                </div>
                <div className="h-fit mt-7  text-[2rem] font-dm-serif-display text-red-600 text-left">
                  Largest 1 BHK Of THANE
                </div>
                <div className="h-fit text-[0.71em] font-dm-serif-display text-yellow-700 text-left">
                  <p className="h-fit m-0">Luxury Amenities : 25+</p>
                  <p className=" h-fit m-0">Carpet Area : 426 to 900 Sqf</p>
                </div>

                <div className="relative rounded-[23px] mt-8 bg-gray-200 md:w-[100%] w-[100%] lg:w-[100%]  h-[2.69rem] overflow-hidden text-left text-[1.25rem] text-darkolivegreen font-dm-serif-display">
                  <div
                    className={`relative top-[0rem] left-[0rem] rounded-[32px] w-[50%] h-[2.69rem]  overflow-hidden cursor-pointer ${
                      is1BHKSelected
                        ? "bg-yellow-600 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={handleToggle}
                  >
                    <div className="xs:text-[0.9rem] h-fit xs:pt-2 xs:pl-5 xs:text-left text-center pt-1">
                      1 BHK
                    </div>
                  </div>
                  <div
                    className={`absolute top-[0rem]  xs:left-[50%] w-[50%]  left-[8.5rem] rounded-[32px]  h-[2.69rem] overflow-hidden cursor-pointer ${
                      is1BHKSelected
                        ? "bg-gray-200 text-black"
                        : "bg-yellow-600 text-white"
                    }`}
                    onClick={handleToggle}
                  >
                    <div className=" xs:text-[0.9rem] h-fit  sm:text-[0.9rem] xs:pt-2 xs:pl-5 xs:text-left  text-center pt-1">
                      1+1 Jodi
                    </div>
                  </div>
                </div>
                <div className="absolute text-[1.75rem] h-max font-dm-serif-display text-yellow-700 text-left mt-6">
                  {is1BHKSelected ? (
                    <div className="relative w-[80%]  text-[0.8em] h-fit font-dm-serif-display text-yellow-700 text-center">
                      52.47* Lakhs Starting Price
                    </div>
                  ) : (
                    <div className="relative w-[80%] text-[0.8em] h-fit font-dm-serif-display text-yellow-700 text-center">
                      XX* Lakhs Starting Price
                    </div>
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="relative transition-transform transform hover:scale-110 cursor-pointer xs:left-[9%] left-[30%] top-[5rem] rounded-[46px] bg-yellow-600 xs:min-w-[80%]  min-w-[39%] max-w-[35%] h-[3.25rem] overflow-hidden text-justify text-[0.9rem] text-white font-dm-serif-display"
                >
                  <div className="relative top-[0.8rem] h-fit lg:left-[7rem] left-[4.8rem] ">
                    Enquire Now
                  </div>
                </div>
              </div>
            </div>
            {/*left side carousel */}
            <div className="mx-auto mb-8 my-[3rem] lg:mb-0 lg:mx-0 lg:my-0 lg:h-[36rem] lg:max-w-[60%] h-[60%] lg:min-h-[36rem] md:h-[100%] w-[90%] xs:min-h-auto flex  ">
              {/* <Corousell >
        {slides.map((slide) => (
            <img
              src={slide}
              alt="image 1"
            />
          ))
        }
          </Corousell> */}
              <Corousel />
            </div>
          </div>
        </div>

        {/* 2nd page */}
        <div id="section2" className="flex  w-full h-[170vh] lg:h-[122vh] ">
          <div className="relative w-[20%] h-auto bg-white ">
            <div className="absolute top-[30rem] lg:top-[49rem] w-[2rem] h-[12rem]   font-dm-serif-display text-darkkhaki text-left [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.32]">
              <p className="w-[29rem]  lg:w-[48rem] lg:text-[6rem] h-fit text-[2rem] ">
                CASCADE AVENUE
              </p>
              <p className=" w-[30rem] h-fit lg:text-[1.4rem] text-[1rem]">
                Kasarvadavali, GB Road, Thane - 400615
              </p>
            </div>
          </div>
          <div className="w-[80%] h-auto bg-white">
            <div className="relative h-12 lg:h-max text-[1.2rem] top-7 lg:text-[3rem] font-dm-serif-display text-teal-600 text-left">
              Happiness Is Beautiful
            </div>
            <div className="relative h-12 lg:mt-3 lg:mb-11 lg:h-max text-[1.2rem] top-0 lg:text-[3rem] font-dm-serif-display text-darkkhaki text-left">
              Moment spent with your loved ones
            </div>
            <div className="flex flex-wrap lg:gap-10 mb-7  mt-3 h-auto max-h-[50rem] lg:h-auto">
              <img
                className=" h-[25rem] w-full lg:w-[29rem] rounded-[2rem]  "
                src="https://cdn.discordapp.com/attachments/1096324843877703713/1170748291554746519/cascade_pic1.jpg?ex=655a2b50&is=6547b650&hm=5b37b6bc6af8adf9d43f8f46144529fc27a1cd2c53bce4322357a0afe8f36e9b&"
                alt=""
              />
              <p className="my-2 h-fit text-[1.2rem]  lg:max-w-[500px]">
                Life at Cascade Avenue is far away from mediocrity, closer to
                stardom, <br /> <br />
                On one hand its magnificent facade is a grand celebration Of the
                luxurious conveniences loaded inside. While on the other, the
                attent.on to the tiniest of details makes you feel like royalty.
                <br /> <br />
                Everything about these spaces is a result of thoughtful design.
                From its creme-de-la-creme location that reduces the travel
                stress. to its brilliantly designed interiors that nestles one
                way from the neon of the busy urban life. <br /> <br />
                Cascade Avenue essentially flaunts 2 towers with ultramodern
                living spaces.
              </p>
            </div>

            <div className="flex flex-wrap h-[10rem] mt-16 lg:mt-6 items-center justify-center">
              <div className="relative w-[19rem] lg:text-[3rem] lg:w-[45rem] h-fit text-[1.3rem] font-dm-serif-display text-darkkhaki text-left">
                CELEBRATE A COMPLETE LIFE
              </div>

              <div
                onClick={() => {
                  setIsPdfQuery(true);
                  setShowModal(true);

                  // download function
                }}
                className="relative transition-transform transform hover:scale-110  cursor-pointer rounded-[46px] mx-auto right-3  bg-yellow-600 w-[14rem] h-[4rem] overflow-hidden text-justify text-[1rem] text-white font-dm-serif-display lg:text-[1.1rem]"
              >
                <div className="absolute w-fit top-[1.19rem] left-[1.25rem] ">
                  Download Brochure
                </div>
                <img
                  className="absolute top-[1rem] left-[11.46rem] w-[2.15rem] h-[2.15rem] my-auto "
                  style={{ maxWidth: `100%`, height: `auto` }}
                  height={`49px`}
                  width={`49px`}
                  alt=""
                  src="https://cdn.discordapp.com/attachments/1096324843877703713/1171505265909170306/arrow-up-right.png?ex=655cec4c&is=654a774c&hm=bda8e08005c943b38ff915dd7bedad9a632d181216c14751e59208538cacbc15&"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3rd page */}

        <div id="section3" className=" mt-[2rem] bg-lightgray h-fit ">
          <div className="flex h-auto">
            <div className="w-[80%] lg:w-[80%]     h-auto">
              <div className="grid p-6 pl-0 h-auto mx-7 mt-7 lg:mt-0  auto-rows-max grid-cols-[23rem] lg:grid-cols-3  gap-5 lg:gap-y-[2rem] lg:gap-x-[8rem]">
                {/* image 1 */}
                <div className="relative bg-tan w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem]">
                  <div className="  absolute top-0 left-0 w-full h-full  bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                  <div className="relative w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem]  transition-transform duration-[600ms] transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                    <img
                      src="https://cdn.discordapp.com/attachments/1096324843877703713/1171732951025860628/image.png?ex=655dc059&is=654b4b59&hm=cb754f3eed7092c313e90217eb496c8b6c5395cbfe2c663ea0612a6d3555ce0d&
  "
                      alt="Your Image"
                      className="w-full h-full object-fill lg:w-full lg:h-full lg:object-cover "
                    />
                    <p className="relative h-fit max-w-fit bottom-[18rem] left-[8rem] lg:bottom-[23rem] lg:left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-yellow-900 text-left  opacity-[0.7]">
                      Children Area
                    </p>
                  </div>
                </div>

                {/* image 2 */}
                <div className="relative bg-tan w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem]">
                  <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                  <div className="relative w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                    <img
                      src="https://cdn.discordapp.com/attachments/1096324843877703713/1171733074195795998/image.png?ex=655dc076&is=654b4b76&hm=6309b2cea31146bada03f48494c5a5612ea94612d47d494114dd3e75fdb77edc&
  "
                      alt="Your Image"
                      className="w-full h-full object-cover "
                    />

                    <p className="relative h-fit max-w-fit bottom-[18rem] left-[8rem] lg:bottom-[23rem] lg:left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                      Gym Area
                    </p>
                  </div>
                </div>

                {/* image 3 */}
                <div className="relative bg-tan w-[17.9rem] h-[18rem] z-50  lg:w-[26rem] lg:h-[23rem]">
                  <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 "></div>
                  <div className="relative w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                    <img
                      src="https://cdn.discordapp.com/attachments/1096324843877703713/1171805065376436284/image.png?ex=655e0382&is=654b8e82&hm=f06eea204b556f1cba540f152c30f1a32124c0c90a1326514c60eacd7b6173ab&"
                      alt="Your Image"
                      className="w-full h-full object-cover "
                    />
                    <p className="relative h-fit max-w-fit bottom-[18rem] left-[8rem] lg:bottom-[23rem] lg:left-[12rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                      Ganesh Temple
                    </p>
                  </div>
                </div>

                {/* image 4 */}
                <div className="relative bg-tan w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem]">
                  <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                  <div className="relative w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                    <img
                      src="https://cdn.discordapp.com/attachments/1096324843877703713/1171733609011499080/image.png?ex=655dc0f6&is=654b4bf6&hm=ecbdb35513df518708190814a7d606aacebd50c4a8f6d09a165fd31ce81c4fd5&
  "
                      alt="Your Image"
                      className="w-full h-full object-cover "
                    />
                    <p className="relative h-fit max-w-fit bottom-[18rem] left-[8rem] lg:bottom-[23rem] lg:left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                      Deck Lounge
                    </p>
                  </div>
                </div>

                {/* image 5 */}
                <div className="relative bg-tan w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem]">
                  <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                  <div className="relative w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                    <img
                      src="https://cdn.discordapp.com/attachments/1096324843877703713/1171792821137707129/image.png?ex=655df81b&is=654b831b&hm=2ee0032eaf47e12868fc781318527578e2f891d37473f9b1fa08a1e4b08a2730&"
                      alt="Your Image"
                      className="w-full h-full object-cover "
                    />
                    <p className="relative h-fit max-w-fit bottom-[18rem] left-[8rem] lg:bottom-[23rem] lg:left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                      BBQ Area
                    </p>
                  </div>
                </div>

                {/* image 6 */}
                <div className=" relative bg-tan w-[17.9rem] h-[18rem] z-50   lg:w-[26rem] lg:h-[23rem]">
                  <div className="  absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                  <div className="relative w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                    <img
                      src="https://cdn.discordapp.com/attachments/1096324843877703713/1171786378556755968/image.png?ex=655df21b&is=654b7d1b&hm=4fdcbbc60c82954a17bcc7e1736499c26ad377f3de74259d7974fe09760e34f6&
  "
                      alt="Your Image"
                      className="w-full h-full object-cover "
                    />
                    <p className="relative h-fit max-w-fit bottom-[18rem] left-[8rem] lg:bottom-[23rem] lg:left-[13rem] text-[1.5rem] z-10 font-dm-serif-display text-white text-left  opacity-[0.9]">
                      Jogging Track
                    </p>
                  </div>
                </div>

                {/* load more image*/}
                {images.slice(0, visibleImages).map((image, index) => (
                  <div
                    key={index}
                    className="relative bg-tan z-50 w-[17.9rem] h-[18rem] lg:w-[26rem] lg:h-[23rem]"
                  >
                    <div className="  absolute top-0 left-0  w-[19rem] h-[19rem] lg:w-[26rem] lg:h-[23rem] bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 z-[-10]"></div>
                    <div className="relative  w-[17.9rem] h-[18rem] lg:w-[26rem]  lg:h-[23rem] duration-[600ms]  transition-transform transform hover:translate-y-[-1rem] hover:translate-x-[0.9rem] hover:shadow-lg">
                      <img
                        src={image}
                        alt="Your Image"
                        className="w-full h-full object-cover "
                      />
                      <p
                        className={`relative max-w-fit  w-[20rem] h-fit bottom-[18rem]  lg:bottom-[23rem] text-[1.5rem] z-10 font-dm-serif-display  text-left  opacity-[0.9] ${
                          imageTitle[index] === "Landscape"
                            ? "text-black"
                            : "text-white"
                        } ${
                          imageTitle[index] === "Senior Citizens Area"
                            ? "left-[5rem] lg:left-[8rem]"
                            : "left-[10rem] lg:left-[13rem]"
                        }`}
                      >
                        {imageTitle[index]}
                      </p>
                    </div>
                  </div>
                ))}
                {visibleImages < images.length && (
                  <div
                    onClick={loadMoreImages}
                    className="relative transition-transform transform hover:scale-110 cursor-pointer rounded-[176px] w-[17rem] h-[3.69rem]  bg-white overflow-hidden text-justify text-[1.75rem] text-yellow-700 font-dm-serif-display"
                  >
                    <div className="absolute h-fit w-fit top-[0.59rem] left-[4rem]">
                      Load More
                    </div>
                    <img
                      className="absolute top-[0.4rem]  left-[13rem]  w-[2.81rem] h-[2.81rem] overflow-hidden"
                      alt=""
                      src="https://cdn.discordapp.com/attachments/1096324843877703713/1171809513389707344/image.png?ex=655e07a7&is=654b92a7&hm=f4963477d1be9275ed98848c87e5c151e1485efb7715a155047418f10256b11b&"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className=" sticky top-[9rem] lg:top-0  w-[20%] h-[60vh]  lg:w-[20%]  lg:h-[77vh] ">
              <div className="relative lg:left-[17rem] top-[6rem]  left-[6rem] lg:top-[3rem] h-full   font-dm-serif-display text-white text-right [transform:_rotate(90deg)] [transform-origin:0_0] opacity-[0.35]">
                <p className="  lg:w-[27rem]  lg:bg-none  lg:text-[6rem] h-fit text-[4.2rem]">
                  Amenities
                </p>
              </div>
            </div>
          </div>

          {/* load more */}
        </div>

        {/* 4th page */}
        <div
          id="section4"
          className="flex mt-9 bg-white h-auto md:h-auto lg:h-[90vh]"
        >
          <div className="sticky top-[21rem] xs:mb-[3rem] lg:top-0 w-[30%] bg-white h-[25vh] lg:h-[60vh]  ">
            <div className="absolute top-[15rem] lg:top-[24rem] w-[2rem] h-[12rem]   font-dm-serif-display text-darkkhaki text-left [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.32]">
              <p className="w-[20rem]  lg:w-[48rem] lg:text-[6rem] h-fit text-[4.2rem] ">
                Gallery
              </p>
            </div>
          </div>

          <div className=" flex justify-center w-[70%] h-max mb-9  lg:w-[80%]">
            <div className="mx-auto w-max grid gap-7 grid-cols-1 mb-[1rem] lg:grid-cols-2 h-auto">
              <div className="h-max w-[100%] mx-auto">
                <img
                  className="h-[19rem] max-w-[85%] lg:h-[30rem] lg:max-w-[828px] cover  rounded-lg"
                  src={selectedImage}
                  alt=""
                />
              </div>

              <div className="grid grid-rows-1 grid-cols-5 lg:grid-cols-2 gap-1 lg:gap-5 max-w-[85%] lg:max-w-[65%] h-[3rem] lg:h-max">
                {smallImages.map((image, index) => (
                  <div
                    key={index}
                    className="h-22  lg:h-max"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      className="h-[3.2rem] lg:h-auto max-w-full rounded-lg cursor-pointer hover:opacity-75 transition duration-300 ease-in-out"
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5th page */}
        <div id="section5" className="flex mt-9 bg-lightgray h-auto">
          <div className="w-[80%] h-auto ">
            <div className="relative mx-auto rounded-[32px] mt-8 bg-gray-200 md:w-[80%] w-[80%] lg:w-[70%] h-[3.69rem] overflow-hidden text-left text-[1.25rem] text-darkolivegreen font-dm-serif-display">
              <div
                className={`relative top-[0rem]  left-[0rem] rounded-[32px] w-1/3 h-[3.69rem] overflow-hidden cursor-pointer ${
                  is1BHKSelecteds
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={handle1BHKToggle}
              >
                <div className="xs:text-[0.8rem] mx-auto w-fit h-fit xs:pt-2 xs:pl-1 xs:text-left text-center  mt-3 pt-1">
                  Unit Plan
                </div>
              </div>
              <div
                className={` absolute top-[0rem]  xs:left-1/3 w-1/3  left-[8.5rem] rounded-[32px]  h-[3.69rem] overflow-hidden cursor-pointer ${
                  isJodiSelected
                    ? " bg-yellow-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={handleJodiToggle}
              >
                <div className="xs:text-[0.8rem] h-fit mx-auto w-fit sm:text-[0.9rem] xs:pt-2 xs:pl-0 xs:text-left  text-center  mt-3 pt-1">
                  Master Plan
                </div>
              </div>
              <div
                className={`absolute top-[0rem]  xs:left-2/3 w-1/3  left-[16rem] rounded-[32px]  h-[3.69rem] overflow-hidden cursor-pointer ${
                  is2BHKSelected
                    ? " bg-yellow-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={handle2BHKToggle}
              >
                <div className="xs:text-[0.8rem] h-fit mx-auto w-fit sm:text-[0.9rem] xs:pt-2 xs:pl-0 xs:text-left  text-center mt-3 pt-1">
                  Floor Plan
                </div>
              </div>
            </div>

            <div
              className={`grid grid-cols-1 h-fit gap-y-[0rem] lg:gap-y-[1rem] mt-10 mb-9 lg:mt-36  
          ${
            page3Selector === 2 || page3Selector==1
              ? "lg:ml-[1rem] ml-3 w-full  lg:grid-cols-1"
              : "lg:grid-cols-2 ml-4 lg:ml-12 "
          }`}
            >
              <div
                className={` lg:mb-0 mb-14  ${
                  page3Selector === 2  || page3Selector==1
                    ? "w-[18rem] h-[20rem] lg:w-[84rem] lg:h-auto"
                    : "w-[18rem] h-[20rem] lg:w-[37rem] lg:h-auto"
                }`}
              >
                {/* <img
                  onClick={() => {
                    console.log(page3ImgObj[page3Selector]);
                  }}
                  src={page3ImgObj[page3Selector][0]}
                  alt="Your Image"
                  className="w-[100%] h-full object-contain "
                /> */}
                <DialogWithImage url={page3ImgObj[page3Selector][0]} />
              </div>

              {page3ImgObj[page3Selector][1] && (
                <div className="mb-0 w-[18rem]  h-[20rem] lg:w-[37rem] lg:h-auto">
                  {/* <img
                    src={page3ImgObj[page3Selector][1]}
                    alt="Your Image"
                    className="w-[100%] h-full object-fill "
                  /> */}
                  <DialogWithImage url={page3ImgObj[page3Selector][1]} />
                </div>
              )}
            </div>
          </div>

          <div className=" sticky top-[16rem] lg:top-0  w-[20%] h-[58vh]  lg:h-[77vh] ">
            <div className="relative  lg:left-[17rem] top-[1rem]  left-[6rem] lg:top-[3rem] h-fit   font-dm-serif-display text-white  [transform:_rotate(90deg)] [transform-origin:0_0] opacity-[0.35]">
              <p className="  lg:w-[27rem] w-max  lg:bg-none  lg:text-[6rem] h-fit text-[5rem]">
                Unit Plans
              </p>
            </div>
          </div>
        </div>

        {/* 6th page */}
        <div
          id="section6"
          className="flex mt-9 bg-white h-auto min-h-max xs:min-h-[60rem]"
        >
          <div className="sticky top-14 lg:top-0 w-[20%] lg:w-[10%] bg-white h-[56vh] lg:h-[70vh]  ">
            <div className="absolute left-2 lg:left-0 top-[19rem] lg:top-[24rem] w-[2rem] h-[12rem]   font-dm-serif-display text-darkkhaki text-left [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.32]">
              <p className="w-[18rem]  lg:w-[48rem] lg:text-[6rem] h-fit text-[3rem] ">
                Location
              </p>
              <div className=" relative right-5 bottom-[3.2rem]  lg:bottom-[5rem] [transform:_rotate(-270deg)] [transform-origin:0_0] opacity-[1]  max-h-[5rem] h-auto w-[3rem] lg:w-[5rem]  ">
                <img
                  alt="nature"
                  className="h-[90%]  opacity-[1] max-h-[86%] lg:max-h-[86%] relative lg:right-4 w-[92%] lg:h-[90%] lg:max-w-[90%] bg-none rounded-lg  object-fill object-center"
                  src={`https://cdn.discordapp.com/attachments/1096324843877703713/1172578625502064710/image.png?ex=6560d3f1&is=654e5ef1&hm=ad2d2f45c7de1c86af2af9a7aaeacdca32b0beb6f4b8245becde3ab768976b50&`}
                />{" "}
              </div>
            </div>
          </div>

          <div className="w-[80%] h-auto  ">
            <div className="grid grid-cols-2 gap-x-4  lg:grid-cols-3 lg:gap-10">
              {locationImg.map((img, index) => {
                return (
                  <HoverImage
                    key={index}
                    img={img}
                    text={locationText[index]}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Tour Page */}
        <div
          id="section7"
          className="flex mt-9 bg-lightgray h-auto md:h-auto lg:h-auto"
        >
          <div className="w-[70%] lg:w-[80%] h-auto lg:h-[114vh] ">
            <div className="relative rounded-[32px] mt-8  bg-gray-200 md:w-[100%] w-[100%] lg:mx-auto lg:w-[80%] lg:h-auto  h-[2.69rem] overflow-hidden text-left text-[1.25rem] text-darkolivegreen font-dm-serif-display">
              <div
                className={`relative top-[0rem] left-[0rem] rounded-[32px] w-[50%] h-[2.69rem]  overflow-hidden cursor-pointer ${
                  isVirualTourSelected
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={handleToggleVirtualTour}
              >
                <div className="xs:text-[1.1rem]  mx-auto w-fit h-fit xs:pt-2 xs:pl-5 xs:text-left text-center pt-1">
                  Virtual Tour
                </div>
              </div>
              <div
                className={`absolute top-[0rem]  xs:left-[50%] w-[50%]  left-[8.5rem] rounded-[32px]  h-[2.69rem] overflow-hidden cursor-pointer ${
                  isVirualTourSelected
                    ? "bg-gray-200 text-black"
                    : "bg-yellow-600 text-white"
                }`}
                onClick={handleToggleVirtualTour}
              >
                <div className=" xs:text-[1.1rem] h-fit mx-auto w-fit  sm:text-[0.9rem] xs:pt-2 xs:pl-5 xs:text-left  text-center pt-1">
                  360 View
                </div>
              </div>
            </div>
            <div className="relative text-[1.75rem] left-5 mb-3 lg:w-[80%] w-[100%] h-auto font-dm-serif-display text-yellow-700 text-left mt-6">
              {isVirualTourSelected ? (
                <div className="relative lg:left-[7rem]  lg:w-[100%] mx-auto  text-[0.8em] h-fit font-dm-serif-display text-yellow-700 text-center">
                  <video
                    className="w-full h-full"
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1172621248740724826/WhatsApp_Video_2023-11-02_at_22.18.52_07ded8c6.mp4?ex=6560fba3&is=654e86a3&hm=f16e737b096b653b347a7c8a06cee6224c2024e2a40d37b4b9acdd15f55f6a56&"
                    controls
                  ></video>
                </div>
              ) : (
                <div className="relative w-[100%] mx-auto  h-fit font-dm-serif-display text-yellow-700 text-center">
                  <img
                    className="w-full h-auto lg:h-[80vh] object-contain"
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1172826016247455804/WhatsApp_Image_2023-11-02_at_22.18.53_146fd8f8.jpg?ex=6561ba58&is=654f4558&hm=674a997c1870328e84e78706899cc78f406e9999a7619249401a93a787ec72f0&"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>

          <div className="relative lg:left-[17rem] top-[0rem]  left-[6rem] lg:top-[0rem]   w-[20%] h-[50vh]  lg:w-[0%]  lg:h-[100vh] ">
            <div className="sticky  w-[20%] h-[50vh]  lg:w-[20%]  lg:h-[73vh]   font-dm-serif-display text-white text-right [transform:_rotate(90deg)] [transform-origin:0_0] opacity-[0.35]">
              <p className="  lg:w-[34rem] w-[20rem]  lg:bg-none  lg:text-[6rem] h-fit text-[3rem]">
                {isVirualTourSelected ? " Virtual Tour" : "360 view"}
              </p>
            </div>
          </div>
        </div>

        {/* scroll animation */}
        <div id="section8" className="flex flex-col h-[29vh] lg:h-[50vh]">
          <div className=" overflow-hidden">
            <div>
              <ScrollCarousel />
            </div>
          </div>

          <div className=" overflow-hidden">
            <div>
              <ScrollReverse />
            </div>
          </div>
        </div>

        {/* Statistics */}

        <div
          id="section9"
          className="flex mt-9 bg-lightgray h-auto md:h-auto lg:h-auto"
        >
          <div className=" w-[80%] h-min lg:h-auto">
            <div className="flex items-center justify-center h-[100%]  w-[100%]">
              <div className="grid  lg:grid-cols-2 h-fit my-[2rem] lg:mt-[7rem] ml-[4rem]  w-fit gap-9 lg:gap-24">
                <div className=" h-max">
                  <img
                    className="w-[100%] h-auto lg:h-[30rem] lg:w-[37rem]"
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1172801254121013288/2.png?ex=6561a348&is=654f2e48&hm=ddc89fe911dbce6259cbf828af8dbd68094cbc273eb24925ace8ff9d8aad0c1d&"
                    alt=""
                  />
                </div>
                <div className="h-max">
                  <img
                    className="w-[100%] h-auto lg:h-[30rem] lg:w-[37rem]"
                    src="https://cdn.discordapp.com/attachments/1096324843877703713/1172801254985060412/1.png?ex=6561a348&is=654f2e48&hm=66bdc945e2721525247c8b429498ff59fa208eab863ebe8deb3fb60d3377980b&"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:left-[17rem] top-[2rem]  left-[6rem] lg:top-[0rem]   w-[20%] h-[50vh]  lg:w-[0%]  lg:h-[100vh] ">
            <div className="sticky top-3 w-[20%] h-[40vh]  lg:w-[20%]  lg:h-[77vh]   font-dm-serif-display text-white text-right [transform:_rotate(90deg)] [transform-origin:0_0] opacity-[0.35]">
              <p className="  lg:w-[34rem]  lg:bg-none  lg:text-[6rem] h-fit text-[5rem]">
                Statistics
              </p>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div id="section11" className="flex mt-[3rem] mb-12 bg-white h-auto">
          <div className="sticky top-[6rem] lg:top-12 w-[20%] lg:w-[10%] bg-white h-[40vh] lg:h-[70vh]    ">
            <div className="absolute top-[19rem] lg:top-[29rem] w-[2rem] h-[12rem]   font-dm-serif-display text-darkkhaki text-left [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.32]">
              <p className="w-[18rem]  lg:w-[48rem] lg:text-[6rem] h-fit text-[4rem] ">
                Partners
              </p>
            </div>
          </div>

          <div className="w-[80%] h-auto ">
            <div className="mx-auto">
              <img
                src="https://cdn.discordapp.com/attachments/1096324843877703713/1172808040324546610/image.png?ex=6561a99a&is=654f349a&hm=e516fec81851b236f0cbe652d10a04a0ef24f037b77a6580688d09d24ed33b26&"
                alt=""
                className=" object-fill "
              />
            </div>
          </div>
        </div>

        {/* Contact */}

        <div
          className="h-auto w-full mx-auto bg-cover"
          style={{
            backgroundImage: `URL('https://cdn.discordapp.com/attachments/1096324843877703713/1175421149258186762/image.png?ex=656b2b40&is=6558b640&hm=f6b1014716ca2b1132faaffafda5922f54e8d978c2a10088a3c63adc9b7d7463&')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maxWidth: `100%`,
            // backgroundAttachment:"fixed"
          }}
        >
          <div className="h-auto">
            <div className="h-[100vh] w-[63%] flex flex-col lg:flex-row items-center justify-center mx-auto  gap-10 ">
              <div
                onClick={() => {
                  setIsPdfQuery(true);
                  setShowModal(true);

                  // download function
                }}
                className="relative rounded-[176px] bg-white w-[120%] lg:w-1/3 h-[4.69rem] overflow-hidden text-justify text-[1.35rem] text-yellow-700 font-dm-serif-display transition-transform transform hover:scale-110 cursor-pointer"
              >
                <div className="absolute top-[1.19rem] w-fit left-[2.25rem]">
                  Download Brochure
                </div>
                <img
                  className="absolute top-[0.94rem] left-[14.56rem] w-[2.81rem] h-[2.81rem] overflow-hidden"
                  alt=""
                  src="https://cdn.discordapp.com/attachments/1096324843877703713/1171809513389707344/image.png?ex=655e07a7&is=654b92a7&hm=f4963477d1be9275ed98848c87e5c151e1485efb7715a155047418f10256b11b&"
                />
              </div>

              <div
                onClick={() => {
                  setShowModal(true);

                  // download function
                }}
                className="relative rounded-[176px] bg-white w-[120%] lg:w-1/3 h-[4.69rem] overflow-hidden text-justify text-[1.35rem] text-yellow-700 font-dm-serif-display transition-transform transform hover:scale-110 cursor-pointer"
              >
                <div className="absolute top-[1.19rem] left-[5.25rem] ">
                  Enquire Now
                </div>
                <img
                  className="absolute top-[0.94rem] left-[14.56rem] w-[2.81rem] h-[2.81rem] overflow-hidden"
                  alt=""
                  src="https://cdn.discordapp.com/attachments/1096324843877703713/1171809513389707344/image.png?ex=655e07a7&is=654b92a7&hm=f4963477d1be9275ed98848c87e5c151e1485efb7715a155047418f10256b11b&"
                />
              </div>

              <div
                onClick={handleWhatsAppClick}
                className="relative rounded-[176px] bg-white w-[120%] lg:w-1/3 h-[4.69rem] overflow-hidden text-justify text-[1.35rem] text-yellow-700 font-dm-serif-display transition-transform transform hover:scale-110 cursor-pointer"
              >
                <div className="absolute top-[1.19rem] left-[5.25rem]">
                  Contact Us
                </div>
                <img
                  className="absolute top-[0.94rem] left-[14.56rem] w-[2.81rem] h-[2.81rem] overflow-hidden"
                  alt=""
                  src="https://cdn.discordapp.com/attachments/1096324843877703713/1171809513389707344/image.png?ex=655e07a7&is=654b92a7&hm=f4963477d1be9275ed98848c87e5c151e1485efb7715a155047418f10256b11b&"
                />
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="h-[40vh] w-fit mx-auto mt-7 ">
          <img
            className="h-auto w-full lg:w-[1400px] mx-auto  object-contain"
            src="https://cdn.discordapp.com/attachments/1096324843877703713/1172828633002410024/Untitled_design_8.png?ex=6561bcc8&is=654f47c8&hm=82a712b5e813de3f5374ba0b6f13314c8719265dc7d45bde91c9cf1972a024c1&"
            alt=""
          />
        </div>
      </div>

      {showAlert && (
        <div
          className="fixed  top-5 left-5 opacity-0 transition-opacity ease-in-out duration-500"
          style={{ opacity: 1 }}
        >
          <div className="bg-green-500 h-5 w-fit mx-auto text-white px-4 py-2 rounded">
            Thank you for submitting the form!
          </div>
        </div>
      )}

      <Modal
        isVisible={showModal}
        isPdf={isPdfQuery}
        setPdf={setIsPdfQuery}
        setShowAlert={setShowAlert}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </Fragment>
  );
}
