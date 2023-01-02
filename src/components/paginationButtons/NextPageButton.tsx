import React from 'react'
import Button from 'react-bootstrap/Button';

interface NextPageProps {
    onClick: (item: number) => void;
    currentPage: number;
    pages: number;
}

const renderNextButton = ({onClick, currentPage, pages}: NextPageProps) => {
    return (
      <>
        {currentPage < pages ? (
          <Button
              variant="outline-secondary"
              style={{ cursor: "pointer", marginLeft: "2px", marginRight: "2px" }}
              onClick={() => onClick(currentPage + 1)}
          >
              <i className="fa fa-angle-right"></i>
          </Button>
        ) : (
          <Button variant="outline-secondary" style={{ marginLeft: "2px", marginRight: "2px" }} disabled>
              <i className="fa fa-angle-right"></i>
          </Button>
        )}
      </>
    );
  }
export default renderNextButton;