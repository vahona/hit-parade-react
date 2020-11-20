import React, { useContext } from 'react'
import { Context } from '../Context'


function AddSong() {
    const { song } = useContext(Context)

    return (
        <div>
            <h1>
                Add a new song
            </h1>
            <form className="form">
                <div className="form_type"><input placeholder="title" /></div>
                <div className="form_type"><input placeholder="Artist" /></div>
                <div className="form_type" ><input placeholder="Price" /></div>
                <div className="form_type" ><input placeholder="Price" /></div>
                <select name="choice" className="form_type">
                    <option value="choices">Choices</option>
                    <option value="salegy">Salegy</option>
                    <option value="reggae">Reggae</option>
                    <option value="folk">Folk</option>
                    <option value="rap">Rap</option>
                    <option value="rock">Rock</option>
                </select>
                <div className="form_type">
                <textarea id="story" name="story"
                    rows="5" cols="33">
                </textarea>
                </div>
                <div className="form_type">
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddSong