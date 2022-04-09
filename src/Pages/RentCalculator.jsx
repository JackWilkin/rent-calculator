import React, { useState } from 'react';
import styled from 'styled-components';
import Dependents from './Dropdowns/Dependents';
import HouseholdIncome from './Dropdowns/HouseholdIncome';
import Housing from './Dropdowns/Housing';
import Debt from './Dropdowns/Debt';
import FamilyWealth from './Dropdowns/FamilyWealth';
import Education from './Dropdowns/Education';
import Savings from './Dropdowns/Savings';

const Container = styled.div`

`;

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
      const tierModes = getModes(tierList)
      const maxMode = Math.max(tierModes)
      const tierSum = tierList.reduce((total, currentValue) => total = total + currentValue, 0);
      const tierAverage = tierSum / 7

      const newTier = Math.round((.25 * tierAverage) + (.75 * maxMode))
      setSuggestedDonation(donationTiers[newTier])
    }
  }

  function getModes(array) {
    var frequency = []; // array of frequency.
    var maxFreq = 0; // holds the max frequency.
    var modes = [];
  
    for (var i in array) {
      frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
  
      if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
        maxFreq = frequency[array[i]]; // update max.
      }
    }
  
    for (var k in frequency) {
      if (frequency[k] === maxFreq) {
        modes.push(k);
      }
    }
  
    return modes;
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
          <button onClick={() => {setIsMinor(true)}}>Yes</button>
          <button onClick={() => {setIsMinor(false)}}>No</button>
          {isMinor &&
          <p>Skip the rest of the questions, see suggested donation at the bottom of the page</p>}
          {!isMinor &&
            <form>
                <HouseholdIncome onChange={updateTier}/>
                <Dependents onChange={updateTier}/>
                <Housing onChange={updateTier}/>
                <Debt onChange={updateTier}/>
                <FamilyWealth onChange={updateTier}/>
                <Education onChange={updateTier}/>
                <Savings onChange={updateTier}/>
            </form>
          }
          <p>Suggested donation ${minMonthlyDonation} - ${maxMonthlyDonation}/month or ${minDonation} - ${maxDonation}/year </p>
    </Container>
  );
}