// import React, { useContext, useState, useEffect, useRef } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import gsap from 'gsap';

// const categories = ["Bedroom", "Washroom", "Lounge", "Office", "Kitchen"];

// const Projects = () => {
//   const { products } = useContext(ShopContext);
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const containerRef = useRef(null);

//   // Filter projects
//   const filteredProjects = products
//     .filter(project => project.category && project.category.toLowerCase() === selectedCategory.toLowerCase())
//     .slice(0, 10);

//   // GSAP animation on category change
//   useEffect(() => {
//     if (containerRef.current) {
//       gsap.fromTo(
//         containerRef.current.children,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
//       );
//     }
//   }, [selectedCategory]);

//   return (
//     <div className='my-10'>
//       {/* Title */}
//       <div className='text-center py-8 text-3xl'>
//         <span className='font-bold'>OUR</span> <span className='text-gray-600'>PROJECTS</span>
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2'>
//           Explore our interior studio projects by category. Click a category to view up to 10 projects for Bedroom, Washroom, Lounge, Office, or Kitchen.
//         </p>
//       </div>

//       {/* Category Tabs */}
//       <div className="flex flex-wrap gap-2 mb-6 justify-center">
//         {categories.map(cat => (
//           <button
//             key={cat}
//             className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-200 ${selectedCategory === cat ? 'bg-black text-white' : 'bg-white text-black border-black hover:bg-gray-200'}`}
//             onClick={() => setSelectedCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Projects Grid */}
//       <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {filteredProjects.length === 0 ? (
//           <div className="col-span-full text-center text-gray-500">No projects found.</div>
//         ) : (
//           filteredProjects.map(project => (
//             <div key={project._id} className="border-b-2 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white flex flex-col">
//               <div className="w-full h-74 bg-gray-100 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
//                 <img 
//                   src={Array.isArray(project.image) ? project.image[0] : project.image} 
//                   alt={project.name} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-4 flex-1 flex flex-col">
//                 <h2 className="font-bold text-lg mb-2">{project.name}</h2>
//                 <DescriptionWithSeeMore text={project.description} />
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// function DescriptionWithSeeMore({ text }) {
//   const [expanded, setExpanded] = React.useState(false);
//   const limit = 100;
//   if (!text) return null;
//   if (text.length <= limit) return <p className="text-gray-600 text-sm flex-1">{text}</p>;
//   return (
//     <p className="text-gray-600 text-sm flex-1">
//       {expanded ? text : text.slice(0, limit) + '...'}
//       <button
//         className="ml-2 text-blue-600 hover:underline text-xs"
//         type="button"
//         onClick={() => setExpanded(e => !e)}
//       >
//         {expanded ? 'See less' : 'See more'}
//       </button>
//     </p>
//   );
// }

// export default Projects;
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { assets } from '../assets/assets';

const categories = ["Bedroom", "Washroom", "Lounge", "Office", "Kitchen"];

const staticProjects = [
  // Bedroom
  { name: "Luxury Bedroom 1", category: "Bedroom", image: assets.p_img1, description: "Elegant bedroom with modern touch." },
  { name: "Luxury Bedroom 2", category: "Bedroom", image: assets.p_img3, description: "Cozy and stylish bedroom." },
  { name: "Luxury Bedroom 3", category: "Bedroom", image: assets.p_img4, description: "Minimalist bedroom design." },
  { name: "Luxury Bedroom 4", category: "Bedroom", image: assets.p_img5, description: "Classic bedroom with warm tones." },
  { name: "Luxury Bedroom 5", category: "Bedroom", image: assets.p_img9, description: "Spacious bedroom with natural light." },
  // Washroom
  { name: "Washroom 1", category: "Washroom", image: assets.p_img9, description: "Minimalist washroom with functionality." },
  { name: "Washroom 2", category: "Washroom", image: assets.p_img10, description: "Elegant tiles and fixtures." },
  { name: "Washroom 3", category: "Washroom", image: assets.p_img13, description: "Compact yet stylish design." },
  { name: "Washroom 4", category: "Washroom", image: assets.p_img14, description: "Luxury spa-style washroom." },
  { name: "Washroom 5", category: "Washroom", image: assets.p_img15, description: "Modern aesthetic washroom." },
  // Lounge
  { name: "Lounge 1", category: "Lounge", image: assets.p_img16, description: "Relaxing lounge with comfy sofas." },
  { name: "Lounge 2", category: "Lounge", image: assets.p_img17, description: "Open space with natural light." },
  { name: "Lounge 3", category: "Lounge", image: assets.p_img18, description: "Modern lounge area with minimal décor." },
  { name: "Lounge 4", category: "Lounge", image: assets.p_img20, description: "Classic lounge setup for guests." },
  { name: "Lounge 5", category: "Lounge", image: assets.p_img21, description: "Cozy lounge with warm lighting." },
  // Office
  { name: "Office 1", category: "Office", image: assets.p_img1, description: "Professional office with ergonomic furniture." },
  { name: "Office 2", category: "Office", image: assets.p_img3, description: "Open-plan workspace." },
  { name: "Office 3", category: "Office", image: assets.p_img4, description: "Minimalist home office." },
  { name: "Office 4", category: "Office", image: assets.p_img5, description: "Corporate office interior." },
  { name: "Office 5", category: "Office", image: assets.p_img9, description: "Stylish office setup for startups." },
  // Kitchen
  { name: "Kitchen 1", category: "Kitchen", image: assets.p_img1, description: "Modern kitchen with island." },
  { name: "Kitchen 2", category: "Kitchen", image: assets.p_img3, description: "Fully equipped kitchen." },
  { name: "Kitchen 3", category: "Kitchen", image: assets.p_img4, description: "Compact kitchen design." },
  { name: "Kitchen 4", category: "Kitchen", image: assets.p_img5, description: "Luxury kitchen with marble finish." },
  { name: "Kitchen 5", category: "Kitchen", image: assets.p_img9, description: "Open kitchen with dining area." },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("Bedroom");

  const filteredProjects = staticProjects.filter(
    project => project.category === selectedCategory
  );

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [selectedCategory]);

  return (
    <div className='my-10'>
      {/* Title */}
      <div className='text-center py-8 text-3xl'>
        <span className='font-bold'>OUR</span> <span className='text-gray-600'>PROJECTS</span>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2'>
          Explore our interior studio projects. Click a category to view projects.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-200 ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black border-black hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="border-b-2 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white flex flex-col">
            <div className="w-full h-74 bg-gray-100 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="font-bold text-lg mb-2">{project.name}</h2>
              <DescriptionWithSeeMore text={project.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function DescriptionWithSeeMore({ text }) {
  const [expanded, setExpanded] = React.useState(false);
  const limit = 100;
  if (!text) return null;
  if (text.length <= limit) return <p className="text-gray-600 text-sm flex-1">{text}</p>;
  return (
    <p className="text-gray-600 text-sm flex-1">
      {expanded ? text : text.slice(0, limit) + '...'}
      <button
        className="ml-2 text-blue-600 hover:underline text-xs"
        type="button"
        onClick={() => setExpanded(e => !e)}
      >
        {expanded ? 'See less' : 'See more'}
      </button>
    </p>
  );
}

export default Projects;
