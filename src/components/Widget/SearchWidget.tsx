import { Icon } from '@iconify/react';
import React from 'react';

interface SearchWidgetProps {
  title: string;
}

const SearchWidget: React.FC<SearchWidgetProps> = ({ title }) => {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <form className="cs-sidebar_search">
        <input type="text" placeholder="Search..." />
        <button className="cs-sidebar_search_btn">
          <Icon icon="material-symbols:search-rounded" />                   
        </button>
      </form>
    </>
  );
};

export default SearchWidget;
