import React, { Component } from 'react';
class Item extends Component {
  render() {
    return(
        <tr>
            <td className="text-center">1</td>
            <td>Lorem ipsum sit amet, consectetur adfafaa dsdsdsa dsdsd</td>
            <td className="text-center"><span className="label label-danger">Hight</span></td>
            <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
  }
}

export default Item;
