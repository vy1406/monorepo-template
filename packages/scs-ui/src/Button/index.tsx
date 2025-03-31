import React from 'react';

export const Button = ({ label }: { label: string }) => {
    return <button style={{ border: "1px solid red", padding: "10px" }}>{label}</button>;
};