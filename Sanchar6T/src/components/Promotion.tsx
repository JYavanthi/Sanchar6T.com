// const Promotion = () => {
//   return (
//     <section className="relative bg-[#226cb2] w-full max-w-[1976px] h-[256px] mx-auto overflow-visible">
//       <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center px-12 gap-x-8">
        
//         {/* Left Text */}
//         <div className="flex flex-col justify-center h-full">
//           <h1 className="text-[30px] font-bold text-white mb-4 leading-snug">
//             25,000+ people booked from Bengaluru
//           </h1>
//           <h1 className="text-[35px] font-light text-white leading-snug">
//             on <span className="font-semibold">Sanchar</span>
//             <span className="font-semibold">6</span>
//             <span className="font-semibold">T</span> last month
//           </h1>
//         </div>

//         {/* Right Image */}
//         <div className="relative flex justify-end h-full pr-8">
//           <img
//             src="https://productcatalo.my.canva.site/buses/_assets/media/1840674597058f9cf85ebbf4ce59e301.png"
//             alt="Promotion Banner"
//             className="absolute bottom-[10px] right-0 h-[330px] object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Promotion;


const Promotion = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1976px] h-[206px] bg-[#226cb2] overflow-visible max-md:h-auto max-md:py-5">
      
      <div className="grid h-full grid-cols-2 items-center gap-8 px-12 max-md:grid-cols-1 max-md:px-4 max-md:text-center">
        
        {/* LEFT */}
        <div className="flex h-full w-[768px] flex-col justify-center max-md:w-full">
          <h1 className="mb-4 text-[43px] font-bold leading-[1.3] text-white max-md:text-[22px]">
            25,000+ people booked from Bengaluru
          </h1>

          <h1 className="text-[35px] font-light leading-[1.3] text-white max-md:text-[26px]">
            on{" "}
            <span className="font-semibold">Sanchar</span>
            <span className="font-semibold">6</span>
            <span className="font-semibold">T</span> last month
          </h1>
        </div>

        {/* RIGHT */}
        <div className="relative flex h-full justify-end pr-8 max-md:justify-center max-md:pr-0 max-md:mt-5">
          <img
            src="https://productcatalo.my.canva.site/buses/_assets/media/1840674597058f9cf85ebbf4ce59e301.png"
            alt="Promotion Banner"
            className="absolute bottom-[10px] right-0 h-[280px] object-contain max-md:relative max-md:h-[200px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Promotion;
