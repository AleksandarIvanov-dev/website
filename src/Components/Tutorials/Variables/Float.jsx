import React from "react";
import Header from "../../HeaderForTutorials/HeaderComponent";
import FooterHomePage from "../../HomePage/FooterHomePage";
import { Link } from "react-router-dom";


export default function Float() {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-6 rounded-lg shadow-inner">
            <Header />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">📘 Float</h2>

            <p className="text-gray-700 mb-6">
                In programming, <strong>floats</strong> (or <em>floating-point numbers</em>) are used to represent numbers with decimal points. They're essential for precision-based operations in math, science, finance, and everyday calculations.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">What is a Float?</h3>
            <p className="mb-4 text-gray-700">
                A float is a number that can represent fractions — values with digits after the decimal point. Unlike integers, which represent whole numbers, floats allow for more detailed and accurate values.
                For example, <code>3.14</code> is a float, while <code>3</code> is an integer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-blue-600 mb-2">Float Declaration Examples</h4>
                    <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                        <code>
            // Python<br />
                            pi = 3.14<br />
                            temperature = -5.5<br /><br />

            // Java<br />
                            float rate = 1.23f;<br />
                            double precision = 0.123456789012;<br /><br />

            // C++<br />
                            float gravity = 9.81;<br />
                            double distance = 384400.0;<br /><br />

            // JavaScript<br />
                            let speed = 299792458.0;
                        </code>
                    </pre>
                </div>


            </div>
            <h3 className="font-semibold text-blue-600 mb-2">Float vs Double vs Decimal</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
                <li><strong>Float:</strong> 32-bit, fast but limited precision (up to ~7 decimal digits).</li>
                <li><strong>Double:</strong> 64-bit, more precision (up to ~15-16 decimal digits), standard default.</li>
                <li><strong>Decimal:</strong> High precision (used in C#), great for financial calculations.</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Common Pitfalls</h3>
            <p className="text-gray-700 mb-4">
                Floating-point math isn't always exact due to how decimals are stored in binary. This can cause small rounding errors:
            </p>
            <pre className="bg-gray-200 p-2 rounded mb-4">
                <code>
        // JavaScript or Python<br />
                    0.1 + 0.2 === 0.3 // false!<br />
                    <br />
        // Safe comparison<br />
                    if (Math.abs(a - b) &lt; 1e-9) &#123; /* they're effectively equal */ &#125;
                </code>
            </pre>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-World Uses</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Scientific calculations (physics, astronomy)</li>
                <li>Financial apps (interest rates, stock prices)</li>
                <li>Games (motion, collision detection)</li>
                <li>Sensor data (temperature, pressure, GPS)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample Code</h3>
            <pre className="bg-gray-200 p-2 rounded mb-4">
                <code>
        // Adding two floats<br />
                    float a = 2.5;<br />
                    float b = 4.1;<br />
                    float sum = a + b; // 6.6<br />
                    <br />
        // Comparing floats (not always safe):<br />
                    if (a == 2.5) &#123;<br />
          // Might work, but use tolerances instead<br />
                    &#125;
                </code>
            </pre>

            <p className="text-gray-700">
                <strong>Important:</strong> Avoid checking float equality directly. Instead, compare with a small tolerance using <code>Math.abs(a - b) &lt; epsilon</code> (where epsilon is something like <code>1e-9</code>).
            </p>

            <div className="flex justify-center mt-6">
                <Link to="/tutorials/string" className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
                    Next: String
                </Link>
            </div>
            <FooterHomePage />
        </div>
    );

}