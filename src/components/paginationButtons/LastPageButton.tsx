import Button from 'react-bootstrap/Button';
import PaginationProps from '../../types/paginationProps.type';

const renderLastButton = ({onClick, currentPage, numOfPages}: PaginationProps) => {
    return (
      <>
        {numOfPages && currentPage < numOfPages ? (
          <Button
            variant="outline-secondary"
            style={{ cursor: "pointer", marginLeft: "2px", marginRight: "2px" }}
            onClick={() => onClick(numOfPages)}
          >
            <i className="fa fa-angle-double-right"></i>
          </Button>
        ) : (
          <Button variant="outline-secondary" style={{ marginLeft: "2px", marginRight: "2px" }} disabled>
            <i className="fa fa-angle-double-right"></i>
          </Button>
        )}
      </>
    );
}
export default renderLastButton;