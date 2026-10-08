import Spinner from 'react-bootstrap/Spinner';
import '../styles/Spinner.css'

function BasicExample() {
  return (
    <Spinner className="spinner" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default BasicExample;