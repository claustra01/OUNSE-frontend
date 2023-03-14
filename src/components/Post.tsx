function Post(props:{post: string}) {

    const obj = JSON.parse(JSON.stringify(props.post));

    return (
        <>
            {obj.Title}<br/>
            {obj.Body}<br/>
            {obj.Time}<br/>
            {obj.UserId}<br/>
            <br/>
        </>
    )

}

export default Post