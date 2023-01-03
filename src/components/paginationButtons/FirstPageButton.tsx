import Button from 'react-bootstrap/Button';
import PaginationProps from '../../types/paginationProps.type';

const renderFirstButton = ({onClick, currentPage}: PaginationProps) => {
  return (
    <>
      {currentPage > 1 ? (
        <Button
          variant="outline-secondary"
          style={{ cursor: "pointer", marginLeft: "2px", marginRight: "2px" }}
          onClick={() => onClick(1)}
        >
          <i className="fa fa-angle-double-left"></i>
        </Button>
      ) : (
        <Button variant="outline-secondary" style={{ marginLeft: "2px", marginRight: "2px" }} disabled>
          <i className="fa fa-angle-double-left"></i>
        </Button>
      )}
    </>
  );
}
export default renderFirstButton;