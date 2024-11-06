import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export function Results({ userInput }) {
    let results = calculateInvestmentResults(userInput);
    console.log(results);
    return (
        <section id="result" className="center">
            <h2>Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Interest Earned</th>
                        <th>Value EOY</th>
                        <th>Investment EOY</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.annualInvestment)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
