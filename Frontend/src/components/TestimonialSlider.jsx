import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight,FaQuoteLeft } from 'react-icons/fa'; // React Icons for buttons

const testimonials = [
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    image: "https://i.postimg.cc/mgp4pfz5/profile-image-1.png",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu tur",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image: "https://i.postimg.cc/PfSSwtB9/profile-image-2.png",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus ma",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image: "https://i.postimg.cc/W4mnbjG9/profile-image-3.png",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem",
  },
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    image: "https://i.postimg.cc/mgp4pfz5/profile-image-1.png",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu tur",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image: "https://i.postimg.cc/PfSSwtB9/profile-image-2.png",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus ma",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image: "https://i.postimg.cc/W4mnbjG9/profile-image-3.png",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem",
  },
 
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex items-center justify-center gap-10 mt-10 mb-10">
      <div className="w-4/5 max-w-5xl p-8 rounded-lg relative bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
          {[index, (index + 1) % testimonials.length, (index + 2) % testimonials.length].map((i) => (
            <div key={i} className=" flex flex-col items-center justify-center shadow-md p-4 ">
              <img
                src={testimonials[i].image}
                alt={testimonials[i].name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-blue-900 font-bold">
                {testimonials[i].name}
              </h3>
              <h6 className="text-gray-400 mb-4">{testimonials[i].job}</h6>
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 left-0 text-gray-400 text-xl" />
                <p className="text-gray-600 pl-8 pr-4">{testimonials[i].testimonial}</p>
              </div>

            </div>
          ))}
        </div>
        <button
          onClick={prevTestimonial}
          className="absolute -left-3 top-1/2 transform -translate-y-1/2 text-blue-600 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-blue-600 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow"
        >
         <FaChevronRight/>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;


