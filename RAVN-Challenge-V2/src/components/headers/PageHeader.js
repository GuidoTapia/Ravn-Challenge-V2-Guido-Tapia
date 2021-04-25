import React,{Component} from 'react';
import '../../assets/styles/App.css';
import '../../assets/styles/global-styles.css';
import '../../assets/styles/components-headers.css';

class PageHeader extends Component{
    render(){
        return(
            <div className="page-header">
                <div className="h2-inverse">Ravn Star Wars Registry</div>
            </div>
        );
    }
}

export default PageHeader;