import { createStore } from "redux"
const initStata = {

    student: [
        { name: "ali" },
        { name: "asif" },
        { name: "ahmed" },

    ]
}
//craeting reducer
function StudentReducer(state = initStata, action) {
    switch (action.type) {
        case "ADD-STUDENT":
            return {

                ...state,
                student: [...state.student, action.data]
            }
            break;
        case "DELETE-STUDENT":
            return {

                ...state,
                student : state.student.filter(std => {return std.name != action.data.name })

            }
            break;

        default:
            return state
            break;
    }
}

//creating store
const store = createStore(StudentReducer)

//action
store.dispatch({
    type: "DELETE-STUDENT",
    data: { name: "asif" }
})

//getstate
console.log(store.getState())

export default store;























// import { createStore } from "redux";
// let initStata = {
//     student :[
//     { name: "ali" },
//     { name: "asif" },
//     { name: "ali" },
//     { name: "ali" },
//     { name: "ali" },
//     { name: "ali" },
// ]}

// function Todo(state = initStata, action) {
//     switch (action.type) {
//         case "ADD":
//             return {

//                 ...state,
//                 student: [...state.student , action.data]
//             }
//         case "DELETE":
//             return {
//                 state: initStata.filter(item => {return item.name != "ali"})

//             }


//         default:
//             return state

//     }

// }

// const store = createStore(Todo);
// store.dispatch({
//     type: "ADD", 
//     data : {name : "akbar"}
// })
// console.log(store.getState())

// export default store;