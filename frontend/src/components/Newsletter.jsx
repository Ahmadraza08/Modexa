import React from 'react';

const SocialFollow = () => {
  return (
    <div className="text-center my-8">
      <p className="text-2xl font-medium text-gray-800 mb-4">Follow us on</p>
      <div className="flex justify-center gap-6">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/modexa.interiors/"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-2xl bg-black text-white hover:bg-pink-600 px-6 py-3 rounded-lg transition"
        >
          Instagram
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/people/Modexa-Interior/61584910341532/#"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-2xl bg-black text-white hover:bg-blue-700 px-6 py-3 rounded-lg transition"
        >
          Facebook
        </a>
      </div>
    </div>
  );
};

export default SocialFollow;
