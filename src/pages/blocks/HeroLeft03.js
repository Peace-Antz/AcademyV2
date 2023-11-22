import * as React from 'react';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../../components/TwoSidedLayout';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

export default function HeroLeft03() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Empower your Community!
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Support Decentralized Education
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Some benefits of sponsoring a course includes bragging rights, potential recruitment of talent from courses and also just getting the word out on a project or business you want to support!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          my: 2,
          '& > *': { flex: 'auto' },
        }}
      >
        <Button size="lg" variant="outlined" color="neutral" component={RouterLink} to="/resources">
          Learn More
        </Button>
        <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />} component={RouterLink} to="/courses">
          Sponsor a Course
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          textAlign: 'left',
          '& > *': {
            flexShrink: 0,
          },
        }}
      >
        <Link fontWeight="lg" href= "https://discord.gg/KmZXkn5AFM" target="_blank">
        <AvatarGroup size="lg">
          <Avatar />
        </AvatarGroup>
        </Link>
        <Typography textColor="text.secondary"><p></p>
          Join our Colony of <b>Antz</b>
        </Typography>
      </Box>

      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        HeroLeft03
      </Typography>
    </TwoSidedLayout>
  );
}