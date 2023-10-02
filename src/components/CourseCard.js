import React, { useState, useEffect } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Rating from './Rating';
import { useContract, useContractRead, useContractWrite, useAddress } from "@thirdweb-dev/react";
import Web3 from 'web3';
import CoursesData from "../data/coursesData"


export default async function CourseCard({
  //key,
  item,
  //academyAddress,
  //courseInfo,
  // courseNumber,
   //category,
   //title,
   rareFind = false,
   liked = false,
   image = null,
}) {

  console.log('Received item in CourseCard:', item);

  const {
    initializeCourse,
    isInitializingCourse,
    setPayment,
    isSettingPayment,
    enroll,
    isLoadingEnroll,
    withdraw,
    isLoadingWithdraw,
    sponsor,
    isLoadingSponsor,
    unsponsor,
    isLoadingUnsponsor,
    startCourse,
    isLoadingStartCourse,
    bootStudent,
    isLoadingBoot,
    claimPayment,
    isLoadingClaim,
    dropOut,
    isLoadingDropout,
    grantRole,
    isLoadingGrantRole,
    revokeRole,
    isLoadingRevokeRole,
    passStudent,
    isLoadingPass,
    factoryAddress,
    teacherAddress,
    uri,
    courseStatus,
    isLoadingCourseStatus,
    payment,
    isLoadingPayment,
    paymentStatus,
    isLoadingPaymentStatus,
    paymentTimestamp,
    isLoadingPaymentTimestamp,
    sponsorshipTotal,
    isLoadingSponsorshipTotal,
    sponsorshipTotalError,
    studentDeposit,
    isLoadingStudentDeposit,
    studentStake,
    isLoadingStudentStake,
    courseTitle,
    description,
    courseInfo
  } = CoursesData(item);
  const [isLiked, setIsLiked] = useState(liked);

  return React.createElement(
    Card,
    {
      variant: 'outlined',
      orientation: 'horizontal',
      sx: {
        transition: '250ms all',
        padding: {
          xs: 0,
          sm: 2,
        },
        boxShadow: 'none',
        borderRadius: 'sm',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      },
    },
    React.createElement(
      Stack,
      {
        direction: {
          xs: 'column',
          sm: 'row',
        },
        width: '100%',
        spacing: 2.5,
      },
      React.createElement(
        Box,
        {
          sx: {
            width: {
              xs: '100%',
              sm: 200,
            },
            marginBottom: {
              xs: -2.5,
              sm: 0,
            },
          },
        },
        React.createElement(
          AspectRatio,
          {
            ratio: 16 / 9,
            sx: (theme) => ({
              borderRadius: 'xs',
              [theme.breakpoints.down('sm')]: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            }),
          },
          React.createElement('img', { alt: '', src: image, style: { display: 'block' } }),
          rareFind && (
            React.createElement(
              Chip,
              {
                variant: 'soft',
                startDecorator: React.createElement('i', { 'data-feather': 'award' }),
                size: 'sm',
                sx: { position: 'absolute', bottom: 8, left: 8 },
              },
              'Rare find'
            )
          ),
        )
      ),
      React.createElement(
        Stack,
        {
          sx: {
            padding: {
              xs: 2,
              sm: 0,
            },
          },
          spacing: 1,
          flex: 1,
        },
        React.createElement(
          Stack,
          {
            spacing: 1,
            direction: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          },
          React.createElement(
            'div',
            null,
            React.createElement(
              Typography,
              {
                color: 'primary',
                fontSize: 'lg',
                fontWeight: 'lg',
              },
              courseTitle
            ),
            React.createElement(
              Typography,
              {
                fontWeight: 'md',
                fontSize: 'sm',
              },
              React.createElement(
                Link,
                {
                  overlay: true,
                  underline: 'none',
                  href: '#interactive-card',
                  sx: { color: 'text.primary' },
                },
                description
              )
            )
          ),
        ),
        React.createElement(
          Stack,
          {
            spacing: 1,
            direction: 'row',
          },
          React.createElement(Rating, null),
          React.createElement(Typography, null, '202 reviews')
        ),
        React.createElement(
          Stack,
          {
            spacing: 3,
            direction: 'row',
          },
          React.createElement(
            Typography,
            {
              startDecorator: React.createElement('i', { 'data-feather': 'user' }),
            },
            'Teacher EAS/0x'
          ),
          React.createElement(
            Typography,
            {
              startDecorator: React.createElement('i', { 'data-feather': 'calendar' }),
              display: {
                xs: 'none',
                md: 'flex',
              },
            },
            'Course Start'
          ),
          React.createElement(
            Typography,
            {
              startDecorator: React.createElement('i', { 'data-feather': 'clock' }),
              display: {
                xs: 'none',
                md: 'flex',
              },
            },
            'Time Committment'
          ),
          React.createElement(
            Typography,
            {
              sx: { flexGrow: 1, textAlign: 'right' },
            },
            React.createElement(
              'strong',
              null,
              '5 MATIC'
            ),
            React.createElement(Typography, null, 'To Enroll')
          )
        )
      )
    )
  );
}

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
