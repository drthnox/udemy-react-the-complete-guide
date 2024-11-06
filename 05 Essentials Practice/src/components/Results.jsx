import { useState } from "react";

export function Results({ userInput }) {
    console.log('Results:userInput = ' + userInput);
    return (
        <section id="result" className="center">
            <h2>Results</h2>
            <table>
                <thead></thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
        </section>
    );
}
