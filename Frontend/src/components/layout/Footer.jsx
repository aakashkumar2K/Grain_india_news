// import React from 'react';

// export const Footer = () => {
//   return (
//     <footer className="w-full  bg-slate-900 text-white rounded-t-lg mt-16 fixed bottom-0">
//       <div className="container mx-auto flex justify-between py-12">
//         <div className="content_1">
//           <img src="/logo.webp" alt="logo"  className="w-40" />
//           <p className="text-gray-300 my-10 text-lg">
//             Welcome to Thapa EcomStore, your ultimate destination for cutting-edge gadgets!
//           </p>
//           <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" className="w-60" />
//         </div>
//         <div className="content_2">
//           <h4 className="text-white font-medium tracking-wide mb-10 text-xl">SHOPPING</h4>
//           <a href="#" className="block text-gray-300 mb-6 text-lg">Computer Store</a>
//           <a href="#" className="block text-gray-300 mb-6 text-lg">Laptop Store</a>
//           <a href="#" className="block text-gray-300 mb-6 text-lg">Accessories</a>
//           <a href="#" className="block text-gray-300 mb-6 text-lg">Sales & Discount</a>
//         </div>
//         <div className="content_3">
//           <h4 className="text-white font-medium tracking-wide mb-10 text-xl">Experience</h4>
//           <a href="./contact.html" className="block text-gray-300 mb-6 text-lg">Contact Us</a>
//           <a href="#" target="_blank" className="block text-gray-300 mb-6 text-lg">Payment Method</a>
//           <a href="#" target="_blank" className="block text-gray-300 mb-6 text-lg">Delivery</a>
//           <a href="#" target="_blank" className="block text-gray-300 mb-6 text-lg">Return and Exchange</a>
//         </div>
//         <div className="content_4">
//           <h4 className="text-white font-medium tracking-wide mb-10 text-xl">NEWSLETTER</h4>
//           <p className="text-gray-300 mb-10 text-lg">
//             Be the first to know about new arrivals, sales & promos!
//           </p>
//           <div className="f-mail flex justify-between items-center">
//             <input 
//               type="email" 
//               placeholder="Your Email" 
//               className="bg-gray-700 border-none text-white outline-none py-3 px-2 w-full"
//             />
//             <i className="bx bx-envelope text-white ml-4"></i>
//           </div>
//           <hr className="my-4 border-gray-500" />
//         </div>
//       </div>
//       <div className="f-design w-full text-center text-white">
//         <div className="f-design-txt border-t border-gray-500 py-4 text-gray-500">
//           <p>Design and Code by Thapa Technical</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsFillMapFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex flex-col items-center md:items-start">
          <img src="/logoD.webp" alt="IGrain India Logo" className="w-48" />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
            
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Select Report Type</a></li>
              <li><a href="#" className="hover:underline">Daily Report</a></li>
              <li><a href="#" className="hover:underline">Weekly Report</a></li>
              <li><a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1 mt-6 rounded-md">RSS Feed</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Research</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Spot Market Prices</a></li>
              <li><a href="#" className="hover:underline">Research Reports</a></li>
              <li><a href="#" className="hover:underline">News & Commentaries</a></li>
              <li><a href="#" className="hover:underline">Technical Analysis</a></li>
            </ul>
          </div>
          <div className=''>
            <h3 className="text-xl font-bold mb-4">Locate Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <BsFillMapFill className="mr-2" />
                <span className=''>B 22, SECTOR SWARNNAGRI, GREATER NOIDA</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2" />
                <span>igrainind@gmail.com</span>
              </li>
              <li className="flex items-center">
                <AiOutlinePhone className="mr-2" />
                <span>+919350141815</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4 md:mt-4">
          <FaTwitter className="hover:text-blue-500  text-lg" />
          <FaFacebook className="hover:text-blue-600  text-lg" />
          <FaInstagram className="hover:text-red-500  text-lg" />
          <FaYoutube className="hover:text-red-600  text-lg" />
        </div>
          </div>
        </div>
      
      </div>
    </footer>
  );
};
