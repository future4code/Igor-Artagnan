import { connection } from "../data/connection";

const userTableName = "User_55"

const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });
 
    return result[0];
   }
 