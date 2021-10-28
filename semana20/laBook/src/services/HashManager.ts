import * as bcrypt from "bcryptjs";

export class HashManager {
  public async hash(text: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const cypherText = await bcrypt.hash(text, salt);
    return cypherText
  }

  public async compare(plaintext: string, hash: string): Promise<boolean> {
    const hashCompare: boolean = await bcrypt.compare(plaintext, hash)
    return hashCompare
  }
}
