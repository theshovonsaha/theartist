#!/bin/bash

# Define the list of pages
pages=(
  [2]="Family Shoots"
  [3]="Events"
  [4]="Portraits"
  [5]="Cars"
  [6]="Candids"
  [7]="Nature"
  [8]="Videography"
)



# Loop through the pages list and create files
for id in "${!pages[@]}"; do
  label="${pages[$id]}"
  link="/portfolio/$(echo "$label" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')"
  filename="$(echo "$label" | tr '[:upper:]' '[:lower:]' | tr ' ' '-').js"
  
  # Write the React component code to the file
  cat <<EOL > "src/pages/$filename"
import React from 'react';
import Nav from '../components/Nav';
import '../styles/_portfolioPage.scss';

const ${label// /}Page = () => {
  return (
    <div className="portfolio-page">
      <Nav />
      <div className="portfolio-page__content">
        <h1 className="portfolio-page__title">${label} Portfolio</h1>
        {/* Render portfolio content */}
      </div>
    </div>
  );
};

export default ${label// /}Page;
EOL

  echo "Created src/pages/$filename"
done

echo "All files created successfully!"
