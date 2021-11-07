import React from "react";
import c from './FormsControls.module.scss';
import {Input as InputAntD} from 'antd';


const FormControl = React.memo((
    {
        // meta: {error, touched},
        children
    }
) => {
    // const hasError = error && touched;

    return (
        <div>
            <div>
                {
                    children
                }
            </div>
            {/*{hasError && <span>{error}</span>}*/}
        </div>
    )
});

export const Textarea = React.memo((props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><InputAntD.TextArea {...input} {...restProps}/></FormControl>
});

export const Input = React.memo((props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><InputAntD {...input} {...restProps}/></FormControl>
});