import React, { useContext, useState, useEffect, useRef } from 'react';
import { ShopContext } from '../context/ShopContext';
import gsap from 'gsap';

const categories = ["Bedroom", "Washroom", "Lounge", "Office", "Kitchen"];

const Projects = () => {
  const { products } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const containerRef = useRef(null);

  // Filter projects
  const filteredProjects = products
    .filter(project => project.category && project.category.toLowerCase() === selectedCategory.toLowerCase())
    .slice(0, 10);

  // GSAP animation on category change
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
          Explore our interior studio projects by category. Click a category to view up to 10 projects for Bedroom, Washroom, Lounge, Office, or Kitchen.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-200 ${selectedCategory === cat ? 'bg-black text-white' : 'bg-white text-black border-black hover:bg-gray-200'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No projects found.</div>
        ) : (
          filteredProjects.map(project => (
            <div key={project._id} className="border-b-2 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white flex flex-col">
              <div className="w-full h-74 bg-gray-100 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
                <img 
                  src={Array.isArray(project.image) ? project.image[0] : project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="font-bold text-lg mb-2">{project.name}</h2>
                <DescriptionWithSeeMore text={project.description} />
              </div>
            </div>
          ))
        )}
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
