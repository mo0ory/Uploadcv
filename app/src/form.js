import React, { Component } from 'react';
import axios from 'axios';
import './form.css';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            university: '',
            major: '',
            selectedFile: null
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });

    }

    // handleSubmit = (e) => {

    //     e.preventDefault();
    //     const newUser = {
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         university: this.state.university,
    //         major: this.state.major,
    //         selectedFile: this.state.selectedFile
    //     }
    //     axios.post('/api/items', newUser)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err.response.data));
    // }

    onChangeHandler = event => {
        event.preventDefault();
        const newUser = {

            selectedFile: this.state.selectedFil
        }
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)

        axios.post("http://localhost:3000", data, {

        })
            .then(res => { // then print response status
                console.log(res.statusText)

            });
    }





    render() {
        return (
            <div className="App">

                <form  method="post" action="/api/items"  >
                    <p className="bigred"><b>UploadCV</b></p>

                    <div className="inputForm">



                        <label>First Name</label>
                        <input type="text" name={this.state.firstName} name="firstName" onChange={this.handleChange} required />
                        <br></br>
                        <label>Last Name</label>
                        <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} required />
                        <br></br>
                        <label>University</label>
                        <input type="text" value={this.state.unveircity} name="university" onChange={this.handleChange} required />
                        <br></br>
                        <label>Major</label>
                        <input type="text" value={this.state.major} name="major" onChange={this.handleChange} required />
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
