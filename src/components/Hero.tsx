


// import Image from 'next/image';
// import { FaArrowDown } from 'react-icons/fa';
// import Link from 'next/link';

// const Hero: React.FC = () => {
//   return (
//     <div className="animate-slide-left h-full">
//       <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">
//         <Image
//           src="/images/bg.jpg"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           className="opacity-30"
//         />

//         <div className="absolute inset-0 flex justify-center items-center">
//           <div className="w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-50 blur-2xl"></div>
//           <div className="w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-ping opacity-30 blur-3xl ml-20"></div>
//         </div>

//         <div className="z-10 text-center px-4 mb-12 md:px-8 lg:px-16">
//           <h1 className="text-3xl md:text-7xl lg:text-7xl font-extrabold leading-tight mb-6 mt-14 animate-fade-in">
//             <br /> Hey <br /> I <span className="text-teal-500">am Iqra </span>
//           </h1>

//           <div className="flex justify-center mt-6 mb-8">
//             <Image
//               src="/images/iqra.jpg"
//               alt="Profile Picture"
//               width={250}
//               height={250}
//               className="rounded-full border-4 border-white shadow-lg"
//             />
//           </div>

//           <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl animate-fade-in font-poppins font-semibold tracking-wide leading-relaxed">
//             I am a web developer specializing in creating pixel perfect{' '}
//             <span className="text-teal-500">responsive and visually appealing designs </span>
//             <br />
//             Lets bring creativity to the next level
//           </p>

//           <div className="flex justify-center mb-28">
//             <Link
//               href="#explore-section"
//               className="flex items-center text-white border-2 border-teal-500 px-6 py-3 rounded-full font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-700 shadow-lg"
//               style={{ animation: 'pulse 2s infinite' }}
//             >
//               <span className="mr-2">Explore Now</span>
//               <FaArrowDown size={24} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

























import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />

      {/* Gradient Circles */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-50 blur-2xl"></div>
        <div className="w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-ping opacity-30 blur-3xl ml-20"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-10 py-8 md:py-16 space-y-6  max-h-full">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hey <br /> I <span className="text-teal-500">am Aiza Nadeem</span>
        </h1>

        {/* Profile Picture */}
        <div className="flex justify-center">
          <Image
            src="/images/iqra.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl font-poppins font-semibold tracking-wide leading-relaxed">
          I am a web developer specializing in creating pixel-perfect{' '}
          <span className="text-teal-500">responsive and visually appealing designs</span> <br />
          Lets bring creativity to the next level
        </p>

        {/* Explore Button */}
        <div className="flex justify-center w-full">
          <Link
            href="#explore-section"
            className="flex items-center text-white border-2 border-teal-500 px-6 py-3 rounded-full font-semibold text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-700 shadow-lg"
          >
            <span className="mr-2">Explore Now</span>
            <FaArrowDown size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
