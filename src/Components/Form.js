import { useState } from 'react'
import './css/Form.css'
const Form = ({ flowers, setData, fetchData }) => {
    const [flowerName, setFlowerName] = useState()
    const [price, setPrice] = useState()
    const [image, setImage] = useState()

    const handleSumbit = () => {
        const id = Number(flowers[0].id) + 1
        const data = {
            "id": id,
            "name": flowerName,
            "price": price,
            "description": "Test Descrition",
            "image": image,
            "like": 0,
            "likes": 0
        }

        createNewFlowerPost(JSON.stringify(data))

    }

    const createNewFlowerPost = (data) => {
        return fetch('http://localhost:3000/flowers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(response => response.json())
            .then(() => {

                setPrice('')
                setFlowerName('')
                setImage('')
                fetchData().then(res => {
                    setData(res)
                }).catch(err => {
                    console.log("Error in fetching flowers: ", err)
                })
            })
            .catch(error => {
                console.error('Error creating flower post:', error);
            });
    }
    return (
        <div class="create-form">
            <h2>Add a new flower post</h2>
            <form id="flower-form">
                <label for="name">Name:</label>
                <input type="text" id="flower-name" class="input" name="flowerName" value={flowerName} onChange={e => setFlowerName(e.target.value)} />
                <br />
                <label class="label" for="price">Price:</label>
                <input type="text" id="price" class="input" name="price" value={price} onChange={e => setPrice(e.target.value)} />

                <label class="label" for="image">Image:</label>
                <input type="url" id="image" class="input" name="image" value={image} onChange={e => setImage(e.target.value)} />

            </form>
            <button id="form-btn" type="button" onClick={handleSumbit}>Add </button>

        </div>

    )

}

export default Form;