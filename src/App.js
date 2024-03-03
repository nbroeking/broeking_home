import './App.css';
import { Provider, Heading, NavLink, Small, Absolute} from 'rebass'
import {
  Section, Hero, ScrollDownIndicator, Flex, Feature, Contributor, Subhead, CallToAction
} from 'react-landing-page'

function App() {

  return (
    <Provider>
      <Absolute pb={5}>
        <Absolute zIndex={1} left={0} right={0} top={0}>
          <Flex is="header" p={3}>
            <NavLink href="/" fontSize={3}>Broeking Family</NavLink>
          </Flex>
        </Absolute>
      </Absolute>
        <Hero
          color="black"
          bg="white"
          h="100px"
          backgroundImage="./landing.png"
          style={{height: "100px"}}
        >
          <Heading>Broeking Family</Heading>
          <Subhead>Welcome to the Broeking family hub.</Subhead>
          <br/>
          <br/>
          <CallToAction href="mailto:inquiries@broeking.io" mt={3} bg="grey">Contact for Inquiries</CallToAction>
        </Hero>
      <Flex alignItems="center" p={3} bg={'#EFEFEF'}>
        <Small color="grey" ml="auto" mr="auto">© Nicolas Broeking, 2024</Small>
      </Flex>
    </Provider>
  );
}

export default App;
