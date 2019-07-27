import React, { Component } from 'react';
import { Table } from 'reactstrap';


export default class TableExample extends Component {
  super(props) {
    this.state = {
      // error: null,
      items: [],
      Loading: false,
    }
  }

  componentDidMount() {

    console.log("inside componentDidMount ")
    fetch('/api/items')
    // , {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }

    // })

      .then(response => response.json())
      .then(
        (result => {
          this.setState({
            Loading: true,
            items: result.items[0]
          });
        }),
        // (error) => {
        //   this.setState({
        //     Loading: true,
        //     error
        //   });
        // }
      )
  }



  render() {
    // const error = this.state;
    const Loading = this.state;
    const items = this.state;
    // if (error) {
    //   return <div>Error:{error.message}</div>;
    // }
    if (!Loading) {
      return <div>Loading...</div>;
    }
    else if (Array.isArray(items)) {
      console.log(items);
      return (

        <div>
          <h3> Preview the uploaded CV's</h3>,
      <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First name </th>
                <th>Last name</th>
                <th>University</th>
                <th>Major</th>
                <th>CV</th>

              </tr>
            </thead>
            <tbody>
           
              <tr>
                {items.map(item => (
                  <th key={item.id}>
                    First name :{item.firstName}
                    Last name : {item.lastName}
                    University:{item.university}
                    Major:{item.major}
                    CV:{item.cv}
                  </th>

                ))};
          </tr>
         
            </tbody>
          </Table>
        </div>
      );
    }

  }
}
