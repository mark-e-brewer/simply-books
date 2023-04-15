// import PropTypes from 'prop-types';
import { getAuthors } from '../api/authorData';

export default function AuthorCard() {
  return (
    <>
      <div>hello{console.warn(getAuthors('70kDap92AcX5OhSu7Mh9v407drz2'))}</div>
    </>
  );
}

// AuthorCard.propTypes = {
//   authorObj: PropTypes.shape({
//     email: PropTypes.string,
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//   }),
// };

// AuthorCard.defualtProp = {
//   authorObj: PropTypes.shape({
//     email: 'author email',
//     first_name: 'author first name',
//     last_name: 'author last name',
//   }),
// };

// { authorObj } add
