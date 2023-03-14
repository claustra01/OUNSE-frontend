import { useEffect } from "react"

function TimeLine(props: {timeLine: String[]}) {

    useEffect(() => { 
        console.log(props.timeLine)
    })

    return (
        <>timeline</>
    )
}

export default TimeLine