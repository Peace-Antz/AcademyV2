// import { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import { ethers } from "ethers";
// import { useContractHooks } from "../components/CourseCard";
// import  useFactory from "./useFactory";
// import { role, academyAddress } from "./constants";
// import{ useEventHooks } from "./useEventHooks"
// import item from "../pages/Courses";
// import { useStorage } from "@thirdweb-dev/react";

// export function useUtilityFunctions() {

// const { initializeCourse,
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
//     isLoadingStudentStake } = useContractHooks(item);

// const {
//     address,
//     courseCreatedEvent,
//     academyInfo,
//     isLoadingContract,
//     isLoadingAcademyInfo,
//     createCourseCall,
//   } = useFactory();

// const {
//     paymentStatusEvents,
//     roleGrantedEvents,
//     enrolledEvents,
//     roleRevokedEvents,
//     dropoutEvents,
//   } = useEventHooks();

//   const storage = useStorage();

// console.log('Payment Status:', paymentStatus);
// console.log('Is Loading Payment Status:', isLoadingPaymentStatus);

// //State hooks
  
// const [roleGranted, setRoleGranted] = useState(false);
// const [paymentSet, setPaymentSet] = useState(false);
// const [paymentAmount, setPaymentAmount] = useState(0);
// const paymentAmountInWei = ethers.utils.parseUnits(paymentAmount.toString(), 'ether');

// const [sponsorAmount, setSponsorAmount] = useState(0);
// let sponsorAmountInWei = '0';
//   if (sponsorAmount !== '') {
//       sponsorAmountInWei = ethers.utils.parseUnits(sponsorAmount.toString(), 'ether');
//   }


// const [bootAddress, setBootAddress] = useState("");
// const [studentAddress, setStudentAddress] = useState("");
// const [unsponsorAddress, setUnsponsorAddress] = useState("");
// // const [unsponsorAmount, setUnsponsorAmount] = useState(0);
// // const unsponsorAmountInWei = ethers.utils.parseUnits(unsponsorAmount.toString(), 'ether');

// const [initData, setInitData] = useState([]);
// const [account, setAccount] = useState("");
// const [courseCount, setCourseCount] = useState(0);
// const [data, setData] = useState([]);

// const [uriData, setUriData] = useState("");
// const [uriSyl, setUriSyl] = useState("");
// const [json, setJson] = useState("");
// //const [courseId, setCourseId] = useState([]);

//   // Additional state Course Info
//   const [courseTitle, setCourseTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [timeCommitment, setTimeCommitment] = useState("");
//   const [courseInfo, setCourseInfo] = useState(null);
//   const [isLoadingCourseInfo, setIsLoadingCourseInfo] = useState(true);
//   const [pdfData, setPdfData] = useState("");
//   const [syllabusPdf, setSyllabusPdf] = useState(null);
//   const [startDateTime, setStartDateTime] = useState("");
//   const [courseLStatus, setCourseLStatus] = useState('Pending');
//   const [enrolledStudents, setEnrolledStudents] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);



// let enrollStake;
// if (studentStake) {
//   enrollStake = ethers.utils.formatEther(studentStake.toString());
// }

// // const studentStakeWei = ethers.BigNumber.from(studentStake);
// // const studentStakeEther = ethers.utils.formatEther(studentStakeWei);

// console.log("enrollStake", enrollStake);
// console.log("sponsorAmountInWei", sponsorAmountInWei);
// console.log("sponsorAmount", sponsorAmount);
// // console.log("sponsorAmountInWei", unsponsorAmountInWei);
// // console.log("sponsorAmount", unsponsorAmount);
// // console.log("studentStakeWei", studentStakeWei);
// // console.log("studentStakeEther", studentStakeEther);

//   // Set course status based on paymentStatus and courseStatus
//   useEffect(() => {
//     let status = "Pending";
//     if (paymentStatus && courseStatus) status = "Complete";
//     else if (!paymentStatus && courseStatus) status = "In-Progress";
//     else if (paymentStatus && !courseStatus) status = "Open";
//     setCourseLStatus(status);
//   }, [paymentStatus, courseStatus]);


// useEffect(() => {
//   if (address && roleGrantedEvents && roleGrantedEvents.length > 0) {
//     setRoleGranted(true);
//     setAccount(address);
//   }
// }, [roleGrantedEvents, address]);

// useEffect(() => {
//   if (paymentStatusEvents && paymentStatusEvents.some(event => event.data.paymentStatus === true)) {
//     setPaymentSet(true);
//   } else {
//     setPaymentSet(false);
//   }
// }, [paymentStatusEvents, roleGrantedEvents]);

// useEffect(()=>{
//   if (studentAddress){
//     setStudentAddress(studentAddress);
//   }

// }, [studentAddress]);



// useEffect(() => {
//   if (syllabusPdf) {
//     setSyllabusPdf(syllabusPdf);
//   }
// }, [syllabusPdf]);

