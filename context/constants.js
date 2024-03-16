//organizerAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'

import voting from "./Create.json";

export const VotingAddress = '0xdD96b22bCDb8226DE95aDD9e8B93c9977b94C77E';
export const VotingAddressABI = voting.abi;
export const organiserAddress = (process.env.NEXT_PUBLIC_ORGANISER).toLowerCase();