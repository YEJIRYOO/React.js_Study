import axios
 from "axios";
const ListPage=()=>{
    const getPosts=()=>{
        axios.get('http://localhost:3001/posts').then((response)=>{
            console.log(response);
        })
    }
    return(
        <div>List Page</div>
    );

};

export default ListPage;