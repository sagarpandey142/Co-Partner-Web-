// Components/RatingsAndReviewsPage.tsx
import React from 'react';

interface Review {
  id: number;
  name: string;
  designation: string;
  rating: number;
  comment: string;
  profilePic: string;
}

const RatingsAndReviewsPage: React.FC = () => {
  // Sample data for ratings and reviews
  const reviews: Review[] = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      rating: 4,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'Project Manager',
      rating: 5,
      comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      name: 'Sam Wilson',
      designation: 'UI/UX Designer',
      rating: 5,
      comment: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      profilePic: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  return (
    <div className="bg-gray-200 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Clients Testimonial</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Decreased gap from 6 to 4 */}
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-3"> {/* Decreased padding from p-4 to p-3 */}
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 fill-current mr-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1l2.35 6.06h6.41l-5.27 4.48L15.68 19 10 15.85 4.32 19l1.19-7.46L3.24 7.06h6.4L10 1zm0 0z"/>
                </svg>
                <p className="text-gray-600 mb-2">{review.rating}/5</p> {/* Decreased bottom margin from mb-4 to mb-2 */}
              </div>
              <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
              <div className="flex items-center mt-3"> {/* Decreased top margin from mt-4 to mt-3 */}
                <img src={review.profilePic} alt={review.name} className="w-10 h-10 rounded-full mr-3" /> {/* Decreased image size from w-12 h-12 to w-10 h-10 */}
                <div>
                  <h2 className="text-lg font-semibold">{review.name}</h2>
                  <p className="text-sm text-gray-600">{review.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsAndReviewsPage;
