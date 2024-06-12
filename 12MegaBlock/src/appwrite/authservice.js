import { Client, Account, ID } from 'appwrite'
import conf from '../conf/conf';

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // async/await iske liye use kar raha hu becuase jab tab acoount creation nahi hota aage nahi badhna chahte hai 

    async createAccount({email, password, name}) {
        try {
            //unique id humlog ne appwrite se liya hai 
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            
            // agar account create hota hai to user ko return to karna hoga 
            if (userAccount) {
                // call another method
                return this.loginAccount({email, password});

            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async loginAccount({email, password}){
        try {
           return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

}

// koi bhi access karega to authService . lagake jo value chahiye lelega
const authService = new AuthService();

export default AuthService