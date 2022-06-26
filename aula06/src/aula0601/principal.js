import React from "react"
import md5 from "js-md5"
import axios from "axios"

const url = process.env.REACT_APP_URL
const pu_key = process.env.REACT_APP_PKEY
const pr_key = process.env.REACT_APP_PRIVATE_KEY

const Principal = () => {
    
    const Marvel = async () => {
    var ts = Number(new Date())
    var concat = md5(ts + pr_key + pu_key)

    var acesso = "/v1/public/characters"

    var final = url + acesso + '?ts=' + ts + '&apikey=' + pu_key + '&hash=' + concat + '&limit=100&offset=100'

    await axios.get( final )
                .then( retorno =>{
                    console.log( retorno.data.data.results )
                })

    }

    return(
        <div>
            <input type='button' onClick={ () => Marvel() } value="Carregar" />

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3.jpg"
                />
                <label>Beast</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4c0035813dc4c.jpg"
                />
                <label>Beast (Earth-311)</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/53176a9be110c.jpg"
                />
                <label>Beast (Ultimate)</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"
                />
                <label>Beef</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/a/20/4ce5a878b487c.jpg"
                />
                <label>Belasco</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/2/20/4ce5a6abaea69.jpg"
                />
                <label>Ben Reilly</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
                />
                <label>Ben Parker</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c00373d10e5e.jpg"
                />
                <label>Ben Urich</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5269523ee6c03.jpg"
                />
                <label>Bengal</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/3/90/52602f3e88d25.jpg"
                />
                <label>Beta-Ray Bill</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/f/40/4ce5a8b16ee4b.jpg"
                />
                <label>Bethany Cabe</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4c7c644f453fb.jpg"
                />
                <label>Betty Brant</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/2/b0/4ce5a12071562.jpg"
                />
                <label>Betty Ross</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/7/10/528d31df87c49.jpg"
                />
                <label>Beyonder</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4c0035cfca8b6.jpg"
                />
                <label>Big Bertha</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/3/00/4c0040b26877d.jpg"
                />
                <label>Big Wheel</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/3/70/52602f4b42d98.jpg"
                />
                <label>Bishop</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/1/20/52696929dc721.jpg"
                />
                <label>Black Bolt</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/5239c021b3bfc.jpg"
                />
                <label>Black Bolt (Marvel War of Heroes)</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/e/03/526952357d91c.jpg"
                />
                <label>Black Cat</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/5/80/4c00357da502e.jpg"
                />
                <label>Black Cat (Ultimate)</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/4ce5a883e8df0.gif"
                />
                <label>Black Knight (Dane Whitman)</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4ce59ed1590a7.jpg"
                />
                <label>Black Knight (Sir Percy of Scandia)</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d.jpg"
                />
                <label>Black Panther</label>
            </div>

            <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }} >
                <img
                    style = {{ width: "150px" }}
                    src= "http://i.annihil.us/u/prod/marvel/i/mg/6/20/53176a7b3a4e4.jpg"
                />
                <label>Black Panther (Ultimate)</label>
            </div>

        </div>
    )
}

export default Principal