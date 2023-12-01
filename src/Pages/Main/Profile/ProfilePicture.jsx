import React, {useContext, useRef, useState} from "react";
import editcamera from "../../../Images/camera.png";
import { DpContext } from "../../../LayoutFile/MainLayout";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProfilePicture = ({handleprofilepicC}) => {
//    const [Currentdp, setCurrentdp] = useState(bigdp);
   const inputref = useRef();
   const {CurrentDp, setCurrentDp,dp} = useContext(DpContext)

   const handleclick = () => {
      inputref.current.click();
   };
   const handlechange = (event) => {
      const imgfile = event.target.files[0];
      if (imgfile) {
         const imageSrc = URL.createObjectURL(imgfile);
         //     console.log(imageSrc) here  i can perform actions with this, like uploading to a server
         setTimeout(() => {
            setCurrentDp(imageSrc);
            console.log('u changed your dp')
         }, 1500);
      } else {
         setCurrentDp(dp);
         console.log('u removed ur dp')
      }
   };

   return (
      <>
         <img src={CurrentDp} alt="bigdp" className="bg-[#fbb03b] rounded-full w-[100%] h-[100%] object-cover" onClick={handleprofilepicC}/>
         <button className="absolute  top-[3.9rem] sm:top-[5.5rem] right-3 bg-[#A303A0] p-2 rounded-full" onClick={handleclick}>
            <LazyLoadImage src={editcamera} alt="" className="w-4" />
         </button>
         <input type="file" name="dp" id="dp" accept="/image*" ref={inputref} className="hidden" onChange={handlechange} />
      </>
   );
};

export default ProfilePicture;
