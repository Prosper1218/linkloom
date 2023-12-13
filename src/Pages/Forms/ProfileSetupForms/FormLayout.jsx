import React, {useState} from "react";
import {Outlet} from "react-router";
import FormNav from "./FormNav";

const FormLayout = () => {
   const [firstname, setfirstname] = useState("");
   const [lastname, setlastname] = useState("");
   const [gender, setgender] = useState("");
   const [occupation, setoccupation] = useState("");
   const [date, setdate] = useState("");
   const [location, setlocation] = useState("");
   const [relationshipstatus, setrelationshipstatus] = useState("");
   const [bio, setbio] = useState("");
   const [number, setnumber] = useState("");
   const context = {
      firstname,
      setfirstname,
      lastname,
      setlastname,
      setgender,
      gender,
      occupation,
      setoccupation,
      date,
      setdate,
      location,
      setlocation,
      relationshipstatus,
      setrelationshipstatus,
      bio,
      setbio,
      number,
      setnumber,
   };
   return (
      <div className="flex flex-row overflow-y-hidden">
         <div className="w-full sm:w-[24rem] min-h-[100vh] overflow-y-hidden shrink-0 ">
            <Outlet context={context} />
         </div>
         <div className=" hidden sm:block grow min-h-[100vh] overflow-y-hidden">
            <FormNav />
         </div>
      </div>
   );
};

export default FormLayout;
