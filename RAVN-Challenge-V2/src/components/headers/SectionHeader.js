import React,{Component} from 'react';
import '../../assets/styles/App.css';
import '../../assets/styles/global-styles.css';
import '../../assets/styles/components-headers.css';

class SectionHeader extends Component{
    render(){
        return(
            <div className="section-header">
                <div className="h2-default">{this.props.content}</div>
            </div>
        );
    }
}

export default SectionHeader;