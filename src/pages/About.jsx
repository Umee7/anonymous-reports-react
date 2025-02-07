/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { AppContext } from '../App';

export default function About() {

    const [reportData, setReportData, reportCount, setReportCount] = useContext(AppContext);

  return (
    <div>
      <h1>No of Reports: {reportCount}</h1>
    </div>
  )
}
