import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

export default function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name}?`)) {
      deleteSingleAuthor(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card
        className="card"
        style={{
          width: '18rem',
          margin: '10px',
        }}
      >
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{authorObj.first_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{authorObj.last_name}</Card.Subtitle>
          <Card.Text style={{ color: 'black' }}>{authorObj.email}</Card.Text>
          <Link href={`/author/${authorObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    firebaseKey: PropTypes.string,
    favorite: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

AuthorCard.defualtProp = {
  authorObj: PropTypes.shape({
    email: 'author email',
    first_name: 'author first name',
    last_name: 'author last name',
  }),
};
