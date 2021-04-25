import React,{Component} from 'react';
import logo from '../../assets/images/loading-logo.svg';
import '../../assets/styles/App.css';
import '../../assets/styles/global-styles.css';
import '../../assets/styles/components-indicators.css';

class LoadingIndicator extends Component{
    render(){
        return(
            <div>
                <img src={logo} className="loading-logo" alt="logo" />
                <div className="indicator-text">
                    Loading
                </div>
            </div>
            
        );
    }
}

export default LoadingIndicator;