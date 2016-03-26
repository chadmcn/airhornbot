// @flow
// jscs:disable maximumLineLength

import React from 'react';

type Props = {
  number: number
};

export default ({number}: Props): React.Element => {
  let className = 'island forest';
  if (number) {
    className += `-${number}`;
  }

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="259" height="227">
      <g fill="none" fill-rule="evenodd">
        <path fill="#FFE6A7" d="M1.5012 99.2279v57.903l118.413 68.367 136.734-78.942v-57.903L1.5012 99.2279z"/>
        <path fill="#EDD194" d="M118.8135 94.3652v130.5l1.101.633 136.734-78.942v-57.903l-137.835 5.712z"/>
        <path stroke="#5E4634" strokeWidth="3" d="M256.6494 88.6514v57.906l-136.734 78.942-118.416-68.367v-57.906" strokeLinecap="round" strokeLinejoin="round"/>
        <path fill="#C7E082" d="M1.5012 99.2279v20.403l118.413 68.37 136.734-78.945v-20.403L1.5012 99.2279z"/>
        <path fill="#B0CC64" d="M119.8134 94.3235v93.618l.102.06 136.734-78.945v-20.406l-136.836 5.673z"/>
        <path stroke="#5E4634" strokeWidth="3" d="M256.6494 91.6514v17.406l-136.734 78.942-118.416-68.367v-20.406" strokeLinecap="round" strokeLinejoin="round"/>
        <path fill="#B7D86F" d="M1.5012 99.2279l118.413 68.367 136.734-78.942-118.413-68.367-136.734 78.942z"/>
        <path stroke="#5E4634" strokeWidth="3" d="M119.9151 167.5949L1.4991 99.2279l136.734-78.945 118.416 68.37-136.734 78.942zm0 0v57.906m22.7244-95.8977v3.249m85.2162-45.8259v3.249m-172.5-3.249v3.249m93.4998 46.4253v3.249m22.8534-104.4714v3.249m-81.8532 70.8762v3.249m7.5 23.8482v3.249m0-36.3462v3.249m-63.75-12.3768v3.249m142.7499-58.9962v3.249" strokeLinecap="round" strokeLinejoin="round"/>
        <path fill="#FFE6A7" d="M84.1989 42.9278v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z"/>
        <path fill="#EDD194" d="M90.2703 42.9278v32.103c2.928-.09 5.241-1.089 5.241-2.319v-29.784h-5.241z"/>
        <path stroke="#5E4634" strokeWidth="3" d="M84.1989 42.9278v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z" strokeLinecap="round" strokeLinejoin="round"/>
        <g className="stretch">
          <path fill="#C3F270" d="M89.8557 63.4871c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875"/>
          <path fill="#B7D86F" d="M91.4595 2.4917c5.655 4.755 9.27 11.871 9.27 19.794v9.327c0 14.232-11.643 25.875-25.875 25.875-.54 0-1.068-.048-1.602-.081 4.503 3.786 10.296 6.081 16.602 6.081 14.232 0 25.875-11.643 25.875-25.875v-9.327c0-13.692-10.782-24.954-24.27-25.794"/>
          <path stroke="#5E4634" strokeWidth="3" d="M89.8557 63.4871c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875z" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <path fill="#FFE6A7" d="M123.4179 73.4663v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z"/>
        <path fill="#EDD194" d="M129.4893 73.4663v32.103c2.928-.09 5.241-1.089 5.241-2.319v-29.784h-5.241z"/>
        <path stroke="#5E4634" strokeWidth="3" d="M123.4179 73.4663v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z" strokeLinecap="round" strokeLinejoin="round"/>
        <g className="stretch">
          <path fill="#C3F270" d="M129.0747 94.0256c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875"/>
          <path fill="#B7D86F" d="M130.6785 33.0302c5.655 4.755 9.27 11.871 9.27 19.794v9.327c0 14.232-11.643 25.875-25.875 25.875-.54 0-1.068-.048-1.602-.081 4.503 3.786 10.296 6.081 16.602 6.081 14.232 0 25.875-11.643 25.875-25.875v-9.327c0-13.692-10.782-24.954-24.27-25.794"/>
          <path stroke="#5E4634" strokeWidth="3" d="M129.0747 94.0256c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875z" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <path fill="#FFE6A7" d="M84.6138 94.4756v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z"/>
        <path fill="#EDD194" d="M90.6852 94.4756v32.103c2.928-.09 5.241-1.089 5.241-2.319v-29.784h-5.241z"/>
        <path stroke="#5E4634" strokeWidth="3" d="M84.6138 94.4756v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z" strokeLinecap="round" strokeLinejoin="round"/>
        <g className="stretch">
          <path fill="#C3F270" d="M90.2703 115.0349c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875"/>
          <path fill="#B7D86F" d="M91.8744 54.0395c5.655 4.755 9.27 11.871 9.27 19.794v9.327c0 14.232-11.643 25.875-25.875 25.875-.54 0-1.068-.048-1.602-.081 4.503 3.786 10.296 6.081 16.602 6.081 14.232 0 25.875-11.643 25.875-25.875v-9.327c0-13.692-10.782-24.954-24.27-25.794"/>
          <path stroke="#5E4634" strokeWidth="3" d="M90.2703 115.0349c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875z" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <path fill="#FFE6A7" d="M185.9271 57.1778v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z"/>
        <path fill="#EDD194" d="M191.9985 57.1778v32.103c2.928-.09 5.241-1.089 5.241-2.319v-29.784h-5.241z"/>
        <path stroke="#5E4634" strokeWidth="3" d="M185.9271 57.1778v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z" strokeLinecap="round" strokeLinejoin="round"/>
        <g className="stretch">
          <path fill="#C3F270" d="M191.5839 77.7371c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875"/>
          <path fill="#B7D86F" d="M193.1877 16.742c5.655 4.755 9.27 11.871 9.27 19.794v9.327c0 14.232-11.643 25.875-25.875 25.875-.54 0-1.068-.048-1.602-.081 4.503 3.786 10.296 6.081 16.602 6.081 14.232 0 25.875-11.643 25.875-25.875v-9.327c0-13.692-10.782-24.954-24.27-25.794"/>
          <path stroke="#5E4634" strokeWidth="3" d="M191.5839 77.7371c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875z" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <path fill="#FFE6A7" d="M160.0521 85.7366v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z"/>
        <path fill="#EDD194" d="M166.1235 85.7366v32.103c2.928-.09 5.241-1.089 5.241-2.319v-29.784h-5.241z"/>
        <path stroke="#5E4634" strokeWidth="3" d="M160.0521 85.7366v29.784c0 1.29 2.532 2.334 5.658 2.334 3.123 0 5.655-1.044 5.655-2.334v-29.784h-11.313z" strokeLinecap="round" strokeLinejoin="round"/>
        <g className="stretch">
          <path fill="#C3F270" d="M165.7089 106.2962c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875"/>
          <path fill="#B7D86F" d="M167.3127 45.3008c5.655 4.755 9.27 11.871 9.27 19.794v9.327c0 14.232-11.643 25.875-25.875 25.875-.54 0-1.068-.048-1.602-.081 4.503 3.786 10.296 6.081 16.602 6.081 14.232 0 25.875-11.643 25.875-25.875v-9.327c0-13.692-10.782-24.954-24.27-25.794"/>
          <path stroke="#5E4634" strokeWidth="3" d="M165.7089 106.2962c-14.232 0-25.875-11.643-25.875-25.875v-9.327c0-14.232 11.643-25.875 25.875-25.875s25.875 11.643 25.875 25.875v9.327c0 14.232-11.643 25.875-25.875 25.875z" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    </svg>
  );
};
