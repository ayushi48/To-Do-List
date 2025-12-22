//this slice store info of all the data
// import {createSlice} from "@reduxjs/toolkit";
// const saved=localStorage.getItem("todo_data");

// const initialState={
//     data:saved?JSON.parse(saved) : [],

// };


// const reactSlicer=createSlice({
//     name:"todo",
//     initialState,
//     reducers:{
//         add_data:(state,action)=>{
//             const {title,start,end,important,complete}=action.payload;
//             const new_data={
//                 id:Date.now(),
//                 title:title,
//                 start:start,
//                 end:end,
//                 important:important,
//                 complete:false,
//             };

//             state.data.push(new_data);
//             localStorage.setItem("todo_data",JSON.stringify(state.data));

//         },

//         remove_data:(state,action)=>{
//             const idtoremove=action.payload;
//             state.data=state.data.filter(item =>item.id!==idtoremove);
//             localStorage.setItem("todo_data",JSON.stringify(state.data));
//         },

//         update_data:(state,action)=>{
//             const {id,title,start,end}=action.payload;
//             state.data=state.data.map((value)=>{
//                 if(value.id===id)
//                 {
//                     return {...value,title,start,end}
//                 }
//                 return value;
//             });

//             localStorage.setItem("todo_data",JSON.stringify(state.data));
//         },

//         important_data:(state,action)=>{
//             const impid=action.payload;
//             state.data=state.data.map((value)=>{
//                 if(value.id===impid){
//                     return {...value,important:!value.important}
//                 }
//                 return value;
//             });

//         },


//     complete_data: (state, action) => {
//   const completeid = action.payload;
//   state.data = state.data.map((value) => {
//     if (value.id === completeid) {
//       return {
//         ...value,
//         complete: !value.complete, 
//       };
//     }
//     return value;
//   });
//   localStorage.setItem("todo_data", JSON.stringify(state.data)); // ✅ don't forget to persist
// },

 
//     },
// });

// export const { add_data, remove_data, update_data, important_data,complete_data } = reactSlicer.actions;
// export default reactSlicer.reducer;



//****************************************************************************************8 */


import {createSlice} from "@reduxjs/toolkit";
const saved=localStorage.getItem("todo_data");

const initialState={
    data:saved?JSON.parse(saved) : [],

};


const reactSlicer=createSlice({
    name:"todo",
    initialState,
    reducers:{
        add_data:(state,action)=>{
            const {title,start,end,important,complete}=action.payload;
            const new_data={
                id:Date.now(),
                title:title,
                start:start,
                end:end,
                important:important,
                complete:false,
            };

            state.data.push(new_data);
            localStorage.setItem("todo_data",JSON.stringify(state.data));

        },

        remove_data:(state,action)=>{
            const idtoremove=action.payload;
            state.data=state.data.filter(item =>item.id!==idtoremove);
            localStorage.setItem("todo_data",JSON.stringify(state.data));
        },

        update_data:(state,action)=>{
            const {id,title,start,end}=action.payload;
            state.data=state.data.map((value)=>{
                if(value.id===id)
                {
                    return {...value,title,start,end}
                }
                return value;
            });

            localStorage.setItem("todo_data",JSON.stringify(state.data));
        },

        important_data:(state,action)=>{
            const impid=action.payload;
            state.data=state.data.map((value)=>{
                if(value.id===impid){
                    return {...value,important:!value.important}
                }
                return value;
            });

        },


    complete_data: (state, action) => {
  const completeid = action.payload;
  state.data = state.data.map((value) => {
    if (value.id === completeid) {
      return {
        ...value,
        complete: !value.complete, 
      };
    }
    return value;
  });
  localStorage.setItem("todo_data", JSON.stringify(state.data)); // ✅ don't forget to persist
},

 
    },
});

export const { add_data, remove_data, update_data, important_data,complete_data } = reactSlicer.actions;
export default reactSlicer.reducer;