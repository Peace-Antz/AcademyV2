import React from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import CssBaseline from '@mui/joy/CssBaseline';
import HeaderSection from '/home/peaceantz/academyV2/src/components/HeaderSection.js';
import Main from '/home/peaceantz/academyV2/src/components/Main.js';
import CourseCard from '../components/CourseCard.js';
import Pagination from '/home/peaceantz/academyV2/src/components/Pagination.js';
import Search from '/home/peaceantz/academyV2/src/components/Search.js';
import Filters from '/home/peaceantz/academyV2/src/components/Filters.js';
import Toggles from '/home/peaceantz/academyV2/src/components/Toggles.js';
import { useContract, useContractRead, useContractWrite, useContractEvents, useAddress, useStorage, MediaRenderer } from "@thirdweb-dev/react";
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import CoursesData from '../data/coursesData.js';

import { ethers } from "ethers";

function Courses() {
  const academyAddress = "0x03aB6c074373e7957e07bF3FEb0629E5323a464B"
  // eslint-disable-next-line
  const { contract, isLoadingContract, errorContract } = useContract(academyAddress); //Make sure to change initilize call (academyAddress) as well if you change this.
  const address = useAddress();
  const [account, setAccount] = useState("");
  console.log("account:", account);
  // const { account } = address || {};
  const { data: event } = useContractEvents(
    contract,
    "CourseCreated",
    {
      queryFilter: {
        filters: {},
        fromBlock: 	44871649, // Events starting from this block
        toBlock: "latest", // Events up to this block
        order: "asc", // Order of events ("asc" or "desc")
      },
      subscribe: true, // Subscribe to new events
    },
  );
// eslint-disable-next-line
  const { data: academyInfo, isLoading: isLoadingAcademyInfo, error: academyInfoError } = useContractRead(contract, "academyInfo");
  console.log("academyInfo:", academyInfo);
  // const [courseCount, setCourseCount] = useState(0);

    useEffect(() => {
      if (address & event) {
        setAccount(address);
        // setCourseCount(data.length);
      }
    }, [address, event]);

    console.log("address:", address);

    useEffect(() => {
      console.log('Courses has re-rendered!');
  }, []);


  

  

    // useEffect(() => {
    //   if (data) {
    //     setCourseCount(data.length);
    //   }
    // }, [data]);

    //TROUBLESHOOTING
    //console.log("item:", item);
    console.log("data:", event);
    
  
    // Use the useContractWrite hook to create a function for creating courses
    // eslint-disable-next-line
  const { mutateAsync: createCourse, isLoading: isCreatingCourse } = useContractWrite(contract, "createCourse");

  const createCourseCall = async () => {
    try {
      // Temporarily set args to an empty array
      const data = await createCourse({ args: [] });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  console.log("academyInfo:", academyInfo);


  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
         <Main>
          <Grid
            container
            sx={{
              width: '100%',
              height: '100dvh',

              margin: 0,
            }}
          >
            <Grid
              xs={12}
              lg={8}
              sx={{
                overflowY: 'scroll',
                height: '100%',
                px: { xs: 2, md: 4 },
                pt: { xs: 8, md: 4 },
                pb: 5,
              }}
            >
              <Stack spacing={2}
              sx={{ minWidth: 0 }}
              >
                <HeaderSection createCourseCall={createCourseCall} />
                <Divider />
                <Box
                  sx={{
                    width: '100%',
                    height: 360,
                    backgroundSize: 'cover',
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80")',
                  }}
                  display={{ xs: 'block', md: 'none' }}
                />
                <Filters />
                <Search />
                <Toggles />
                {event && event.length > 0 && [...event].sort((a, b) => b.transaction.blockNumber - a.transaction.blockNumber).map((item, index) => {
                console.log('Mapping item: ', item);
                
                // Assuming item has a courseId and CoursesData is an array you can search through
                const courseId = item.data ? item.data.courseId : null;
                const courseData = CoursesData[courseId];
                const description = courseData ? courseData.description : "";
                const courseTitle = courseData ? courseData.courseTitle : "";
                console.log("Contract Instance: ", contract);
                console.log("item.data.courseId: ", item && item.data ? item.data.courseId : null);
                if(item) {
                    console.log("Item is defined:", item);
                    if(item.data) {
                      console.log("item.data is defined:", item.data);
                      if(item.data.courseId) {
                        console.log("item.data.courseId is defined:", item.data.courseId);
                      } else {
                        console.error("item.data.courseId is undefined");
                      }
                    } else {
                      console.error("item.data is undefined");
                    }
                  } else {
                    console.error("Item is undefined");
                  }

                return (
                  item && <CourseCard 
                    //key={index} 
                    item={item} 
                    academyAddress={academyAddress}
                    //category={description}
                    //title={courseTitle}
                  />
                );
              })}
                <Divider />
                <Pagination />
              </Stack>
            </Grid>
            <Grid
              xs={4}
              sx={{
                display: { xs: 'none', lg: 'block' },
              }}
            >
              <Box
                sx={{
                  borderLeft: '1px solid',
                  borderColor: 'divider',
                  padding: 1.5,
                  height: '100dvh',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'background.level1',
                    height: '100%',
                    borderRadius: 'sm',
                    backgroundSize: 'cover',
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80")',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Main>
      </Box>  
    </Box>
  );

}

export default Courses;

