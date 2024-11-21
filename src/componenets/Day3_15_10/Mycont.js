export default function Mycont({msg,dosum}) {
    return(
        <>
            <h1>Message recieved from my parent</h1>
            <p>{msg}</p>
            <p>{dosum(5,10)}</p>
        </>
    );
}