import React from "react";
import {
  // Button,
  Dialog,
  // DialogHeader,
  DialogBody,
  // DialogFooter,
  // Avatar,
  // IconButton,
  // Typography,
  Card,
} from "@material-tailwind/react";
 
export default function DialogWithImage(props) {
    
    const theme = {
        dialog: {
          defaultProps: {
            size: "md",
            dismiss: {},
            animate: {
              unmount: {},
              mount: {},
            },
            className: "",
          },
          valid: {
            sizes: ["xs", "sm", "md", "lg", "xl", "xxl"],
          },
          styles: {
            base: {
              backdrop: {
                display: "grid",
                placeItems: "place-items-center",
                position: "fixed",
                top: 0,
                left: 0,
                width: "w-[100%]",
                height: "h-screen",
                backgroundColor: "bg-none",
                backgroundOpacity: "bg-opacity-60",
                backdropFilter: "backdrop-blur-sm",
              },
              container: {
                position: "relative",
                bg: "bg-white",
                m: "m-4",
                borderRadius: "rounded-lg",
                boxShadow: "shadow-2xl",
                color: "text-blue-gray-500",
                fontSmoothing: "antialiased",
                fontFamily: "font-sans",
                fontSize: "text-base",
                fontWeight: "font-light",
                lineHeight: "leading-relaxed",
              },
            },
            sizes: {
              xs: {
                width: "w-[5%] md:w-3/5 lg:w-2/5 2xl:w-1/4",
                minWidth: "min-w-[5%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%]",
                maxWidth: "max-w-[5%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%]",
              },
              sm: {
                width: "w-[5%] md:w-2/3 lg:w-2/4 2xl:w-1/3",
                minWidth: "min-w-[5%] md:min-w-[66.666667%] lg:min-w-[50%] 2xl:min-w-[33.333333%]",
                maxWidth: "max-w-[5%] md:max-w-[66.666667%] lg:max-w-[50%] 2xl:max-w-[33.333333%]",
              },
              md: {
                width: "w-[5%] md:w-3/4 lg:w-3/5 2xl:w-2/5",
                minWidth: "min-w-[50%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%]",
                maxWidth: "max-w-[5%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]",
              },
              lg: {
                width: "w-[60%] md:w-5/6 lg:w-3/4 2xl:w-3/5",
                minWidth: "min-w-[50%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]",
                maxWidth: "max-w-[50%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]",
              },
              xl: {
                width: "w-50% md:w-5/6 2xl:w-3/4",
                minWidth: "min-w-[50%] md:min-w-[83.333333%] 2xl:min-w-[75%]",
                maxWidth: "max-w-[95%] md:max-w-[83.333333%] 2xl:max-w-[75%]",
              },
              xxl: {
                display: "flex",
                flexDirection: "flex-col",
                width: "w-screen",
                minWidth: "min-w-[100vw]",
                maxWidth: "max-w-[100vw]",
                height: "h-screen",
                minHeight: "min-h-[100vh]",
                maxHeight: "max-h-[100vh]",
                m: "m-0",
                borderRadius: "rounded-none",
              },
            },
          },
        },
      };
      
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  const ImgStyle = { objectFit: "fill",maxWidth:`100%`,height:`100%`};

 
  return (
    <>
      <Card
        className="h-[100%] w-[100%]  lg:h-[95%] lg:w-[98%] bg-none cursor-pointer overflow-hidden transition-opacity hover:opacity-94"
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="w-full object-contain "
        //   className="h-[1580px] w-[1600px] object-cover object-center"
          src={props.url}
          style={ImgStyle}
        />
      </Card>
       <Dialog size="xl"  style={theme.dialog.styles} onClick={handleOpen}  className="  bg-none max-h-[30rem] lg:max-h-[40rem]   " open={open} handler={handleOpen}>
        {/* <DialogHeader className="justify-between relative">
          <div className="absolute h-[10rem] w-[10rem] flex items-center gap-3">
            <Avatar
              size="xs"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Tania Andrew
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                @emmaroberts
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              size="sm"
              color={isFavorite ? "red" : "blue-gray"}
              onClick={handleIsFavorite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </IconButton>
            <Button color="gray" size="sm">
              Free Download
            </Button>
          </div>
        </DialogHeader> */}
        <DialogBody className="flex  items-baseline lg:items-start justify-center   pb-10">
          <img
            alt="nature"
            className="h-auto max-h-[48vh] lg:max-h-[86%] relative right-4 w-[92%] lg:h-[90%] lg:max-w-[90%] bg-none rounded-lg  object-fill object-center"
            src={props.url}
          />
        </DialogBody>
        {/* <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Views
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                44,082,044
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Downloads
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                553,031
              </Typography>
            </div>
          </div>
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="mr-5 flex items-center"
          >
            Share
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
}