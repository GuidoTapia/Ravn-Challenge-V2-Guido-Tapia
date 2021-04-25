import React,{Component} from 'react';
import '../../assets/styles/App.css';
import '../../assets/styles/global-styles.css';
import '../../assets/styles/components-cells.css';

class DataCell extends Component{
    render(){
        return(
            <div className="data-cell">
                <div className="h2-low-emphasis-left">{this.props.attribute}</div>
                <div className="h2-default-right">{this.props.value}</div>
            </div>
        );
    }
}

export default DataCell;