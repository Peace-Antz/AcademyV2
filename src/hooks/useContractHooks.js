// import { useContract, useContractRead, useContractWrite, useAddress } from "@thirdweb-dev/react";
// import Web3 from 'web3';
// import { useState, useEffect } from 'react';
// import { useEventHooks } from "./useEventHooks"


// export function useContractHooks(item) {
//   const {roleGrantedEvents} = useEventHooks();
//   const { contract } = useContract(item.data.courseId);
//   const address = useAddress();

//   // Write hooks
//   const { mutateAsync: initializeCourse, isLoading: isInitializingCourse } = useContractWrite(contract, "initialize");
//   const { mutateAsync: setPayment, isLoading: isSettingPayment } = useContractWrite(contract, "setAmount");
//   const { mutateAsync: enroll, isLoading: isLoadingEnroll } = useContractWrite(contract, "enroll");
//   const { mutateAsync: withdraw, isLoading: isLoadingWithdraw } = useContractWrite(contract, "withdraw");
//   const { mutateAsync: sponsor, isLoading: isLoadingSponsor } = useContractWrite(contract, "sponsor", { gasPrice: 5000000000 });
//   const { mutateAsync: unsponsor, isLoading: isLoadingUnsponsor } = useContractWrite(contract, "unsponsor");
//   const { mutateAsync: startCourse, isLoading: isLoadingStartCourse } = useContractWrite(contract, "updateCourseStatus");
//   const { mutateAsync: bootStudent, isLoading: isLoadingBoot } = useContractWrite(contract, "bootStudent");
//   const { mutateAsync: claimPayment, isLoading: isLoadingClaim } = useContractWrite(contract, "claimPayment");
//   const { mutateAsync: dropOut, isLoading: isLoadingDropout } = useContractWrite(contract, "dropOut");
//   const { mutateAsync: grantRole, isLoading: isLoadingGrantRole } = useContractWrite(contract, "grantRole");
//   const { mutateAsync: revokeRole, isLoading: isLoadingRevokeRole } = useContractWrite(contract, "revokeRole");
//   const { mutateAsync: passStudent, isLoading: isLoadingPass } = useContractWrite(contract, "passStudent");

//   // Read hooks
//   const { data: factoryAddress } = useContractRead(contract, "factoryAddress");
//   const { data: teacherAddress } = useContractRead(contract, "teacher");
//   const { data: uri } = useContractRead(contract, "uri");

//   //const { data: courseCompleted, isLoading: isLoadingCourseCompleted } = useContractRead(contract, "courseCompleted", { args: [studentCheckAddress] });
//   const { data: courseStatus, isLoading: isLoadingCourseStatus } = useContractRead(contract, "courseStatus");
//   //const { data: role, isLoading: isLoadingRole } = useContractRead(contract, "hasRole", [role, account]);
//   const { data: payment, isLoading: isLoadingPayment } = useContractRead(contract, "payment");
//   const { data: paymentStatus, isLoading: isLoadingPaymentStatus } = useContractRead(contract, "paymentStatus");
//   const { data: paymentTimestamp, isLoading: isLoadingPaymentTimestamp } = useContractRead(contract, "paymentTimestamp");
//   //const { data: sponsorDeposit, isLoading: isLoadingSponsorDeposit } = useContractRead(contract, "sponsorDeposit", { args: [sponsorCheckAddress] });
//   //const { data: sponsorCheck, isLoading: isLoadingSponsorCheck } = useContractRead(contract, "sponsors", { args: [sponsorCheckAddress] });
//   const { data: sponsorshipTotal, isLoading: isLoadingSponsorshipTotal, error: sponsorshipTotalError } = useContractRead(contract, "sponsorshipTotal");
//   const { data: studentDeposit, isLoading: isLoadingStudentDeposit, error: studentDepositError } = useContractRead(contract, "studentDeposit", [address]);
//   const { data: studentStake, isLoading: isLoadingStudentStake, error: studentStakeError } = useContractRead(contract, "studentStake");
//   //const { data: studentCheck, isLoading: isLoadingStudentCheck } = useContractRead(contract, "students", { args: [studentCheckAddress] });
 
//   const [balance, setBalance] = useState(null);
 
//   useEffect(() => {
//     async function fetchBalance() {
//       // Initialize web3 (make sure you have a provider, e.g. MetaMask)
//       const web3 = new Web3(Web3.givenProvider || "https://polygon-rpc.com");
  
//       // Fetch the balance
//       const contractBalance = await web3.eth.getBalance(item.data.courseId);
  
//       console.log("Raw Balance in Wei:", contractBalance); // Log the raw balance
  
//       // Convert the balance to Ether and set it to the state
//       setBalance(web3.utils.fromWei(contractBalance, 'ether'));
//     }
  
//     fetchBalance();
//   }, [roleGrantedEvents]);

//   // Returning the hooks
//   return {
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
//     teacherAddress,
//     uri,
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
//   };
// }