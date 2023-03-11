import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from "react"

const Params = () => {

    //params is packaged up via the url (path variables) and we can destructure is just like props
    const { peopleOrPlanets, id } = useParams()
    const [peopleOrPlanetsState, setPeopleOrPlanetsState] = useState(peopleOrPlanets)
    const [searchId, setSearchId] = useState(id)
    const [results, setResults] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .get(`https://swapi.dev/api/${peopleOrPlanetsState}/${searchId}`)
            .then((res) => {
                console.log(res.data)
                setResults([res.data])
                console.log(results)
                
            })
            .catch((err) => err)
    }

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${peopleOrPlanetsState}/${searchId}`)
            .then((res) => {
                console.log(res.data)
                setResults([res.data])
                console.log(results)
                
            })
            .catch((err) => err)
    }, [searchId])

    console.log(peopleOrPlanetsState)
    console.log(searchId)

    return (
        <div>
            <h1>SWAPI</h1>
            <form onSubmit={submitHandler} id="swapi-form">
                <div>
                    <label>Search for: </label>
                    <select name="filter" value={peopleOrPlanetsState} onChange={(e) => setPeopleOrPlanetsState(e.target.value)}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                </div>
                <div>
                    <label>ID: </label>
                    <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)}></input>
                </div>
                <input type="submit" value="Search" />
            </form>

            {
                    results.map((result, index) => {
                        return (
                            <div key={index}>
                                <h3>Name: {result.name}</h3>
                                {result.gender? <h3>Gender: {result.gender.toUpperCase()}</h3> : <h3>Gravity: {result.gravity}</h3>}
                                {result.skin_color ? <h3>Skin Color: {result.skin_color.charAt(0).toUpperCase() + result.skin_color.slice(1)}</h3> : <h3>Orbital Period: {result.orbital_period} (solar days)</h3> }
                                {result.mass ? <h3>Mass: {result.mass} kilos</h3> : <h3>Surface Water Scale: {result.surface_water} out of 100</h3> }
                                {result.height ? <h3>Height: {result.height} meters</h3> : <h3>Terrain: {result.terrain}</h3>}
                            </div>
                        )
                    })
                }

        </div>
    )
}

export default Params