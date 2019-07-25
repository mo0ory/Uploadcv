import React, { Component } from 'react';
import axios from 'axios';
import './form.css';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            university: '',
            major: '',
            selectedFile: null
        };
    }

    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = (e) => {
        alert('You submitted text data:' + "  " + this.state.firstname + "  " + this.state.lastname + "  " + this.state.university + "  " + this.state.major + " " + this.state.selectedFile);
        e.preventDefault();

    }

    onChangeHandler = event => {

        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)

        axios.post("http://localhost:3000/upload", data, {

        })
            .then(res => { // then print response status
                console.log(res.statusText)
            }).catch(err => {
                console.log(err);
            });
    }



    render() {
        return (
            <div className="App">

                <form onSubmit={this.handleSubmit} >
                    <p className="bigred"><b>UploadCV</b></p>

                    <div className="inputForm">



                        <label>First Name</label>
                        <input type="text" name={this.state.firstname} name="firstname" onChange={this.handleChange} />
                        <br></br>
                        <label>Last Name</label>
                        <input type="text" value={this.state.lastname} name="lastname" onChange={this.handleChange} />
                        <br></br>
                        <label>University</label>
                        <input type="text" value={this.state.unveircity} name="university" onChange={this.handleChange} />
                        <br></br>
                        <label>Major</label>
                        <input type="text" value={this.state.major} name="major" onChange={this.handleChange} />
                        <br></br>
                        <input type="file" name="file" onChange={this.onChangeHandler} />
                        <br></br>
                        <br></br>
                        <button type="button" onClick={this.onClickHandler}>Upload</button>


                        <hr></hr>
                        <input type="submit" value="Submit" />
                    </div>

                </form>

            </div>

        );

    }
}
export default Form;
