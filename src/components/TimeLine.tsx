import { useEffect } from "react"
import Post from "./Post"

function TimeLine(props: {timeLine: string[]}) {

    return (
        <div>
            {props.timeLine.map((v) => (
                <Post post={v} />
            ))}
        </div>
    )
}

export default TimeLine