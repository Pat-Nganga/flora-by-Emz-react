import { useState } from 'react'
import './css/Menu.css'

const Menu = ({setData, fetchData, setEndpoint}) => {
        const [searchText, setSearch] = useState();


    const realTimeFilter = (text) => {
            setSearch(text)
            const url = 'http://localhost:3000/flowers?_sort=id&_order=desc&q='+text
            setEndpoint(url)
            fetchData().then(res => {
                setData(res)
            }).catch(err => {
                console.log("Error in fetching flowers: ", err)
            })
    } 
    return (
        <div class="menu">
            <div class="logo">
            <h3>FLORA BY EMZ</h3>
        </div>
        <nav>
            <ul class="navigation">
                <li id="link-home" class="nav-link"><a href="#Home">Home</a></li>
                <li class="nav-link"><a href="#Subscribe">Subscribe</a></li>
                <li class="nav-link"><a href="#Shop">Shop</a></li>
                <li class="nav-link"><a href="#Contact">Contact</a></li>
            </ul>
            
        </nav>
        <div class="search">
            <form>
                <label for="search"></label>
                <input type="text" class="input" id="search-input" name="search"
                    placeholder=".....search flowers..." onChange={e => realTimeFilter(e.target.value) } value={searchText}/>
            </form>
        </div>
        </div>
    )
    
}

export default Menu