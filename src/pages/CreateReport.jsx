/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import ReportForm from "../components/ReportForm";
import { AppContext } from "../App";

export default function CreateReport() {
    const [reportData, setReportData, reportCount, setReportCount] = useContext(AppContext)
    
  return (
    <div>
      <ReportForm />
    </div>
  )
}