// // useEffect(() => {
// //   const fetchData = async () => {
// //     try {
// //       if (courseInfo) {
// //         setCourseInfo(courseInfo);
// //         const uriData = await uriCall();
// //         setUriData(uriData);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching course data:', error);
// //     }
// //   };

// // }, [courseInfo, uriData]);

// useEffect(() => {
//   if (pdfData) {
//     setPdfData(pdfData);
//   }
// });

// useEffect(() => {
//   if (uriData && uriData.ok && uriData.headers && uriData.headers.get('content-type') === 'application/json') {
//     uriData.json().then((data) => {
//       setCourseInfo(data.courseInfo);
      
//     }).catch((error) => {
//       console.error('Failed to parse JSON data:', error);
//     });
//   }
// }, [uriData, paymentStatusEvents]);

// useEffect(() => {
//   if (!courseInfo && uri) {
//     uriCall();

//   }
// }, [isLoadingStudentDeposit, paymentStatusEvents, uri]);

// useEffect(() => {
// let newEnrolledStudents = [...enrolledStudents];

// // When a new StudentEnrolled event occurs, add the student to the list
// if (enrolledEvents) {
//   enrolledEvents.forEach(event => {
//     if (!newEnrolledStudents.includes(event.data.account)) {
//       newEnrolledStudents.push(event.data.account);
//     }
//   });
// }

// // When a new RoleRevoked event occurs, remove the student from the list
// if (roleRevokedEvents) {
//   roleRevokedEvents.forEach(event => {
//     newEnrolledStudents = newEnrolledStudents.filter(student => student !== event.data.account);
//   });
// }

// setEnrolledStudents(newEnrolledStudents);
// }, [enrolledEvents, roleRevokedEvents]);

//     //JS Functions
//     // Function to retrieve course information from local storage
  
    
//     const handlePdf = async (syllabusPdf) => {
//         try {
//           const pdfData = await storage.upload(syllabusPdf); // Assuming you have the `storage` object already defined
//           console.log("PDF uploaded successfully:", pdfData);
//           setPdfData(pdfData);
//         } catch (error) {
//           console.error("Failed to upload PDF:", error);    
//         }
//       };
    
//       const uploadFile = async () => {
//         try {
//           // Validate that all required information is present
//           if (!courseTitle || !description || !timeCommitment || !pdfData) {
//             throw new Error("Missing required course information");
//           }
      
//           const jsonFile = {
//             courseInfo: {
//               title: courseTitle,
//               description: description,
//               timeCommitment: timeCommitment,
//               startDate: startDateTime,
//               syllabus: pdfData
//             }
//           };
      
//           const courseInfo = await storage.upload(jsonFile);
//           console.log("File uploaded successfully:", courseInfo);
//           return courseInfo;
//         } catch (error) {
//           console.error("Failed to upload file:", error);
//           setErrorMessage(error.message); // set error message
//           setIsModalOpen(true); // open error modal
//         }
//       };
      


//   //TROUBLESHOOTING
// // console.log("item:", item);
// // console.log("factoryAddress:", factoryAddress);
// // console.log("teacherAddress:", teacherAddress);
// // console.log("courseStatus:", courseStatus);
// // console.log("payment:", payment);
// // console.log("paymentStatus:", paymentStatus);
// // console.log("paymentTimestamp:", paymentTimestamp);
// // console.log("sponsorshipTotal:", sponsorshipTotal);
// // console.log("studentDeposit:", studentDeposit);
// // console.log("studentStake:", studentStake);
// // console.log("paymentStatusEvents:", paymentStatusEvents);
// // console.log("roleGrantedEvents:", roleGrantedEvents);
// // console.log("dropoutEvents:", dropoutEvents);
// // console.log("courseInfo", courseInfo);
// // console.log("pdfData", pdfData);
// // console.log("syllabusPdf", syllabusPdf);
// // console.log("enrolledStudents", enrolledStudents);

// const initializeCourseCall = async () => {
//     try {
//       const initData = await initializeCourse({ args: [item.data.account, academyAddress] });
//       console.info("contract call success", initData);
//     } catch (err) {
//       console.error("contract call failure", err);
//       const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }

//   console.log("initData:", initData);

//   const setPaymentCall = async () => {
//     try {
//       // Upload the file and get the course info
//       let courseInfo;
//       try {
//         courseInfo = await uploadFile();
//       } catch (err) {
//         console.error("Failed to upload file:", err);
//         let errorReason;
//         if (err.message.includes('Reason:')) {
//             errorReason = err.split('Error: ')[1]?.split(' ')[0]?.trim();
//         } else {
//             errorReason = err.message;
//         }
//         setErrorMessage(errorReason);
//       setIsModalOpen(true);
//         return;
//       }
    
//       // Check if courseInfo is available
//       if (!courseInfo) {
//         console.error("Course info is not available");
//         return;
//       }
    
