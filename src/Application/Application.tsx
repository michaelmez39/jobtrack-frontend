import React from "react";
import './Application.css'
enum Status {
    Applied = "applied",
    Accepted = "accepted",
    Interviewing = "interviewing",
    Denied = "denied"
}

function StatusIndicator(props: any) {
    return <div className="status-indicator">
        {props.status}
    </div>
    
}

function Application(props: any) {
    
    return <div className={`application-card ${props.status}`}>
        <h2>{props.title}</h2>
        <StatusIndicator status={props.status} />
    </div>
}

export {Application, Status};