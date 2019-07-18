import React from 'react';
import LibraryCard from '../LibraryCard/LibraryCard';
const MyFavorite = (props) =>
{   
  

    return(
        <div className="tab mt-1">
        
             <div className="container-fluid">
                <div className="row">
                {
                         props.myFavList.map((ins, index) => {
                            return <LibraryCard movie={ins} key={index} removeMe={(val)=> props.removeFav(val)} />
                        })
                }
                      
                </div>
            </div>
          
       
      </div>
    )
}

export default MyFavorite;