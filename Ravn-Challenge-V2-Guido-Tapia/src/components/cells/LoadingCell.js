import React,{Component} from 'react';
import logo from '../../assets/images/loading-logo.svg';
import '../../assets/styles/App.css';
import '../../assets/styles/global-styles.css';
import '../../assets/styles/components-cells.css';

import LoadingIndicator from '../indicators/LoadingIndicator';

class LoadingCell extends Component{
    render(){
        return(
            <div className="loading-cell">
                <LoadingIndicator/>
            </div>
        );
    }
}

export default LoadingCell;