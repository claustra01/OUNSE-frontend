function RequestData(props: {data: string}) {

    const obj = JSON.parse(JSON.stringify(props.data));

    return (
        <>
            {obj.UserId}
        </>
    )
}

export default RequestData