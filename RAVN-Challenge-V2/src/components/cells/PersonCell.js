import React,{Component} from 'react';
import arrow from '../../assets/images/selector.svg';
import '../../assets/styles/App.css';
import '../../assets/styles/global-styles.css';
import '../../assets/styles/components-cells.css';


class PersonCell extends Component{
    render(){
        return(
            <div className="person-cell">
                <div className="person-subcell">
                    <div className="h2-default">{this.props.person.name}</div>
                    <div className="p1-low-emphasis">{((this.props.person.species == null) ? "Human" : this.props.person.species.name) +" from "+this.props.person.homeworld.name}</div>
                </div>
                <button className="arrow-button" 
                onClick={() =>this.props.idSelected(this.props.person.id) }><img src={arrow} 
                className="arrow-logo" alt="arrow" /></button>
            
            </div>
            
        );
    }
}

export default PersonCell;