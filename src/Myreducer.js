const is={count:0};                  // this should be object
const reducer=(state,action)=>{
      switch(action.type)
      {
        case 'inc': return {count:state.count+1};
        case 'dec': return {count:state.count-1};
      }
}

export {is,reducer}