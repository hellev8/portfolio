import React from "react";

const SecondaryInfo = ({ label, value }) => (
    <p className="shoting-info secondary-infos" style={{ marginTop: "10px" }}>
        <strong>{label}:</strong> {value}
    </p>
);

export default SecondaryInfo;
