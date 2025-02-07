/* eslint-disable no-unused-vars */
import { use, useContext, useEffect } from "react";
import { AppContext } from "../App";
import SearchReport from "../components/SearchReport";
import Filter from "../components/Filter";

export default function Home() {
  const [reportData, setReportData, reportCount, setReportCount, comment, setComment, addComment, setAddComment] = useContext(AppContext);

  useEffect(()=>{
    console.log(reportData)
  },[reportData])
    
    const postComment = (newReport) => {
        if(addComment == 0) return;
    
        setReportData(reportData.map((report)=>{
            if(report.id === newReport.id ){
                return( 
                    {...report, comment: [...report.comment, addComment], commentCount: report.commentCount + 1})
            } else return report;
        }))
        
        alert("Comment Posted Succesfully")
    }

  
    return (
    <div>
        <SearchReport />
        <Filter />
      {
        reportData.map((report)=> {
            return (
                <>
                <h4>Title: {report.title}</h4>
                <p> Content: {report.content}</p>
                <h6>Category: {report.category}</h6>
                <p>Report ID:{report.id}</p>
                <label htmlFor="comment">Comment: </label>
                <input id="comment" value={addComment} 
                onChange={(e)=>{setAddComment(e.target.value)}}/>
                <button onClick={()=>postComment(report)}>Add comment</button>
                {report.commentCount > 1 && <p>{report.commentCount} Comments<br/></p>}<br/>
                {report.commentCount > 0?<p> {report.comment.map((comment)=>{
                   return(
                    <>
                    <p>{comment}</p>
                    </>
                   )
                })} <br/></p>: "No Comments under this report"}
                </>
            )
        })
      }
    </div>
  )
}
