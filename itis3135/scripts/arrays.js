window.onload = function() {
    document.getElementById("employeeName").focus();
    let person = ["Reece", "David", "Sherry", "Kevin", "Sam", "Dylan"]
    let salaries = [120000, 30000, 34000, 65000, 34000, 67000]

    const addSalary = () => {
        const name = document.getElementById("employeeName").value;
        const salary = document.getElementById("employeeSalary").value;
        console.log(`Name: ${name}, Salary: ${salary}`);
        person.push(name);
        salaries.push(salary);
        document.getElementById("employeeName").focus();
        // console.log(salaries)
    }

    const displayResults = () => {
        let total = 0;  
        let count = 0;
        let highest = 0;
        for (let i = 0; i < salaries.length; i++) {
            const num = salaries[i]
            if(highest < num) {
                highest = num;
            }
            total = parseFloat(total) + parseFloat(num);
            console.log(total)
            count++;
        }
        const averageSalary = total / count;
        
        const header = document.createElement("h2");
        header.textContent = "Highest and Average Salaries"
        const average = document.createElement("p");
        average.textContent = `Average Salary: ${averageSalary.toFixed(2)}`;
        const highestSalary = document.createElement("p");
        highestSalary.textContent = `Highest Salary: ${highest}`;
        
        document.getElementById("results").appendChild(header);
        document.getElementById("results").appendChild(average);
        document.getElementById("results").appendChild(highestSalary);

        
    }

    const displaySalary = () => {
        const table = document.createElement("table");
        const header = document.createElement("tr");
        const name = document.createElement("th");
        name.textContent = "Name";
        const sal = document.createElement("th");
        sal.textContent = "Salary";
        header.appendChild(name);
        header.appendChild(sal);
        table.appendChild(header)
        for (let i = 0; i < salaries.length; i++) {
            const salary = salaries[i];
            const name = person[i];
            const row = document.createElement("tr");
            const sal = document.createElement("td");
            const nam = document.createElement("td");
            sal.textContent = salary;
            nam.textContent = name;
            row.appendChild(nam);
            row.appendChild(sal);
            table.appendChild(row)
            document.getElementById("results").appendChild(table);
        }
    }

    document.getElementById("displayResults").onclick = displayResults;
    document.getElementById("displaySalary").onclick = displaySalary;
    document.getElementById("addSalary").onclick = addSalary;
}