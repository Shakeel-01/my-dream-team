import React from 'react';

const Team = (props) => {
    const team = props.team;
    const playerStyle = { border: '1px solid green', width: '200px', margin: '10px', padding: '5px' }
    // const imgStyle ={height:'150px'}
    let salary = 0;
    for (let i = 0; i < team.length; i++) {
        const player = team[i];
        salary=salary+player.salary;
    }
       
    return (
        <div>
            <div >
                
                <h4>Total salary: {salary}</h4>
            </div>
            <div className={playerStyle}>
              { 
               team.map(list=><div>
                   <img style={{height:'150px',borderRadius:'50%'}} src={list.image} alt=""/>
                   <h4>Name: {list.name}</h4>
                   <p>Role: {list.role}</p>
                   <p>Salary: ${list.salary}</p>
                   </div>)
              }
            </div>
        </div>
    );
};

export default Team;