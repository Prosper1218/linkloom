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
      setnumber
   };
   return (
      <div className="flex flex-row">
         <div className="grow min-h-[100vh]">
            <Outlet context={context} />
         </div>
         <div className=" hidden sm:block w-[16rem]">
            <FormNav />
         </div>
      </div>
   );
};

export default FormLayout;
