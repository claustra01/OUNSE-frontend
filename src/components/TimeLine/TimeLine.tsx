import Post from "../Post"
import "./TimeLine.css"

function TimeLine(props: {timeLine: string[]}) {

    return (
        <div className="box">
            {props.timeLine.map((v) => (
                <Post post={v} />
            ))}
        </div>
    )
}

export default TimeLine