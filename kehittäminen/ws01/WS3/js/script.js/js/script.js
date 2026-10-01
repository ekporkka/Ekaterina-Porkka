const animal = "Lion";
const habitat = "Savanna";
const diet = "Carnivore";

const table = `
    <table class="display">
        <thead>
            <tr>
                <th>Animal</th>
                <th>Habitat</th>
                <th>Diet</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
        </tbody>
    </table>
`;

const tableContainer = document.querySelector("#tableContainer");

tableContainer.innerHTML = table;