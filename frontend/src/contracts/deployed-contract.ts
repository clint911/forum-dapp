import type { Address } from "viem";
import { forumAbi } from "./generated";

const deployedAddress = process.env
    .NEXT_PUBLIC_DEPLOYED_CONTRACT_ADDRESS as Address;

// Type inference correctly
const ABI = forumAbi;
export { ABI, deployedAddress };
//Deployed to: 0xD14DbA9EAaD27FCC7980b07F50211A370c1Deef9
