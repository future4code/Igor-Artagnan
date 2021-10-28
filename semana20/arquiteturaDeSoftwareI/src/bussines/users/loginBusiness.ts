
async getUserByEmail(user) {

        
        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashCompare = await compare(user.password, userFromDB.getPassword());

        const accessToken = generateToken({ id: userFromDB.getId()});

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }