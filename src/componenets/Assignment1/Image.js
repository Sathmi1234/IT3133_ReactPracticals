export default function Image({url,alt}){
    return(
        <div>
            <img class="rounded" src={url} alt={alt}/>
        </div>
    );
}