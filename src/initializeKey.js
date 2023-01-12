import { Keypair } from "@solana/web3.js"
import fs from "fs"
import airdropSol from "./airdropSol.js"
import dotenv from "dotenv"
dotenv.config()

async function initializeKeypair(connection) {
  // create key and save to .env
  if (!process.env.PRIVATE_KEY) {
    console.log("Generating 🔑 ...")
    const signer = Keypair.generate()

    console.log("added key to .env")
    fs.writeFileSync(".env", `PRIVATE_KEY=${signer.secretKey.toString()}`)

    console.log(`Generated Public 🔑: ${signer.publicKey.toBase58()}`)

    // airdrop
    // await airdropSol(signer, connection)

    return signer
  }

  // import key from .env
  const secret = process.env.PRIVATE_KEY.split(",").map(Number)
  const secretKey = Uint8Array.from(secret)
  const signer = Keypair.fromSecretKey(secretKey)

  console.log("Found! Public 🔑: ", signer.publicKey.toBase58())

  // airdrop
  // await airdropSol(signer, connection)

  return signer
}

export default initializeKeypair
