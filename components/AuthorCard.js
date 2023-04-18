import PropTypes from 'prop-types';

export default function AuthorCard({ authorObj }) {
  return (
    <>
      <div
        className="card"
        style={{
          width: '18rem',
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{authorObj.first_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{authorObj.last_name}</h6>
          <p className="card-text">{authorObj.email}</p>
        </div>
      </div>;
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
