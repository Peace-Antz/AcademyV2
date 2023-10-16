import React, { Fragment, useState, useEffect } from 'react';
import { useStorage } from "@thirdweb-dev/react";
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
import CoursesData from "../data/coursesData";
import feather from 'feather-icons';
import { ethers } from "ethers";
import Button from '@mui/joy/Button';
import LinearProgress from '@mui/joy/LinearProgress';
import CircularProgress from '@mui/joy/CircularProgress';
import Tooltip from '@mui/joy/Tooltip';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';



export default function CourseCard({
  //key,
  item,
  academyAddress,
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
    isPaymentClaimed,
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
    courseInfo,
    courseLStatus,
    sponsorAmount,
    sponsorAmountInWei,
    balance,
    enrolledEvents,
    address,
    enrolledStudents,
    syllabusPdf,
    
    setSponsorAmount,
    enrollCall,
    dropCall,
    withdrawCall,
    sponsorCall,
    unsponsorCall,
    initializeCourseCall,
    handlePdf
  } = CoursesData(item, academyAddress);

  // Use default values if courseInfo is null or undefined
const { title = 'Fetching Data...', 
      description = 'Fetching Data...', 
      timeCommitment = 'Fetching Data...', 
      startDate = '', 
      syllabus = '' } = courseInfo || {};

const progress = (sponsorshipTotal / payment) * 100;
const maticNeeded = Number(payment-sponsorshipTotal)*0.000000000000000001;

const isEnrolled = enrolledStudents && enrolledStudents.includes(address);

const courseStarted = courseStatus === true;

let buttonLabel = "";
let buttonColor = "success";
let buttonAction = null;

// Check if the student is enrolled
if (studentDeposit >0) {
    if (courseStarted) {
        buttonLabel = "Dropout";
        buttonColor = "danger";
        buttonAction = dropCall;
    } else {
        buttonLabel = "Withdraw";
        buttonColor = "warning";
        buttonAction = withdrawCall;
    }
} else {  // If student is not enrolled
    switch (courseLStatus) {
        case "Open":
            buttonLabel = "Enroll";
            buttonColor = "success";
            buttonAction = enrollCall;
            break;
        case "Pending":
        case "Complete":
            buttonLabel = "Course Locked";
            buttonColor = "neutral";
            buttonAction = null;
            break;
        default:
            // Handle any unexpected cases or log an error
            console.error("Unexpected courseLStatus: ", courseLStatus);
    }
}


console.log('courseStarted', courseStarted);
console.log('courseLStatus', courseLStatus);
console.log('enrolledEvents', enrolledEvents);
console.log('enrolledStudents', enrolledStudents);
console.log('isEnrolled', isEnrolled);
  console.log('courseInfo received by course card:', courseInfo);
  console.log('sponsorAmountInWei CC.js', sponsorAmountInWei);

  const [isLiked, setIsLiked] = useState(liked);



  const displayAddress = teacherAddress ? `${teacherAddress.substring(0, 4)}...${teacherAddress.slice(-4)}` : '';

  const tooltipContent = React.createElement(
    Box,
    {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        p: 1,
        gap: 1,
        alignItems: 'center'
      }
    },
    React.createElement(
      Input,
      {
        placeholder: "Enter amount in MATIC",
        value: sponsorAmount === '0' ? '' : sponsorAmount,
        onChange: (s) => {
          const value = s.target.value;
          if (!isNaN(value) && Number(value) >= 0) {
            setSponsorAmount(value);
          } else {
            setSponsorAmount('0');
          }
        },
        type: "number",
        min: "0",
        step: "0.000000000000000001",
        sx: {
          '&::before': {
            display: 'none',
          },
          '&:focus-within': {
            outline: '2px solid var(--Input-focusedHighlight)',
            outlineOffset: '2px',
          },
        }
      }
    ),
    React.createElement(
      Button,
      {
        variant: 'solid',
        color: 'success',
        onClick: () => {
          (async () => {
            try {
              // Call the sponsor function
              await sponsorCall(item.data.courseId, sponsorAmountInWei);
            } catch (error) {
              console.error("Error sponsoring:", error);
              // Handle the error, for example, by setting an error state or showing a notification
            }
          })();
        },
      },
      "Sponsor"
    ),
    React.createElement(
      Button,
      {
        variant: 'solid',
        color: 'danger',
        onClick: () => {
          // Call the unsponsor function
          unsponsorCall(item.data.courseId, sponsorAmountInWei);
        },
      },
      "Unsponsor"
    )
  );

  function isCourseLocked(courseLStatus) {
    return courseLStatus === "In-Progress" || courseLStatus === "Complete";
}

  useEffect(() => {
    feather.replace();
  }, []);

  function InitializeButton() {
    return (
      <Button
        variant="outlined"
        color="danger"
        onClick= {initializeCourseCall}
        disabled={isInitializingCourse}
      >
        Initialize Me!
      </Button>
    );
  }
  
  const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const LoadingOverlay = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7); // semi-transparent white
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; // to ensure it's above other content
`;


function CourseDetailsModal() {
  const storage = useStorage();
  const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false); // New state to track upload progress
  const [loaded, setLoaded] = React.useState(false);

    // New states for input fields
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [timeCommitment, setTimeCommitment] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [calendarLink, setCalendarLink] = React.useState('');
    const [payment, setPayment] = React.useState('');

  const handleFileChange = (file) => {
    setUploading(true); // Start the loading state
    handlePdf(file).finally(() => {
      setUploading(false); // End the loading state after handlePdf finishes
      setLoaded(true);
    });
  };

  return (
    <React.Fragment>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          Input Course Details
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog>
            <DialogTitle>Input Course Details</DialogTitle>
            <DialogContent>Fill in the information of the course.</DialogContent>
            <form
            onSubmit={(event) => {
              event.preventDefault();
              // You can put any other code you want here
              setOpen(false); // This will close the modal when the form is submitted.
            }}
            >
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input maxLength="5" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Name your course" autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input maxLength="250" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write a brief description" required />
                </FormControl>
                <FormControl>
                  <FormLabel>Time Commitment in hours</FormLabel>
                  <Input type="number" value={timeCommitment} onChange={(e) => setTimeCommitment(e.target.value)}placeholder="Recommend 1-2hr" required />
                </FormControl>
                <FormControl>
                  <FormLabel>Course Starts</FormLabel>
                  <Input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </FormControl>
                <FormControl>
                <FormLabel>Calender Link</FormLabel>
                  <Input type="url" value={calendarLink} onChange={(e) => setCalendarLink(e.target.value)} placeholder="Link to a course calendar"/>
                </FormControl>
                <FormControl>
                <FormLabel>Set Your Payment</FormLabel>
                  <Input type="number" value={payment} onChange={(e) => setPayment(e.target.value)} placeholder="Enter amount in MATIC" required />
                </FormControl>
                <FormControl>
                <div style={{ position: 'relative' }}>
        <Button
          component="label"
          role={undefined}
          tabIndex={-1}
          variant="outlined"
          color="neutral"
          startDecorator={
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </SvgIcon>
          }
        >
          Upload Syllabus
          <VisuallyHiddenInput
          required
            type="file"
            accept=".pdf"
            value={syllabusPdf}
            onChange={(e) => handleFileChange(e.target.files[0])}
          />
        </Button>
        {uploading && (
          <LoadingOverlay>
            <CircularProgress />
            Uploading...
          </LoadingOverlay>
        )}
      </div>
                </FormControl>
                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    );
  }
  
  if (teacherAddress === '0x0000000000000000000000000000000000000000') {
    return (
      <Card
        variant='outlined'
        orientation='horizontal'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',  // Adjust this value based on your design needs
          boxShadow: 'none',
          borderRadius: 'sm',
        }}
      >
        <InitializeButton />
      </Card>
    );
  } else {
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
        flexDirection: 'row',
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
        ),
        // Inside the return statement of CourseCard

  address === teacherAddress && (
    courseLStatus === "Pending" ? 
      <CourseDetailsModal /> :
    courseLStatus === "Open" ?
      <Button variant="outlined" color="neutral" onClick={startCourse}>Start Course</Button> :
    // For "In-Progress" we will add the modal for Pass/Fail/Claim Payment in the next step
    courseLStatus === "In-Progress" ?
      <Button variant="outlined" color="neutral">Pass/Fail/Claim Payment</Button> : 
      null
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
          },
          
          React.createElement(
            Chip,
            {
              component: "a",
              href: `https://polygonscan.com/address/${item.data.courseId}`,
              clickable: true,
              target: "_blank",  // This opens the link in a new tab
              rel: "noopener noreferrer",  // This is a best practice for security when using target="_blank"      
              size: 'sm',
              variant: 'outlined',
              sx: {
                flexDirection: 'row',
                height: '0.1', // Adjust this to control the chip height
                padding: '0.25rem 0.5rem', // Adjust the padding as needed
              },
            },
          `Course ID: ${item.data.courseId}`
        ),
        React.createElement(
          Chip,
          {
            size: 'sm',
            variant: 'soft',
            sx: {
              flexDirection: 'row',
              height: '0.01', // Adjust this to control the chip height
              padding: '0.25rem 0.5rem', // Adjust the padding as needed
            },
          },
          `Contract Balance: ${balance}`
        ),
        ),
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
              title
            ),
            React.createElement(
              Typography,
              {
                fontWeight: 'md',
                fontSize: 'sm',
              },
              React.createElement(
                Box,
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
              fontSize: 'xs',
            },
            displayAddress
          ),
          React.createElement(
            Typography,
            {
              startDecorator: React.createElement('i', { 'data-feather': 'calendar' }),
              fontSize: 'xs',
              display: {
                xs: 'none',
                md: 'flex',
              },
            },
            new Date(startDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short"
          })
          ),
          React.createElement(
            Typography,
            {
              startDecorator: React.createElement('i', { 'data-feather': 'clock' }),
              fontSize: 'xs',
              display: {
                xs: 'none',
                md: 'flex',
              },
            },
            timeCommitment + 'hr'
          ),
          React.createElement(
            Typography,
            {
              sx: { flexGrow: 1, textAlign: 'right' },
            },
            React.createElement(
              'strong',
              null,
              <p>{studentStake && ethers.utils.formatEther(studentStake.toString())} MATIC</p>
            ),
          )
        ),

        isPaymentClaimed ?
        React.createElement(
          Typography,
          {
            fontSize: 'xs',
            color: 'success',
            sx: {
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 2
            },
            zIndex: 1000,
          },
          'Payout Complete!'
        )
        :
        isCourseLocked(courseLStatus) ?
        React.createElement(
          Typography,
          {
            fontSize: 'xs',
            color: 'success',
            sx: {
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 2
            },
            zIndex: 1000,
          },
          'Sponsorship locked for payout!'
        )
        :
        React.createElement(
          Tooltip,
          {
            placement: "top-end",
            variant: "outlined",
            arrow: true,
            title: tooltipContent
          },
        React.createElement(
          LinearProgress,
          {
            determinate: true,
            value: progress,
            variant: 'outlined', // Choose your preferred variant
            size: 'sm',       // Choose your preferred size
            sx: {
              '--LinearProgress-radius': '20px',
              '--LinearProgress-thickness': '24px',
            },
      
          },
          React.createElement(
            Typography,
            {
              fontSize: 'xs',
              display: {
                xs: 'none',
                md: 'flex',
              },
              zIndex: 1000,
            },
            maticNeeded + ' MATIC needed to start course'
          ),
        ),
        ),
        
        (courseLStatus !== "Complete" && buttonAction) && React.createElement(
          Button,
          {
            variant: 'solid',
            color: buttonColor,
            onClick: buttonAction,
            sx: { zIndex: 1000 }
          },
          buttonLabel
        )
                            
      )
    )
  );
}
}