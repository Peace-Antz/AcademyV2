/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { typographyClasses } from '@mui/joy/Typography';
import Container from '@mui/joy/Container';
import { Avatar } from '@mui/joy';

export default function HeroLeft05() {
  return (
    <Container
      sx={(theme) => ({
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 10,
        gap: 4,
        [theme.breakpoints.up('834')]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up('1199')]: {
          gap: 12,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up('834')]: {
            minWidth: 420,
            alignItems: 'center',
            textAlign: 'center',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
        <Avatar src="" size="lg"/>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
        Unlock Your Potential with Certificates
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          Unlock Protocol offers customizable and verifiable certificates. Enhance your credibility with blockchain-based certification.
        </Typography>
        <Input
          size="lg"
          placeholder="Enter your email"
          sx={{ alignSelf: 'auto', mt: 2 }}
        />
        <Button
          size="lg"
          endDecorator={<ArrowForward />}
          sx={{ alignSelf: 'auto' }}
          component="a"
          href="https://app.unlock-protocol.com/certification"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create Certificates
        </Button>
        <Typography textColor="text.secondary">
          By signing up, you agree to our{' '}
          <Link color="neutral">
            <b>Privacy Policy</b>
          </Link>
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
          ☮️"Be kind. Be relentless."🐜
        </Typography>
      </Box>
    </Container>
  );
}
