import React from "react";
import c from './FormsControls.module.scss';


const FormControl = React.memo(({input, meta, ...props}) => {
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
});

export const Textarea = React.memo((props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
});

export const Input = React.memo((props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
});