/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../../components/TwoSidedLayout';

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Free Education! If you pass...
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Peace Antz Academy
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
      Join us in a movement where education is not just a journey but a shared adventure. Together, let's unlock the possibilities of tomorrow.
      </Typography>
      <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
        Explore Courses
      </Button>
      <Typography>
        Already a member? <Link fontWeight="lg">Sign in</Link>
      </Typography>

      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        "Be kind. Be relentless."
      </Typography>
    </TwoSidedLayout>
  );
}