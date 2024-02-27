import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import vd from '../../assets/images/pexels-buro-millennial-1438081.jpg';
import { Link } from 'react-router-dom';
import introvideo from '../../assets/videos/introvideo.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src={vd} boxSize={['40', '48']} />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Javed Akhtar" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hii, I am Full-Stack Web Developer. As well as student.
      Our mission is to make interesting projects.`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introvideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        size={'xs'}
        my={'4'}
        children="Refund only applicable for cancelation within 7 days."
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={'termsAndCondition'} />
      <HStack my={'4'} padding={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children="Payment is secured by Razorpay"
        />
      </HStack>
    </Container>
  );
};

export default About;
