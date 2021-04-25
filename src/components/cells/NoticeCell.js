import React,{Component} from 'react';
import '../../assets/styles/App.css';
import '../../assets/styles/global-styles.css';
import '../../assets/styles/components-cells.css';

class NoticeCell extends Component{
    render(){
        return(
            <div className="notice-cell">
                <div className="h2-high-emphasis">Failed to Load Data</div>
            </div>
        );
    }
}

export default NoticeCell;