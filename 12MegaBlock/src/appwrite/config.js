import { Client, ID, Databases, Storage, Query } from 'appwrite'
import conf from '../conf/conf';

export class Service {

    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        // creating new database and pass client
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //create blog function
    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                //last we need object as per the syntax
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    //update blog function
    async updatePost (slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,

                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("facing error in updatePost", error)
        }
    }

    //delete blog function
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
           )

           return true;

        } catch (error) {
            console.log("deletePost", error)
            return false;
        }
    }
    
    // single post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            
        } catch (error) {
            console.log('error comes from getposts', error);
            return false
        }
        
    }

    // all post with query get here
    async getPosts( queries = [ Query.equal("status", "active")]){
        try {
            await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,  
            )
        } catch (error) {
            console.log("error in getting all post", error);
            return false;
        }
        
    }

    // File Upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error come from upload file", error);
            return false
        }
    }

    //delete file
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("comes from deleFile", error);
        }
    }

}


const service = new Service()

export default service;