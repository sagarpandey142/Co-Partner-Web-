// Components/RatingsAndReviewsPage.tsx
import React from 'react';

const RatingsAndReviewsPage: React.FC = () => {
  // Sample data for ratings and reviews
  const reviews = [
    { id: 1, name: 'John Doe', rating: 4, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Jane Smith', rating: 5, comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 2, name: 'Jane Smith', rating: 5, comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 -top-80">
      <h1 className="text-3xl font-bold mb-8">Ratings and Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-md font-semibold">{review.name}</h2>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, index) => (
                    <svg key={index} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1l2.35 6.06h6.41l-5.27 4.48L15.68 19 10 15.85 4.32 19l1.19-7.46L3.24 7.06h6.4L10 1zm0 0z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">{review.rating}/5</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsAndReviewsPage;
