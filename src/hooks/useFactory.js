// import {
//     useContract,
//     useContractRead,
//     useContractWrite,
//     useContractEvents,
//     useAddress,
//   } from "@thirdweb-dev/react";
// import { useState, useEffect } from "react";
// import { role, academyAddress } from "./constants";
  
// export default function useFactory() {
  
//     const { contract, isLoadingContract } = useContract(academyAddress);
//     const address = useAddress();
//     const [account, setAccount] = useState("");
    
  
//     const { data: courseCreatedEvent } = useContractEvents(contract, "CourseCreated", {
//       queryFilter: {
//         filters: {},
//         fromBlock: 44871649,
//         toBlock: "latest",
//         order: "asc",
//       },
//       subscribe: true,
//     });
  
//     const { data: academyInfo, isLoading: isLoadingAcademyInfo } = useContractRead(contract, "academyInfo");
  
//     useEffect(() => {
//       if (address && courseCreatedEvent) {
//         setAccount(address);
//       }
//     }, [address, courseCreatedEvent]);
  
//     const { mutateAsync: createCourse } = useContractWrite(contract, "createCourse");
  
//     const createCourseCall = async () => {
//       try {
//         await createCourse({ args: [] });
//       } catch (err) {
//         console.error("contract call failure", err);
//       }
//     };

//     const [sortedEvents, setSortedEvents] = useState([]);

//     useEffect(() => {
//       if (courseCreatedEvent) {
//         const sorted = [...courseCreatedEvent].sort((a, b) => b.transaction.blockNumber - a.transaction.blockNumber);
//         setSortedEvents(sorted);
//       }
//     }, [courseCreatedEvent]);


  
//     return {
//       account,
//       address,
//       courseCreatedEvent,
//       sortedEvents,
//       academyInfo,
//       isLoadingContract,
//       isLoadingAcademyInfo,
//       setAccount,
//       createCourseCall,
//     };
//   }
  