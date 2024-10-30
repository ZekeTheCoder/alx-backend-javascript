// MajorCredits and MinorCredits interfaces
interface MajorCredits {
  credits: number;
  _MajorCreditsBrand: void; // Brand property for nominal typing
}

interface MinorCredits {
  credits: number;
  _MinorCreditsBrand: void; 
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits; // Calculate total
  console.log(`Summing Major Credits: ${subject1.credits} + ${subject2.credits} = ${totalCredits}`);
  return {
    credits: totalCredits,
    _MajorCreditsBrand: undefined, // Maintain the brand
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  console.log(`Summing Minor Credits: ${subject1.credits} + ${subject2.credits} = ${totalCredits}`);  
  return {
    credits: totalCredits,
    _MinorCreditsBrand: undefined,
  };
}

// Test implementation
const major1: MajorCredits = { credits: 3, _MajorCreditsBrand: undefined };
const major2: MajorCredits = { credits: 4, _MajorCreditsBrand: undefined };
const minor1: MinorCredits = { credits: 2, _MinorCreditsBrand: undefined };
const minor2: MinorCredits = { credits: 1, _MinorCreditsBrand: undefined };

const majorSum = sumMajorCredits(major1, major2);
const minorSum = sumMinorCredits(minor1, minor2);
console.log(majorSum);
console.log(minorSum);
