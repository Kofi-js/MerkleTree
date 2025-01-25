import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

// Define your addresses
const addresses = ['addr1', 'addr2', 'addr3', 'addr4', 'addr5'];

// Convert each address to a buffer using keccak256 hash
const leaves = addresses.map(x => keccak256(x));

// Create the Merkle Tree
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

// Get the Merkle Root
const root = tree.getHexRoot();
console.log('Merkle Root:', root);

// Get proof for the first address ('addr1')
const leaf = keccak256('addr1');
const proof = tree.getHexProof(leaf);

// Verify the proof
const verifyResult = tree.verify(proof, leaf, root);
console.log('Verification Result:', verifyResult);

// If you want to see the proof structure
console.log('Proof:', proof);