import "./App.css";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function App() {
  const slides = [
    {
      url: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMTI5Mjk0MTAxNjUtaW1hZ2Uta3liZW9jNjEuanBn.jpg",
    },
    {
      url:"https://st.depositphotos.com/1359043/2279/i/450/depositphotos_22795776-stock-photo-violet-butterfly-isolated-on-white.jpg",
    },
    {
      url:"https://t3.ftcdn.net/jpg/00/41/88/16/360_F_41881642_B921LICYEF29yv5Conp3tFQOZFdU3Rn4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)
  
  const handleLeftClick=()=>{
    const isFirstSlide = currentIndex === 0;//0===0
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;//condition ? if true : else false
    setCurrentIndex(newIndex);
  };

  const handleRightClick=()=>{
    const isLastIndex = currentIndex === slides.length -1;//
    console.log(isLastIndex,"isLastIndex")
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    console.log(newIndex,"newIndex")

    setCurrentIndex(newIndex)

  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleRightClick();
    }, 3000); // Change slide every 3 second

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[780px] w-fullm-auto relative group ">
      <div className="w-full h-full bg-no-repeat bg-center"
      style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
      <div className="top-[50%] absolute left-5 text-2xl text-black cursor-pointer ">
      <FaArrowLeft onClick={handleLeftClick}/>
      </div>
      <div className="top-[50%] absolute right-5 text-2xl text-black cursor-pointer">
       <FaArrowRight onClick={handleRightClick}/> 
     </div>
      
      
      
      
      
     
     
    </div>
  );
}

export default App;

