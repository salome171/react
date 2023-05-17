import "./App.css";
import { HeaderWrapper } from "./components/common/header";
import { InnerPhotos } from "./components/common/InnerPhotos";
import { ProgrammingLanguages } from "./components/common/ProgrammingLanguages";
import { SinglePrice } from "./components/common/SinglePrice";
import { UniqDemos } from "./components/common/UniqDemos";
import { MainServices } from "./components/common/MainServices";
import { BestUIUX } from './components/common/BestUIUX';
import { AwesomeCodingStyle } from './components/common/AwesomeCodingStyle';
import { AdjustableColumn } from './components/common/AdjustableColumn';
import { PricingPlan } from './components/common/PricingPlan';
import { SupportTeam } from './components/common/SupportTeam';
import { CoreFeatures } from './components/common/CoreFeatures';
import { Background } from './components/common/Background';
import {BloggingStyle } from './components/common/BloggingStyle';
import { Responsive } from './components/common/Responsive';
import { LastPart } from './components/common/LastPart';

const App = () => {

  return (
  <div className="App">

    <HeaderWrapper />
    <InnerPhotos />
    <ProgrammingLanguages />
    <SinglePrice />
    <UniqDemos />
    <MainServices />
    <BestUIUX />
    <AwesomeCodingStyle />
    <AdjustableColumn />
    <PricingPlan />
    <SupportTeam /> 
    <CoreFeatures />
    <Background />
    <BloggingStyle />
    <Responsive />
    <LastPart />

  </div>)
}

export default App;
