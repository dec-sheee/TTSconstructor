import data from '../../data.json';
import DonateModal from '../donateModal/DonateModal';

const useMatches = () => {

    const checkMatches = (names) =>{
        data.voices.map(item => {

            if(names.indexOf(` ${item.name}:`) > -1 && item.verification){
                // donateItems(item.name, item['direct-donation-link'])
                // console.log(item.name, item['direct-donation-link'])
            }else{
                // console.log(' no match')
            }
           
        })
        return
    }

    const donateItems = (name, link) =>{

    }

    return {checkMatches,donateItems}
}
export default useMatches;