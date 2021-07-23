import { getEmployees, getOrders } from "./database.js"

// Add a click event that will display the amount of products an employee has sold

// 1. According to ERD, the only place where I could see amount of product sold per employee
// would be Orders, so I need to import the objects array from the database, and store it in a variable 




// 2. Create click event (document.addEventListener) --> Because when you click in the document, you're clicking on more than one component/module  
document.addEventListener(
    "click",
    (clickEvent) => {
        // 3. addEventListener takes 2 arguments "click"(the action that triggers the event) and (clickEvent) => {} a function containing all the logic that happens when the event is triggered.
        const itemClicked = clickEvent.target // 4. in the function, store clickEvent.target in a variable for easier referencing (eg: itemClicked = clickEvent.target)
        if (itemClicked.id.startsWith("employee")) { // the event does't happen just anytime you click anywhere, so it needs CONDITIONS (if statement FTW) 
        // 5. When DOES our event happen? When a user clicks on the name of an employee.
        // so, our code needs to check whether the itemClicked is what we want, which we can check against by what the id starts with (startsWith() method).

            // Now that we have our condition, we need to figure out what happens after it's met. In our case, we want to check it against the information contained in the employees data base.
            // What value is similar in our clicked target and our employees objects? ID
            // We can compare those, but we need the same data type, so we will separate the value conatined in itemClicked.id (whoch creates an array with the separate strings), and deconstruct that array to only get the value we're after, which we're going to store into employeeID
            const [,employeeId] = itemClicked.id.split("--") 
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {   // if the data stored in object in key id is absolutely equal to the value stored in employeeId (parsed from a string to an integer)
                    const employeeOrders = orders.filter(    // iterate through orders array to find a specific value (filter) ----->>>>>CREATES NEW ARRAY<<<<<------
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )
                    window.alert(` ${employee.name} sold ${employeeOrders.length} products `)
                }
            }
        }
    }
)






const orders = getOrders()
const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

