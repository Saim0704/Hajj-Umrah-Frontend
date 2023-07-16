import React from "react";

const BasicDetails = () => {
  return (
    <div>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="first_name">Package Name</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Name your package"
                  required
                />
              </div>
              <div>
                <label for="last_name">Package Cost</label>
                <input type="number" id="" placeholder="In INR" required/>
              </div>
              <div>
                <label for="">Select Duration</label>
                <select id="">
                  <option selected>Day type</option>
                </select>
              </div>
              <div>
                <label for="duration">Duration Nos.</label>
                <select id="">
                  <option selected>No. of Days </option>
                </select>
              </div>
              <div>
                <label for="from">From</label>
                <select id="">
                  <option selected>Delhi </option>
                </select>
              </div>
              <div>
                <label for="to"> To</label>
                <select id="">
                  <option selected>Makkah </option>
                </select>
              </div>
              <div>
                <label for="departure">Departure</label>
                <input type="date"  required/>
              </div>
              <div>
                <label for="return">Return</label>
                <input type="date"  required/>
              </div>
              <div>
                <label for="last_name">Additional Destination after Umrah</label>
                <input type="text" id="" placeholder="Ex. Madeena (user can add multiple entries)" required/>
              </div>
              <div>
                <label for="last_name">No. of Persons</label>
                <select id="">
                  <option selected>01 </option>
                  <option selected>02 </option>
                  <option selected>03 </option>
                  <option selected>04 </option>
                </select>
              </div> 
            </div>

            <div className="w-full">
                <label for="last_name">Package Details</label>
                <textarea id="message" rows="4"  placeholder="Write your thoughts here..."></textarea>
              </div>
            
           
          <div className="w-full flex pt-4">
            <div className="w-1/2"><button type="button" class="btn-bark">Back</button></div>
            <div className="w-1/2 text-right">
              <button type="button" class="btn-light">Save</button>
              <button type="button" class="btn-green">Next</button>
            </div>
            
            </div>  
            
            
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
