import React,{Component} from 'react';
import '../../assets/styles/App.css';
import '../../assets/styles/global-styles.css';
import '../../assets/styles/components-cells.css';

import {GET_PERSON} from '../../api-apollo/PersonQuery';

import {useQuery} from '@apollo/client';

import DataCell from '../cells/DataCell';
import SectionHeader from '../headers/SectionHeader';

function showAttributes(key,val){
    if(key!="vehicleConnection" && key!="__typename" && key!="name"){
        key = key.charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').trim().slice(1);
        if(val=="n/a" || !isNaN(val.charAt(0))){
            val = val.toUpperCase();
        }
        else{
            val = val.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }
        return <DataCell attribute={key} value={val}/>;
    }
}


function DataList({personId}){
    
    const {data, error, loading} = useQuery(GET_PERSON,
    {
        variables: {id: personId}
    });
    
    if(loading) return <div className="data-list"> </div>
    if(error) return <div className="data-list"> </div>
    return(
        <div className="data-list">
            <SectionHeader content="General Information"/>
            {
            Object.keys(data.person).map( (key, index)=>(
                showAttributes(key,data.person[key])
            ))  
            }
            <SectionHeader content="Vehicles"/>
            {data.person.vehicleConnection.vehicles.map((vehicle,name) => (
                <DataCell attribute={vehicle.name} value={""}/>
            ))
            }
        </div>
    );
    
}

export default DataList;