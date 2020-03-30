import React from "react";
import style from "./FormsControls.module.css";


const renderField = (Element) => ({input, meta, ...props}) => {
    const someError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${someError && style.error}`}>
            <Element {...input} {...props}/>
            {someError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = renderField("textarea");
export const Input = renderField("input");