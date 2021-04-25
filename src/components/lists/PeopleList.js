import React,{useState} from 'react';
//import the query function for the graphql's apollo clinet
import {useQuery} from '@apollo/client';
//import the stylesheets
import '../../assets/styles/App.css';
import '../../assets/styles/global-styles.css';
import '../../assets/styles/components-lists.css';
//import the query for obtain all the all the characters of the movie, their  name, specie and origin place
import {GET_PEOPLE} from '../../api-apollo/AllPeopleQuery';
//import the components that are part of this
import PersonCell from '../cells/PersonCell';
import LoadingCell from '../cells/LoadingCell';
import NoticeCell from '../cells/NoticeCell';


// function used for the limitations of JSX, if data is still being loaded, displays a loading message(LoadingCell)
function isLoading(flag){
    if(flag) return <LoadingCell/>
}

function PeopleList ({setId}){
    const settingId=(personId)=>{
        setId(personId);
    }
    //here starts the apollo-client query, first we start requesting 5 elements as we can see in AllPeopleQuery file
    const {data, error, loading, fetchMore} = useQuery(GET_PEOPLE,
        {
            variables: {after: null}
        });
    if(loading) return <div className="people-list"><LoadingCell/></div>
    if(error) return <div className="people-list"> <NoticeCell/> </div>
    var flag;
    //this code segment is used to repeatedly request 5-element pages from the graphql server until all are found locally 
    if(data.allPeople.pageInfo.hasNextPage){
        flag=loading;
        fetchMore({
        variables: {
            after: data.allPeople.pageInfo.endCursor,
            limit: 5
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
            if (!fetchMoreResult){
            return prevResult;
            }
            return Object.assign({}, prevResult, fetchMoreResult);
        }
        });
    }
    //here ends the apollo-client query
    return(
        <div className="people-list">
            {data.allPeople.people.map((person,id) => (
                <PersonCell person={person} idSelected={personId => settingId(personId)}/>
            ))
            }
            {isLoading(flag) }
        </div>
    )
    
}

export default PeopleList;