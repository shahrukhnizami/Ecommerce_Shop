function CategoriesSlug({category,ischossen,onClick}){
    // console.log("ischossen",ischossen);
    
    const{name}=category
    return(
        
          <li
                 onClick={onClick} 
                  className={ `${ ischossen ? "active text-white" : "" } grid_sorting_button m-1 button d-flex flex-column justify-content-center align-items-center`} id="women's clothing" 
                >
                  {name}
                </li>
   
    )
}
export default CategoriesSlug;