import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function AuthorCard({ authorObj }) {
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
  }).isRequired,
};

AuthorCard.defualtProp = {
  authorObj: PropTypes.shape({
    email: 'author email',
    first_name: 'author first name',
    last_name: 'author last name',
  }),
};
