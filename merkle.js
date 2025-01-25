import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

// The 5 addresses
const addresses = [
    '0x1234567890123456789012345678901234567890',
    '0x2345678901234567890123456789012345678901',
    '0x3456789012345678901234567890123456789012',
    '0x4567890123456789012345678901234567890123',
    '0x5678901234567890123456789012345678901234'
];

// let's hash each address with keccak256 and turning them into buffers.
const leaves = addresses.map(x => keccak256(x));

// Now let's create the Merkle Tree
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

// To get the Root
const root = tree.getHexRoot();
console.log('Merkle Root:', root);

// Proof for the first address
const leaf = keccak256('0x1234567890123456789012345678901234567890');
const proof = tree.getHexProof(leaf);

// Verify the proof
const verifyResult = tree.verify(proof, leaf, root);
console.log('Verification Result:', verifyResult);

// If you want to see the proof structure
console.log('Proof:', proof);