import Stack from 'react-bootstrap/Stack';
import VisiblePageNumbers from './paginationButtons/VisiblePageNumbers';
import PreviousPageButton from './paginationButtons/PreviousPageButton';
import NextPageButton from './paginationButtons/NextPageButton';
import FirstPageButton from './paginationButtons/FirstPageButton';
import LastPageButton from './paginationButtons/LastPageButton';

interface PaginationProps {
    onClick: (item: number) => void;
    currentPage: number;
    numOfPages: number;
    maxVisible: number;
}

function Pagination({ onClick, currentPage, numOfPages, maxVisible }: PaginationProps) {

    return (
        <Stack direction="horizontal">
          <FirstPageButton
            onClick={onClick}
            currentPage={currentPage}
          />
          <PreviousPageButton
            onClick={onClick}
            currentPage={currentPage}
          />
          {currentPage > Math.ceil(maxVisible / 2) && numOfPages > maxVisible && (
            <i className="fa fa-ellipsis-h" style={{ marginLeft: "2px", marginRight: "2px" }}></i>
          )}
          <VisiblePageNumbers
            onClick={onClick}
            currentPage={currentPage}
            pages={numOfPages}
            maxVisible={maxVisible}
          />
          {maxVisible % 2 === 1 ? (currentPage <= numOfPages - Math.ceil(maxVisible / 2) && numOfPages > maxVisible && (
            <i className="fa fa-ellipsis-h" style={{ marginLeft: "2px", marginRight: "2px" }}></i>
          ))
          :(currentPage < numOfPages - Math.ceil(maxVisible / 2) && numOfPages > maxVisible && (
            <i className="fa fa-ellipsis-h" style={{ marginLeft: "2px", marginRight: "2px" }}></i>
          ))}
          <NextPageButton
            onClick={onClick}
            currentPage={currentPage}
            pages={numOfPages}
          />
          <LastPageButton
            onClick={onClick}
            currentPage={currentPage}
            pages={numOfPages}
          />
        </Stack>
    );
}

export default Pagination;