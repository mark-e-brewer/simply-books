import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  const getAllTheBooks = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    getAllTheBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={authorDetails.image} alt={authorDetails.title} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h3>
            {authorDetails.first_name} {authorDetails.last_name}
          </h3>
          <h5>
            {authorDetails.email}
          </h5>
          {authorDetails?.books?.map((bookObjs) => <BookCard bookObj={bookObjs} onUpdate={getAllTheBooks} />)}
        </div>
      </div>
    </>
  );
}
