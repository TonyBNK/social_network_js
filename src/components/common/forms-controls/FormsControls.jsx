import React from "react";
import c from './FormsControls.module.scss';


const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;

    return (
        <div className={`${c.formControl} ${hasError ? c.error : ''}`}>
            <div>
                {
                    props.children
                }
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}