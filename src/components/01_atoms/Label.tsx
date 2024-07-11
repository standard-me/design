export interface ILabelProps {
    label: string
    htmlFor: string
    className: string
}
const Label = ({ label, htmlFor, className }: ILabelProps) => {
    return (
        <label className={`${className}`} htmlFor={htmlFor}>
            {label}
        </label>
    )
}

export default Label
