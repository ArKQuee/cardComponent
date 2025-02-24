import React from "react";

const TeamMemberCard = ({ name, jobTitle }) => {
    return (
        <div style={styles.card}>
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.jobTitle}>{jobTitle}</p>
        </div>
    );
};

const styles = {
    card: {
        border:"1px solid #ddd",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        boxShoadow: "2px 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "200px",
    },
    name: {
        margin: "0",
        fontSize: "1.2em",
        color: "white",
    },
    jobTitle: {
        margin: "5px 0 0",
        fontSize: "1em",
        color: "#777",
    },
};

export default TeamMemberCard;