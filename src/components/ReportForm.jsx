import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AppContext } from "../App";
import { v4 as UUID } from 'uuid';

export default function ReportForm() {

    const [reportData, setReportData,, setReportCount ] = useContext(AppContext);
    
    const schema = yup.object().shape({
        title: yup.string().max(15).required("Enter Something"),
        content: yup.string().max(300).required(),
        category: yup.string().required(),
        comment: yup.string().optional(),
    })

    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        const report = {
            id: UUID(),
            title: data.title,
            content: data.content,
            category: data.category,
            comment: [],
            commentCount: 0,
        }
        setReportData([...reportData, report]);
        setReportCount((prev)=> prev + 1)
        console.log(reportData);
        reset();
        alert("Report posted Successfully..")
    }

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title </label> <br />
            <input id="title" type="text" {...register("title")}/><br />
            <p style={{color: "red"}}>{errors.title?.message}</p>
            <label htmlFor="content">Content </label><br />
            <input id="content" type="text" {...register("content")}/><br />
            <p style={{color: "red"}}>{errors.content?.message}</p>
            <label htmlFor="category">Category </label><br />
            <select id="category" {...register("category")}>
                <option value="harrasment">Harrasment</option>
                <option value="abuse">Abuse</option>
                <option value="assault">Assault</option>
            </select>
            <p style={{color: "red"}}>{errors.category?.message}</p>
            <button type="submit">post</button>
        </form>
        </div>
  )
}
