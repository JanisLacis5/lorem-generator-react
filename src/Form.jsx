const Form = ({value, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="lorem-form">
            <label htmlFor="count" className="lorem-label">
                Paragraphs:{" "}
            </label>
            <input
                type="number"
                name="count"
                id="count"
                value={value}
                max={8}
                min={1}
                onChange={onChange}
            />
            <button type="submit" className="btn">
                Submit
            </button>
        </form>
    )
}
export default Form
