export default function ChildCom(props){
    return(
        <div>
            <h3>Hello React I'm child</h3>
            {
                props.setfun("My name is Bob!")
            }
        </div>
    )
}