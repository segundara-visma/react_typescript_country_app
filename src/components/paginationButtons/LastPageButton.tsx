import React from 'react'
import Button from 'react-bootstrap/Button';

interface LastPageProps {
    onClick: (item: number) => void;
    currentPage: number;
    pages: number;
}

const renderLastButton = ({onClick, currentPage, pages}: LastPageProps) => {
    return (
      <>
        {currentPage < pages ? (
          <Button
            variant="outline-secondary"
            style={{ cursor: "pointer", marginLeft: "2px", marginRight: "2px" }}
            onClick={() => onClick(pages)}
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