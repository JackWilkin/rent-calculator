import React, { useState } from 'react';
import styled from 'styled-components';
import Dependents from './Dropdowns/Dependents';
import HouseholdIncome from './Dropdowns/HouseholdIncome';
import Housing from './Dropdowns/Housing';
import Debt from './Dropdowns/Debt';
import FamilyWealth from './Dropdowns/FamilyWealth';
import Savings from './Dropdowns/Savings';

const Container = styled.div`

`;

function getMedian(values){
  if(values.length ===0) throw new Error("No inputs");

  values.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(values.length / 2);
  
  if (values.length % 2)
    return values[half];
  
  return (values[half - 1] + values[half]) / 2.0;
}

export default function RentCalculator() {
  const [isMinor, setIsMinor] = useState();
  const [suggestedDonation, setSuggestedDonation] = useState({ min: 60, max: 60 });
  const [tierMap, setTierMap] = useState({});

  const donationTiers = {
    1: { min: undefined, max: 60 },
    2: { min: 120, max: 180 },
    3: { min: 180, max: 240 },
    4: { min: 360, max: 600 },
    5: { min: 720, max: 1200 },
    6: { min: 1800, max: 3000 },
    7: { min: 3600, max: 6000 },
    8: { min: 6000, max: undefined}
  }

  const updateTier = (name, tier) => {
    const updatedValue = tierMap[name] = tier
    setTierMap(tierMap => ({
      ...tierMap,
      ...updatedValue
    }));
    if (Object.keys(tierMap).length === 7) {
      const tierList = Object.values(tierMap)
      const tierSum = tierList.reduce((total, currentValue) => total = total + currentValue, 0);
      const tierAverage = tierSum / 7
      const median = getMedian(tierList)
      const newTier = Math.round((.25 * tierAverage) + (.75 * median))
      setSuggestedDonation(donationTiers[newTier])
    }
  }

  const under18 = (isMinor) => {
    setIsMinor(isMinor)
    setSuggestedDonation(donationTiers[1])
  }

  const minDonation = suggestedDonation['min'] !== undefined ? suggestedDonation['min']: 'No minimum'
  const maxDonation = suggestedDonation['max'] !== undefined ? suggestedDonation['max'] : 'No maximum'

  const minMonthlyDonation = suggestedDonation['min'] !== undefined ? suggestedDonation['min']/12 : 'No minimum'
  const maxMonthlyDonation = suggestedDonation['max'] !== undefined ? suggestedDonation['max']/12 : 'No maximum'

  // Dad suggests a progress bar 7 questionds 

  return (
    <Container>
      
          <h2>Back Rent Calculator</h2>
          <p>Are you under 18?</p>
          <button onClick={() => {under18(true)}}>Yes</button>
          <button onClick={() => {under18(false)}}>No</button>
          {isMinor &&
          <p>Skip the rest of the questions, see suggested donation at the bottom of the page</p>}
          {!isMinor &&
            <form>
                <HouseholdIncome onChange={updateTier}/>
                <Dependents onChange={updateTier}/>
                <Housing onChange={updateTier}/>
                <Debt onChange={updateTier}/>
                <FamilyWealth onChange={updateTier}/>
                <Savings onChange={updateTier}/>
            </form>
          }
          <p>Suggested donation ${minMonthlyDonation} - ${maxMonthlyDonation}/month or ${minDonation} - ${maxDonation}/year </p>
    </Container>
  );
}