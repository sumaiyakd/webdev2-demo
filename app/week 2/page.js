import Heading from "./heading";


export default function Page() {
    let a = 5;
    let b = 10;

    return (
        <main>
            <Heading />
            <h1>Week 2 Demos</h1>
            <p>These are the demos for week 3!</p>
            <p>The sum of a and b is {a + b}</p>
        </main>
    );
}