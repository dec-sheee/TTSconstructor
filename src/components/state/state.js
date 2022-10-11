
import { createGlobalState } from 'react-hooks-global-state';


const {setGlobalState, useGlobalState} = createGlobalState({
    completeText: '',
});


export { useGlobalState,setGlobalState};

