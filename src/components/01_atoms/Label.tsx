export interface ILabelProps {
    text: string
    htmlFor: string
    className: string
}
const Label = ({ text, htmlFor, className }: ILabelProps) => {
    return (
        <label className={`${className}`} htmlFor={htmlFor}>
            {text}
        </label>
    )
}

export default Label
