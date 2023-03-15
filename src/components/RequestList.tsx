import RequestData from "./RequestData"

function RequestList(props: {requests: string[]}) {
    return (
        <>
            {props.requests.map((v) => (
                <RequestData data={v} />
            ))}

        </>
    )
}

export default RequestList