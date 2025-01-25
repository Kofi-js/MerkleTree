import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

//list of 5  addresses

const addresses = [
    '0x1234567890123456789012345678901234567890',
    '0x2345678901234567890123456789012345678901',
    '0x3456789012345678901234567890123456789012',
    '0x4567890123456789012345678901234567890123',
    '0x5678901234567890123456789012345678901234'
];

// Convert each address to a buffer using keccak256 hash
const leaves = addresses.map(x => keccak256(x));

// Create the Merkle Tree
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

// Get the Merkle Root
const root = tree.getHexRoot();
console.log('Merkle Root:', root);

// Get proof for the first address
const leaf = keccak256('0x1234567890123456789012345678901234567890');
const proof = tree.getHexProof(leaf);

// Verify the proof
const verifyResult = tree.verify(proof, leaf, root);
console.log('Verification Result:', verifyResult);

// If you want to see the proof structure
console.log('Proof:', proof);