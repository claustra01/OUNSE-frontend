import FriendData from "./FriendData"

function FriendList(props: {friends: string[]}) {
    return (
        <>
            {props.friends.map((v) => (
                <FriendData data={v} />
            ))}

        </>
    )
}

export default FriendList