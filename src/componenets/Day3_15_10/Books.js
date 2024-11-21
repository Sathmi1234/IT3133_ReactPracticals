import Button from 'react-bootstrap/Button';

export default function Books({bdata,onSelectBook}) {
    return(
        <div>
            <ul>
            {
                bdata.map((book)=>(
                    <li key={book.id}>ID : {book.id} <Button variant="outline-danger" onClick={()=>onSelectBook(book)}>Select</Button><br/><br/></li> 
                ))
            }  
            </ul>
        </div>
    );
    
}