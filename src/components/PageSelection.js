import React from 'react';

const PageSelection = ({ totalPages, pageNumber, goToPage, totalResults }) => {
  const pageArray = Array.from('x'.repeat(totalPages)).map((item, idx) => idx + 1);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <h3 style={{ marginRight: '2em' }}>Total results: {totalResults}</h3>
      <h3 style={{ marginRight: '2em' }}>Total pages: {totalPages}</h3>
      <h3 style={{ marginRight: '2em' }}>Current page: {pageNumber}</h3>
      <h3>Go to page:</h3>
      <h3>
        <select onChange={(e) => goToPage(e.target.value)} style={{ width: '60px' }}>
          {pageArray.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
      </h3>
    </div>
  );
};

export default PageSelection;
