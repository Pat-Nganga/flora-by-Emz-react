import { useEffect, useState } from "react"
import './css/Content.css'

const Content = ({flowers, fetchData, setData}) => {

    const  deleteFlowerPost = (flowerId) =>  {
    
        return fetch(`http://localhost:3000/flowers/${flowerId}`, {
            method: 'DELETE',
    
        })
            .then(response => response.json())
            .then(data => {
                fetchData().then(res => {
                    setData(res)
                  }).catch(err => {
                    console.log("Error in fetching flowers: ",err)
                  })
            })
            .catch(error => {
                console.error('Error deleting flower post:', error);
            });
    }
    return (
        <div class="grid-container">
            <div id="flower-list"></div>
            <div id="flower-details">
                <div id="flowers-container">
                    {
                        flowers.length > 0 ? flowers.map(record => (
                            <div class="card">
                                <img src={record.image} />
                                <div class="card-content">
                                    <h2>{record.name}</h2>
                                    <p>KES {record.price}</p></div>
                                <div class="btn-container">
                                    <button class="buy btn">Buy</button>
                                    <button class="like btn">Like ({record.likes})</button>
                                    <button class="delete btn" onClick={() => deleteFlowerPost(record.id)}>Delete</button>
                                    <button class="edit btn">Edit</button>
                                </div>
                            </div>
                        )
                        )
                            :
                            <div>
                                <hr />
                                <h3>Stock is empty</h3>
                            </div>
                    }

                </div>

            </div>
        </div>
    )

}

export default Content