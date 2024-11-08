import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export function Results({ userInput }) {
    let results = calculateInvestmentResults(userInput);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    return (
        <section id="result" className="center">
            <h2>Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Interest (Total)</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                {/* <InnerResults results={results} initialInvestment={initialInvestment} /> */}

                <tbody>
                    {
                        results.map((yearData) => {
                            const totalInterest = yearData.valueEndOfYear - (yearData.year * yearData.annualInvestment) - initialInvestment;
                            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                            return (
                                <tr key={yearData.year}>
                                    <td>{yearData.year}</td>
                                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                    <td>{formatter.format(yearData.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </section>
    );
}
