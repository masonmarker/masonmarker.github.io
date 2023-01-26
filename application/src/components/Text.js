// offers text based components



const Title = (props) => {
    return (
        <div>
            <h1 style={{
                margin: '1rem'
            }}>{props.title}</h1>
        </div>
    )
}

export default Title