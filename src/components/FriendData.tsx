function FriendData(props: {data: string}) {

    const obj = JSON.parse(JSON.stringify(props.data));

    return (
        <>
            {obj.FriendId}
        </>
    )
}

export default FriendData