import Button from 'react-bootstrap/Button';

interface VisiblePagesProps {
    onClick: (item: number) => void;
    currentPage: number;
    pages: number;
    maxVisible: number;
}

let visiblePages: any[];
let upperLimit: number;
let lowerLimit: number;
let midCeil: number;
let numOfButtonsToRight: number;
let numOfButtonsToLeft: number;

function RenderPageNumbers({onClick, currentPage, pages, maxVisible}: VisiblePagesProps) {
    visiblePages = [];

    if(pages > maxVisible) {
        midCeil = Math.ceil(maxVisible / 2)
        numOfButtonsToRight = Math.floor(maxVisible / 2)
        numOfButtonsToLeft = maxVisible % 2 === 1 ? maxVisible - midCeil : maxVisible - midCeil - 1
        upperLimit = currentPage <= midCeil ? maxVisible : (currentPage > midCeil && currentPage + midCeil < pages + 1 ? currentPage + numOfButtonsToRight : pages)
        lowerLimit = currentPage > pages - midCeil ? pages - maxVisible + 1 : (currentPage <= pages - midCeil && currentPage > midCeil ? currentPage - numOfButtonsToLeft : 1)
    } else {
        upperLimit = pages
        lowerLimit = 1
    }

    for (let i = lowerLimit; i <= upperLimit; i++) {
        visiblePages.push(
            <span key={i} style={{ marginLeft: "2px", marginRight: "2px" }}>
                {i === currentPage ? (
                    <Button variant="secondary" disabled>
                        {i}
                    </Button>
                ) : (
                    <Button
                        variant="outline-secondary"
                        style={{ cursor: "pointer" }}
                        onClick={() => onClick(i)}
                    >
                        {i}
                    </Button>
                )}
            </span>
        );
    }
    return <>{visiblePages}</>
}

export default RenderPageNumbers;