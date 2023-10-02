// import { useContract, useContractRead, useContractWrite, useContractEvents, useAddress, useStorage, MediaRenderer } from "@thirdweb-dev/react";
// import { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import { ethers } from "ethers";
// import sortedEvents from "./useFactory";
// import { useContractHooks } from "../components/CourseCard";
// import { useFactory} from "./useFactory";


// //Course Contract functions
// export default function useCourses({ sortedEvents, academyAddress }) {

//   const {
//     initializeCourse,
//     isInitializingCourse,
//     setPayment,
//     isSettingPayment,
//     enroll,
//     isLoadingEnroll,
//     withdraw,
//     isLoadingWithdraw,
//     sponsor,
//     isLoadingSponsor,
//     unsponsor,
//     isLoadingUnsponsor,
//     startCourse,
//     isLoadingStartCourse,
//     bootStudent,
//     isLoadingBoot,
//     claimPayment,
//     isLoadingClaim,
//     dropOut,
//     isLoadingDropout,
//     grantRole,
//     isLoadingGrantRole,
//     revokeRole,
//     isLoadingRevokeRole,
//     passStudent,
//     isLoadingPass,
//     factoryAddress,
//     isLoadingFactoryAddress,
//     teacherAddress,
//     isLoadingTeacherAddress,
//     uri,
//     isLoadingUri,
//     courseStatus,
//     isLoadingCourseStatus,
//     payment,
//     isLoadingPayment,
//     paymentStatus,
//     isLoadingPaymentStatus,
//     paymentTimestamp,
//     isLoadingPaymentTimestamp,
//     sponsorshipTotal,
//     isLoadingSponsorshipTotal,
//     sponsorshipTotalError,
//     studentDeposit,
//     isLoadingStudentDeposit,
//     studentStake,
//     isLoadingStudentStake,
//   } = useContractHooks();

//     //This uses the contract of each separate course
  
//     const storage = new useStorage({
//       gatewayUrls: ["https://peace-antz-academy.infura-ipfs.io","https://ipfs.thirdwebcdn.com/ipfs/"],
//     });
    
  
  
//     // const [_address, setAddress] = useState("");
//     // useEffect(() => {
//     //   if (address) {
//     //     setAddress(address);
//     //   }
//     // }, [address]);
    
//         //const { data: studentCheck, isLoading: isLoadingStudentCheck } = useContractRead(contract, "students", { args: [studentCheckAddress] });
//     // Can instantiate the downloader with the default gateway URLs
  
//     if (sponsorshipTotalError) {
//       console.log("failed to read contract", sponsorshipTotalError);
//     }
    
    
  

//   //Course Card Design
//   //if (!address) return <div>No wallet connected</div>;
//   return {
    
    
//     // Include other states and data you want to access outside this hook
//     // ...
// };
// }