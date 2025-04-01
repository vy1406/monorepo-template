import React from 'react';

export const Button = ({ label }: { label: string }) => {
    return <button style={{ border: "1px solid green", padding: "10px" }}>{label}</button>;
};