//       const setPaymentData = await setPayment({ args: [paymentAmountInWei, courseInfo] });
//       console.info("Contract call success", setPaymentData);
//       const uriData = await uriCall();
//       console.info("uriData call success", uriData);
//     } catch (err) {
//       console.error("Contract call failure", err);
//       let errorReason;
//         if (err.message.includes('Reason:')) {
//             errorReason = err.message.split('Error: ')[1]?.split(' ')[0]?.trim();
//         } else {
//             errorReason = err.message;
//         }
//         setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   };
  

//   const enrollCall = async () => {
//     try {
//       const enrollData = await enroll({ 
//         args: [], 
//         overrides: { 
//           value: studentStake
//         } 
//       }); 
//       console.info("contract call success", enrollData);
//     } catch (error) {
//       console.error("contract call failure", error);
//       const errorReason = error.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }


//   const sponsorCall = async () => {
//     try {
//       const sponsorData = await sponsor({ 
//         args: [], 
//         overrides: { 
//           value: sponsorAmountInWei
//         } 
//       }); 
//       console.info("contract call success", sponsorData);
//     } catch (err) {
//       console.error("contract call failure", err);
//       const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }

//   const unsponsorCall = async () => {
//     try {
//       const unsponsorData = await unsponsor({ args: [address, sponsorAmountInWei] });
//       console.info("contract call successs", unsponsorData);
//     } catch (err) {
//       console.error("contract call failure", err);
//       const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }

//   const startCourseCall = async () => {
//     try {
//       const startData = await startCourse({ args: [] }); 
//       console.info("contract call success", startData);
      
//     } catch (err) {
//       console.error("contract call failure", err);
//       const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }

//   const bootCall = async () => {
//     try {
//       const bootData = await bootStudent({ args: [studentAddress] });
//       console.info("contract call success", bootData);
//     } catch (err) {
//       console.error("contract call failure", err);
//       const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }
  

//   const passCall = async () => {
//     try {
//       const passData = await passStudent({ args: [studentAddress] });
//       console.info("contract call successs", passData);
//     } catch (err) {
//       console.error("contract call failure", err);
//       const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }

//   const claimCall = async () => {
//     try {
//       const claimData = await claimPayment({ args: [] });
//       console.info("contract call successs", claimData);
      
//     } catch (err) {
//       console.error("contract call failure", err);
//       const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }

//   const dropCall = async () => {
//     try {
//       const dropData = await dropOut({ args: [] });
//       console.info("contract call successs", dropData);
//     } catch (err) {
//       console.error("contract call failure", err);
//       const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }

//   // const grantRoleCall = async () => {
//   //   try {
//   //     const grantRoleData = await grantRole({ args: [role, address] });
//   //     console.info("contract call successs", grantRoleData);
//   //   } catch (err) {
//   //     console.error("contract call failure", err);
//   //   }
//   // }

//   // const revokeCall = async () => {
//   //   try {
//   //     const revokeData = await revokeRole({ args: [role, address] });
//   //     console.info("contract call successs", revokeData);
//   //   } catch (err) {
//   //     console.error("contract call failure", err);
//   //   }
//   // }

//   const withdrawCall = async () => {
//     try {
//       const withdrawData = await withdraw({ args: [] });
//       console.info("contract call successs", withdrawData);
//     } catch (err) {
//       console.error("contract call failure", err);
//       const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
//       setErrorMessage(errorReason);
//       setIsModalOpen(true);
//     }
//   }

//   const uriCall = async () => {
//     try {
//         if (uri !== null && uri !== undefined && uri !== "") {
//             const uriData = await storage?.download(uri);
//             setUriData(uriData);
//             console.info("URI call success", uriData);
//             return uriData;
//         } else {
//             console.error("URI is null or undefined.");
//         }
//     } catch (err) {
//         console.error("URI call failure", err);
//         throw err;
//     }
// };


  
  
//   console.log("uri", uri);
//   console.log("json", json);
//   console.log("uriSyl", uriSyl);
//   console.log("uriData", uriData);

// return {

//     initializeCourseCall,
//     setPaymentCall,
//     enrollCall,
//     sponsorCall,
//     unsponsorCall,
//     startCourseCall,
//     bootCall,
//     passCall,
//     claimCall,
//     dropCall,
//     withdrawCall,
//     uriCall,
        
//     // States
//     roleGranted,
//     paymentSet,
//     paymentAmount,
//     sponsorAmount,
//     bootAddress,
//     studentAddress,
//     unsponsorAddress,
//     initData,
//     account,
//     courseCount,
//     data,
//     uriData,
//     uriSyl,
//     json,
//     courseTitle,
//     description,
//     timeCommitment,
//     courseInfo,
//     isLoadingCourseInfo,
//     pdfData,
//     syllabusPdf,
//     startDateTime,
//     courseLStatus,
//     enrolledStudents,
//     errorMessage,
//     isModalOpen,
//     factoryAddress,
//     teacherAddress,
//     courseStatus,
//     payment,
//     paymentTimestamp,
//     sponsorshipTotal,
//     studentDeposit,
//     studentStake,
//     paymentStatusEvents,
//     roleGrantedEvents,
//     dropoutEvents,
//     courseInfo,
//     pdfData,
//     enrolledStudents
//   };
//     }