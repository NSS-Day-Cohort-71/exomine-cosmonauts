//import facility data from facility manager
import { getFacilities } from "./managers/facilityManager.js";
//define a function to get HTML for facility select element
export const facilityList = async () => {
    //add change event listener handl facilityChoice

    //save facility data to a varaible
    const facilities = await getFacilities()
    //set variable html <h2>Choose facility</h2> <select id="facilitySelect" name= facility" disabled>
                    //<option disabled selected>Choose facility</option>
    let html = `
                <h2>Choose facility</h2>
                <select id="facilitySelect" name="facility">
                <option disabled selected>Choose facility</option> 
    `
    //map facilitys array
    const facilityHTML = facilities.map(facility => {
        //return <option value= facilityId"> facility Name</option>
        return `<option value="${facility.id}">${facility.name}</option>`
         //join map
    }).join("")
        
    html += facilityHTML
   
    //close select
    html += `</select>`
    //return html
    return html
}
    

//define event listener
    //if target name === facility
    //setFacility(parseInt facilityId))
    //invoke getFacilityMinerals()